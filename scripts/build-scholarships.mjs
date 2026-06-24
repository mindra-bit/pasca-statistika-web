import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputPath = path.join(rootDir, "data", "scholarships.json");
const chunksPath = path.join(rootDir, "data", "knowledge_chunks.json");

const scholarships = [
  {
    id: "lpdp",
    title: "LPDP Scholarship",
    titleId: "Beasiswa LPDP",
    titleEn: "LPDP Scholarship",
    categoryId: "Beasiswa Gelar",
    categoryEn: "Degree Scholarship",
    audienceId: "Pelamar Indonesia jenjang magister dan doktor",
    audienceEn: "Indonesian applicants for master's and doctoral study",
    descriptionId: "Beasiswa Pemerintah Indonesia untuk pendidikan magister dan doktor melalui skema pendanaan LPDP.",
    descriptionEn: "Indonesian government scholarship funding for master's and doctoral degree study.",
    url: "https://lpdp.kemenkeu.go.id/",
    image: "assets/scholarships/lpdp.jpg",
    sourceImage: "@Beasiswa/ChatGPT Image Jun 23, 2026, 09_35_42 PM (1).png"
  },
  {
    id: "knb",
    title: "KNB Scholarship",
    titleId: "Beasiswa KNB",
    titleEn: "KNB Scholarship",
    categoryId: "Gelar Internasional",
    categoryEn: "International Degree",
    audienceId: "Mahasiswa internasional dari negara berkembang",
    audienceEn: "International students from developing countries",
    descriptionId: "Beasiswa Pemerintah Indonesia bagi mahasiswa internasional dari negara berkembang untuk menempuh pendidikan tinggi di Indonesia.",
    descriptionEn: "Indonesian government scholarship for international students from developing countries.",
    url: "https://knb.kemdiktisaintek.go.id/",
    image: "assets/scholarships/knb.jpg",
    sourceImage: "@Beasiswa/ChatGPT Image Jun 23, 2026, 09_35_43 PM (2).png"
  },
  {
    id: "unpad-asean",
    title: "UNPAD ASEAN Scholarship",
    titleId: "UNPAD ASEAN Scholarship",
    titleEn: "UNPAD ASEAN Scholarship",
    categoryId: "Peluang ASEAN",
    categoryEn: "ASEAN Opportunity",
    audienceId: "Mahasiswa dan profesional dari kawasan ASEAN",
    audienceEn: "Students and professionals from ASEAN countries",
    descriptionId: "Program unggulan Unpad bagi mahasiswa dan profesional ASEAN melalui jalur magister dan kolaborasi akademik.",
    descriptionEn: "Unpad flagship opportunity for ASEAN students and professionals through master's and academic collaboration tracks.",
    url: "https://international.unpad.ac.id/unpad-asean-scholarship-uas/",
    image: "assets/scholarships/unpad-asean.jpg",
    sourceImage: "@Beasiswa/ChatGPT Image Jun 23, 2026, 09_35_43 PM (3).png"
  },
  {
    id: "brin",
    title: "BRIN Scholarship",
    titleId: "Beasiswa BRIN",
    titleEn: "BRIN Scholarship",
    categoryId: "Pendanaan Riset",
    categoryEn: "Research Funding",
    audienceId: "Pelamar dengan orientasi sains dan riset",
    audienceEn: "Science and research-oriented applicants",
    descriptionId: "Peluang pendanaan berbasis sains dan riset; ketersediaan skema serta persyaratan perlu diperiksa pada pengumuman tahun berjalan.",
    descriptionEn: "Science and research-oriented funding; annual scheme availability and eligibility should be checked on the official page.",
    url: "https://smup.unpad.ac.id/beasiswa-brin/",
    image: "assets/scholarships/brin.jpg",
    sourceImage: "@Beasiswa/ChatGPT Image Jun 23, 2026, 09_35_43 PM (4).png"
  },
  {
    id: "unpad-glow",
    title: "UNPAD GLOW",
    titleId: "UNPAD GLOW",
    titleEn: "UNPAD GLOW",
    categoryId: "Mobilitas Global",
    categoryEn: "Global Mobility",
    audienceId: "Mahasiswa Unpad untuk program mobilitas internasional",
    audienceEn: "Unpad students joining international mobility programs",
    descriptionId: "Dukungan mobilitas internasional bagi mahasiswa Unpad untuk pertukaran, riset, magang, dan program budaya.",
    descriptionEn: "International mobility support for Unpad students in exchange, research, internship, and cultural programs.",
    url: "https://international.unpad.ac.id/unpad-glow/",
    image: "assets/scholarships/unpad-glow.jpg",
    sourceImage: "@Beasiswa/ChatGPT Image Jun 23, 2026, 09_35_43 PM (5).png"
  },
  {
    id: "unpad-visiting-grant",
    title: "UNPAD Visiting Grant",
    titleId: "UNPAD Visiting Grant",
    titleEn: "UNPAD Visiting Grant",
    categoryId: "Mobilitas Masuk",
    categoryEn: "Inbound Mobility",
    audienceId: "Mahasiswa universitas mitra yang berkegiatan di Unpad",
    audienceEn: "Students from partner universities undertaking activities at Unpad",
    descriptionId: "Program dukungan bagi mahasiswa universitas mitra untuk kegiatan akademik, riset, atau magang di Unpad.",
    descriptionEn: "Support for students from partner universities joining academic, research, or internship activities at Unpad.",
    url: "https://international.unpad.ac.id/unpad-visiting-grant/",
    image: "assets/scholarships/unpad-visiting-grant.jpg",
    sourceImage: "@Beasiswa/ChatGPT Image Jun 23, 2026, 09_35_43 PM (6).png"
  }
].map((item) => {
  const imagePath = path.join(rootDir, item.image);
  const sourceImagePath = path.join(rootDir, item.sourceImage);
  if (!fs.existsSync(imagePath)) throw new Error(`Gambar web beasiswa tidak ditemukan: ${imagePath}`);
  if (!fs.existsSync(sourceImagePath)) throw new Error(`Gambar sumber beasiswa tidak ditemukan: ${sourceImagePath}`);
  return {
    ...item,
    imageSizeKb: Math.round(fs.statSync(imagePath).size / 1024)
  };
});

const manifest = {
  source: "Informasi Beasiswa",
  generatedAt: new Date().toISOString(),
  total: scholarships.length,
  scholarships
};

fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

if (fs.existsSync(chunksPath)) {
  const chunks = JSON.parse(fs.readFileSync(chunksPath, "utf8"));
  const retained = chunks.filter((chunk) => !String(chunk.id || "").startsWith("scholarship-"));
  const scholarshipChunks = scholarships.map((item) => ({
    id: `scholarship-${item.id}`,
    title: item.titleId,
    sourceTitle: item.titleId,
    sourceUrl: item.url,
    text: `${item.titleId} (${item.titleEn}). ${item.descriptionId} Sasaran: ${item.audienceId}. Kategori: ${item.categoryId}. Informasi dan pendaftaran resmi: ${item.url}`
  }));
  fs.writeFileSync(chunksPath, `${JSON.stringify([...retained, ...scholarshipChunks], null, 2)}\n`);
}

console.log(`Berhasil membuat katalog ${scholarships.length} program beasiswa dan mobilitas.`);
