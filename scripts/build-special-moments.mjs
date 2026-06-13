import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sourceDirName = "@Special Moment";
const sourceDir = path.join(rootDir, sourceDirName);
const outputImageDir = path.join(rootDir, "assets", "special-moment");
const outputPath = path.join(rootDir, "data", "special_moments.json");
const chunksPath = path.join(rootDir, "data", "knowledge_chunks.json");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic"]);

function encodeHref(filePath) {
  return filePath.split(path.sep).map(encodeURIComponent).join("/");
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function photoNumber(fileName) {
  return Number(fileName.match(/(\d+)/)?.[1] || 0);
}

function optimizeImage(inputPath, outputPath) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  const result = spawnSync("sips", [
    "-s", "format", "jpeg",
    "-s", "formatOptions", "78",
    "-Z", "1600",
    inputPath,
    "--out",
    outputPath
  ], { encoding: "utf8" });

  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || `Gagal mengoptimalkan ${inputPath}`);
  }
}

if (!fs.existsSync(sourceDir)) {
  throw new Error(`Folder Special Moment tidak ditemukan: ${sourceDir}`);
}

const cohorts = fs.readdirSync(sourceDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => {
    const year = entry.name.match(/\b(20\d{2})\b/)?.[1];
    if (!year) return null;

    const cohortDir = path.join(sourceDir, entry.name);
    const cohortSlug = `angkatan-${year}`;
    const photos = fs.readdirSync(cohortDir, { withFileTypes: true })
      .filter((photo) => photo.isFile() && imageExtensions.has(path.extname(photo.name).toLowerCase()))
      .sort((a, b) => photoNumber(a.name) - photoNumber(b.name) || a.name.localeCompare(b.name))
      .map((photo, index) => {
        const sourcePath = path.join(cohortDir, photo.name);
        const sourceRelative = path.relative(rootDir, sourcePath);
        const outputFile = `photo-${String(index + 1).padStart(2, "0")}.jpg`;
        const outputFullPath = path.join(outputImageDir, cohortSlug, outputFile);
        optimizeImage(sourcePath, outputFullPath);
        const outputRelative = path.relative(rootDir, outputFullPath);
        const stat = fs.statSync(outputFullPath);

        return {
          id: `${cohortSlug}-photo-${String(index + 1).padStart(2, "0")}`,
          title: `Special Moment Angkatan ${year} - Foto ${index + 1}`,
          titleId: `Special Moment Angkatan ${year} - Foto ${index + 1}`,
          titleEn: `Special Moment Cohort ${year} - Photo ${index + 1}`,
          year,
          cohort: `Angkatan ${year}`,
          cohortEn: `Cohort ${year}`,
          file: outputFile,
          sourceFile: photo.name,
          href: encodeHref(outputRelative),
          originalHref: encodeHref(sourceRelative),
          sizeKb: Math.round(stat.size / 1024)
        };
      });

    return {
      id: cohortSlug,
      year,
      title: `Special Moment Angkatan ${year}`,
      titleId: `Special Moment Angkatan ${year}`,
      titleEn: `Special Moment Cohort ${year}`,
      folder: entry.name,
      cover: photos[0]?.href || "",
      total: photos.length,
      photos
    };
  })
  .filter(Boolean)
  .sort((a, b) => Number(a.year) - Number(b.year));

const manifest = {
  source: sourceDirName,
  generatedAt: new Date().toISOString(),
  totalCohorts: cohorts.length,
  totalPhotos: cohorts.reduce((sum, cohort) => sum + cohort.photos.length, 0),
  cohorts
};

fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

if (fs.existsSync(chunksPath)) {
  const chunks = JSON.parse(fs.readFileSync(chunksPath, "utf8"));
  const retained = chunks.filter((chunk) => !String(chunk.id || "").startsWith("special-moment-"));
  const specialMomentChunks = cohorts.map((cohort) => ({
    id: `special-moment-${cohort.id}`,
    title: cohort.title,
    sourceTitle: cohort.title,
    sourceUrl: "#special-moment",
    text: `${cohort.title} tersedia di galeri Special Moment S2 Statistika Terapan. Angkatan ${cohort.year} memiliki ${cohort.total} foto yang sudah dioptimalkan untuk web. Galeri menampilkan dokumentasi kegiatan dan momen kebersamaan mahasiswa per angkatan.`
  }));
  fs.writeFileSync(chunksPath, `${JSON.stringify([...retained, ...specialMomentChunks], null, 2)}\n`);
}

console.log(`Berhasil membuat galeri ${manifest.totalPhotos} foto dari ${manifest.totalCohorts} angkatan.`);
