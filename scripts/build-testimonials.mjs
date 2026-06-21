import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sourceDirName = "@Video Testimoni";
const sourceDir = path.join(rootDir, sourceDirName);
const outputPosterDir = path.join(rootDir, "assets", "testimonials");
const outputPath = path.join(rootDir, "data", "testimonials.json");
const chunksPath = path.join(rootDir, "data", "knowledge_chunks.json");
const videoExtensions = new Set([".mp4", ".m4v", ".mov", ".webm"]);

function encodeHref(filePath) {
  return filePath.split(path.sep).map(encodeURIComponent).join("/");
}

function fileVersion(stat) {
  return Math.round(stat.mtimeMs).toString(36);
}

function versionedHref(filePath, stat) {
  return `${encodeHref(filePath)}?v=${fileVersion(stat)}`;
}

function probeVideo(filePath) {
  const result = spawnSync("ffprobe", [
    "-v", "error",
    "-select_streams", "v:0",
    "-show_entries", "stream=codec_name,width,height:format=duration,size",
    "-of", "json",
    filePath
  ], { encoding: "utf8" });

  if (result.status !== 0) {
    throw new Error(result.stderr || `Gagal membaca metadata video: ${filePath}`);
  }

  const data = JSON.parse(result.stdout || "{}");
  const stream = data.streams?.[0] || {};
  return {
    codec: stream.codec_name || "",
    width: Number(stream.width || 0),
    height: Number(stream.height || 0),
    durationSeconds: Number(data.format?.duration || 0),
    sizeBytes: Number(data.format?.size || 0)
  };
}

function createPoster(inputPath, outputPath, metadata) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  const seekTime = Math.min(2, Math.max(0.5, metadata.durationSeconds * 0.12)).toFixed(2);
  const scale = metadata.width >= metadata.height ? "scale=960:-2" : "scale=-2:960";
  const result = spawnSync("ffmpeg", [
    "-y",
    "-loglevel", "error",
    "-ss", seekTime,
    "-i", inputPath,
    "-vf", scale,
    "-frames:v", "1",
    "-q:v", "3",
    outputPath
  ], { encoding: "utf8" });

  if (result.status !== 0) {
    throw new Error(result.stderr || `Gagal membuat poster video: ${inputPath}`);
  }
}

if (!fs.existsSync(sourceDir)) {
  throw new Error(`Folder Video Testimoni tidak ditemukan: ${sourceDir}`);
}

const videoFiles = fs.readdirSync(sourceDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && videoExtensions.has(path.extname(entry.name).toLowerCase()))
  .sort((a, b) => a.name.localeCompare(b.name, "id", { numeric: true }));

const videos = videoFiles.map((entry, index) => {
  const sourcePath = path.join(sourceDir, entry.name);
  const sourceStat = fs.statSync(sourcePath);
  const sourceRelative = path.relative(rootDir, sourcePath);
  const metadata = probeVideo(sourcePath);
  const sequence = String(index + 1).padStart(2, "0");
  const posterFile = `testimonial-${sequence}.jpg`;
  const posterPath = path.join(outputPosterDir, posterFile);
  createPoster(sourcePath, posterPath, metadata);
  const posterStat = fs.statSync(posterPath);
  const posterRelative = path.relative(rootDir, posterPath);

  return {
    id: `s2-testimonial-${sequence}`,
    titleId: `Testimoni S2 Statistika Terapan ${sequence}`,
    titleEn: `Applied Statistics Master's Testimonial ${sequence}`,
    descriptionId: "Cerita singkat tentang pengalaman dan kesan bersama Program S2 Statistika Terapan FMIPA Unpad.",
    descriptionEn: "A short story about experiences with the Applied Statistics Master's Program at FMIPA Unpad.",
    file: entry.name,
    href: versionedHref(sourceRelative, sourceStat),
    poster: versionedHref(posterRelative, posterStat),
    mimeType: path.extname(entry.name).toLowerCase() === ".webm" ? "video/webm" : "video/mp4",
    format: path.extname(entry.name).replace(".", "").toUpperCase(),
    codec: metadata.codec.toUpperCase(),
    width: metadata.width,
    height: metadata.height,
    orientation: metadata.width >= metadata.height ? "landscape" : "portrait",
    durationSeconds: Math.round(metadata.durationSeconds * 10) / 10,
    sizeKb: Math.round((metadata.sizeBytes || sourceStat.size) / 1024)
  };
});

const manifest = {
  source: sourceDirName,
  generatedAt: new Date().toISOString(),
  total: videos.length,
  totalDurationSeconds: Math.round(videos.reduce((sum, video) => sum + video.durationSeconds, 0) * 10) / 10,
  videos
};

fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

if (fs.existsSync(chunksPath)) {
  const chunks = JSON.parse(fs.readFileSync(chunksPath, "utf8"));
  const retained = chunks.filter((chunk) => !String(chunk.id || "").startsWith("s2-testimonial-"));
  const testimonialChunk = {
    id: "s2-testimonial-videos",
    title: "Video Testimoni S2 Statistika Terapan",
    sourceTitle: "Video Testimoni S2 Statistika Terapan",
    sourceUrl: "#video-testimoni",
    text: `Galeri Video Testimoni S2 Statistika Terapan FMIPA Unpad tersedia pada menu program S2. Galeri memuat ${manifest.total} video berdurasi total sekitar ${Math.round(manifest.totalDurationSeconds)} detik yang berisi pengalaman dan kesan tentang Program S2 Statistika Terapan. Video tidak termasuk dalam bagian Program S3 Statistika.`
  };
  fs.writeFileSync(chunksPath, `${JSON.stringify([...retained, testimonialChunk], null, 2)}\n`);
}

console.log(`Berhasil membuat katalog ${manifest.total} video testimoni S2.`);
