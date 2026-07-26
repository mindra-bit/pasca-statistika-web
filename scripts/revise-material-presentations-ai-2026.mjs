import fs from "node:fs/promises";
import path from "node:path";
import {
  FileBlob,
  PresentationFile,
} from "/Users/mindra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const catalog = JSON.parse(await fs.readFile(path.join(root, "data/materials.json"), "utf8"));
const qaRoot = "/private/tmp/materials-pptx-ai-qa";
await fs.mkdir(qaRoot, { recursive: true });

async function writeBlob(target, blob) {
  await fs.writeFile(target, new Uint8Array(await blob.arrayBuffer()));
}

function records(ndjson) {
  return ndjson.split("\n").filter(Boolean).map((line) => JSON.parse(line));
}

for (const material of catalog.materials) {
  const source = path.join(root, "@Materi Kuliah", material.folder, material.summaryFile);
  const qaDir = path.join(qaRoot, material.folder);
  await fs.mkdir(qaDir, { recursive: true });
  const presentation = await PresentationFile.importPptx(await FileBlob.load(source));
  const snapshot = await presentation.inspect({
    kind: "slide,textbox,shape,notes,layout",
    include: "id,slide,name,title,text,textPreview,bbox,isPlaceholder",
    maxChars: 500000,
  });
  await fs.writeFile(path.join(qaDir, "template-inspect.ndjson"), snapshot.ndjson);
  const all = records(snapshot.ndjson);
  const slides = all.filter((x) => x.kind === "slide");
  const last = slides.at(-1);
  const lastText = all.filter((x) => x.kind === "textbox" && x.slide === last.slide);
  const narrative = [...lastText]
    .filter((x) => (x.textChars ?? 0) >= 80)
    .sort((a, b) => b.textChars - a.textChars)[0];
  const headline = lastText.find((x) => (x.text ?? "").includes("Dari data menuju"));
  const notes = all.find((x) => x.kind === "notes" && x.slide === last.slide);
  if (!narrative) throw new Error(`No closing narrative found: ${source}`);
  const slide = presentation.resolve(last.id);
  await writeBlob(path.join(qaDir, "before-final-slide.png"), await presentation.export({ slide, format: "png", scale: 1 }));
  await fs.writeFile(path.join(qaDir, "before-final-slide.layout.json"), await (await slide.export({ format: "layout" })).text());

  presentation.resolve(narrative.id).text =
    `${material.category} memadukan teori, data, komputasi, validasi, dan komunikasi. ` +
    "AI mempercepat eksplorasi dan pemeriksaan awal; mahasiswa tetap memverifikasi asumsi, kode, hasil numerik, ketidakpastian, sumber, dan dampak sebelum mengambil keputusan.";
  if (headline) {
    presentation.resolve(headline.id).text = "AI mempercepat proses,\npenalaran tetap memimpin";
  }
  if (notes) {
    presentation.resolve(notes.id).setText(
      "[Sources]\n" +
      "- RPS mata kuliah Revisi AI 2026, Program Studi S2 Statistika Terapan FMIPA Universitas Padjadjaran.\n" +
      "[/Sources]\n" +
      "Penutup: CPL tetap. AI adalah akselerator ketercapaian CPMK/Sub-CPMK, bukan pengganti penalaran statistika. " +
      "Tekankan kewajiban prompt log ringkas, sumber, kode/notebook reproducible, validasi, dan audit trail."
    );
  }

  await writeBlob(path.join(qaDir, "after-final-slide.png"), await presentation.export({ slide, format: "png", scale: 1 }));
  await fs.writeFile(path.join(qaDir, "after-final-slide.layout.json"), await (await slide.export({ format: "layout" })).text());
  const montage = await presentation.export({ format: "webp", montage: true, scale: 0.5 });
  await writeBlob(path.join(qaDir, "final-montage.webp"), montage);
  const exported = await PresentationFile.exportPptx(presentation);
  await exported.save(source);

  const frameMap = {
    outputSlides: slides.map((s) => ({
      outputSlide: s.slide,
      sourceSlide: s.slide,
      narrativeRole: s.slide === last.slide ? "closing synthesis and responsible AI adoption" : "preserve existing instructional content",
      reuseMode: "import-and-edit-in-place",
      editTargets: s.slide === last.slide
        ? [
            { sourceElementId: narrative.id, action: "rewrite", reason: "align closing synthesis with RPS Revisi AI 2026" },
            ...(headline ? [{ sourceElementId: headline.id, action: "rewrite", reason: "state the human-oversight principle" }] : []),
            ...(notes ? [{ sourceElementId: notes.id, action: "rewrite", reason: "add RPS source and lecturer cue" }] : []),
          ]
        : [],
    })),
    omittedSourceSlides: [],
  };
  await fs.writeFile(path.join(qaDir, "template-frame-map.json"), JSON.stringify(frameMap, null, 2));
  await fs.writeFile(
    path.join(qaDir, "template-audit.txt"),
    `Deck: ${source}\nSlides inspected: ${slides.length}\n` +
    "All source slides and inherited layouts were preserved. Only inherited text elements on the closing slide and its notes were revised.\n"
  );
  await fs.writeFile(
    path.join(qaDir, "deviation-log.txt"),
    `Slide ${last.slide}: closing headline and synthesis revised to state AI as an accelerator of CPMK/Sub-CPMK while CPL remains unchanged.\n`
  );
  console.log(`Revised PPTX ${material.folder} (${slides.length} slides).`);
}
