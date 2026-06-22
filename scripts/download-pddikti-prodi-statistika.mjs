import { writeFile } from "node:fs/promises";

const apiBase = "https://api-pddikti.kemdiktisaintek.go.id";
const siteBase = "https://pddikti.kemdiktisaintek.go.id";
const term = process.argv[2] || "statistika";
const slug = term
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "_")
  .replace(/^_+|_+$/g, "");
const dateStamp = new Date().toISOString().slice(0, 10);
const baseOutput = `data/pddikti_prodi_${slug}_${dateStamp}`;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchText(url, { headers = {}, retries = 3, timeoutMs = 20000 } = {}) {
  let lastError;

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        headers,
        signal: controller.signal,
      });
      const text = await response.text();

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${text.slice(0, 200)}`);
      }

      return text;
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await sleep(750 * attempt);
      }
    } finally {
      clearTimeout(timer);
    }
  }

  throw lastError;
}

async function fetchJson(url, options) {
  const text = await fetchText(url, options);
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Non-JSON response: ${text.slice(0, 200)}`);
  }
}

function csvEscape(value) {
  if (value === null || value === undefined) return "";
  const text = String(value);
  if (/[",\n\r]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

function toCsv(rows) {
  const columns = [
    "id_pencarian",
    "nama_pencarian",
    "jenjang_pencarian",
    "pt_pencarian",
    "pt_singkat_pencarian",
    "id_sp",
    "id_sms",
    "nama_pt",
    "kode_pt",
    "nama_prodi",
    "kode_prodi",
    "kel_bidang",
    "jenj_didik",
    "tgl_berdiri",
    "tgl_sk_selenggara",
    "sk_selenggara",
    "no_tel",
    "no_fax",
    "website",
    "email",
    "alamat",
    "provinsi",
    "kab_kota",
    "kecamatan",
    "lintang",
    "bujur",
    "status",
    "akreditasi",
    "akreditasi_internasional",
    "status_akreditasi",
    "detail_error",
  ];

  const lines = [columns.join(",")];
  for (const row of rows) {
    lines.push(columns.map((column) => csvEscape(row[column])).join(","));
  }

  return `${lines.join("\n")}\n`;
}

async function getPublicIp() {
  try {
    const response = await fetchJson("https://api.ipify.org/?format=json", {
      timeoutMs: 10000,
    });
    return response.ip;
  } catch {
    return "";
  }
}

async function main() {
  const ip = await getPublicIp();
  const sourceUrl = `${siteBase}/search/prodi/${encodeURIComponent(term)}`;
  const searchApiUrl = `${apiBase}/pencarian/prodi/${encodeURIComponent(term)}`;
  const headers = {
    "Content-Type": "application/json",
    Origin: siteBase,
    Referer: sourceUrl,
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36",
  };

  if (ip) headers["X-User-IP"] = ip;

  console.log(`Fetching search results for "${term}"...`);
  const searchResults = await fetchJson(searchApiUrl, { headers });

  if (!Array.isArray(searchResults)) {
    throw new Error("Search endpoint did not return an array.");
  }

  const records = [];
  const flatRows = [];

  for (let index = 0; index < searchResults.length; index += 1) {
    const item = searchResults[index];
    const detailApiUrl = `${apiBase}/prodi/detail/${encodeURIComponent(item.id)}`;
    let detail = null;
    let detailError = "";

    try {
      detail = await fetchJson(detailApiUrl, {
        headers: {
          ...headers,
          Referer: `${siteBase}/detail-prodi/${encodeURIComponent(item.id)}`,
        },
      });
    } catch (error) {
      detailError = error.message;
    }

    records.push({
      search: item,
      detail,
      detail_error: detailError || null,
      detail_api_url: detailApiUrl,
    });

    flatRows.push({
      id_pencarian: item.id,
      nama_pencarian: item.nama,
      jenjang_pencarian: item.jenjang,
      pt_pencarian: item.pt,
      pt_singkat_pencarian: item.pt_singkat,
      ...(detail || {}),
      detail_error: detailError,
    });

    const status = detailError ? "detail failed" : "ok";
    console.log(
      `[${String(index + 1).padStart(String(searchResults.length).length, "0")}/${searchResults.length}] ${item.jenjang} ${item.nama} - ${item.pt}: ${status}`,
    );

    await sleep(150);
  }

  const fetchedAt = new Date().toISOString();
  const payload = {
    metadata: {
      source_url: sourceUrl,
      search_api_url: searchApiUrl,
      fetched_at: fetchedAt,
      search_term: term,
      count: searchResults.length,
      public_ip_header_used: ip || null,
      notes:
        "Data diambil dari endpoint publik yang dipakai halaman pencarian PDDikti. Endpoint detail tambahan tertentu di situs PDDikti dapat tidak stabil, sehingga arsip ini memakai endpoint pencarian dan detail inti prodi.",
    },
    records,
  };

  await writeFile(`${baseOutput}.json`, `${JSON.stringify(payload, null, 2)}\n`);
  await writeFile(`${baseOutput}.csv`, toCsv(flatRows));

  console.log(`Saved ${records.length} records:`);
  console.log(`- ${baseOutput}.json`);
  console.log(`- ${baseOutput}.csv`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
