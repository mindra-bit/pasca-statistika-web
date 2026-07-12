const AKREDITASI_2027 = Object.freeze({
  title: "Persiapan Akreditasi 2027",
  program: "S2 Statistika Terapan FMIPA Universitas Padjadjaran",
  emailProperty: "AKREDITASI_2027_ADMIN_EMAIL",
  passwordHashProperty: "AKREDITASI_2027_PASSWORD_SHA256",
  sessionVersionProperty: "AKREDITASI_2027_SESSION_VERSION",
  sessionSeconds: 6 * 60 * 60,
  maxAttemptsPerWindow: 6,
  attemptWindowSeconds: 10 * 60,
});

function doGet() {
  return HtmlService.createTemplateFromFile("Index")
    .evaluate()
    .setTitle(AKREDITASI_2027.title)
    .addMetaTag("viewport", "width=device-width, initial-scale=1")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function SET_LOGIN_AKREDITASI_2027() {
  const adminEmail = "kaprodi.statistikaterapan.s2@unpad.ac.id";
  const temporaryPassword = "GANTI_DENGAN_PASSWORD_KHUSUS";

  if (temporaryPassword === "GANTI_DENGAN_PASSWORD_KHUSUS") {
    throw new Error("Isi temporaryPassword lebih dulu, jalankan fungsi ini sekali, lalu kembalikan lagi ke placeholder sebelum deploy.");
  }

  saveAccreditationCredential_(adminEmail, temporaryPassword);
  Logger.log("Login akreditasi 2027 tersimpan untuk: " + adminEmail);
}

function CEK_LOGIN_AKREDITASI_2027() {
  const props = PropertiesService.getScriptProperties();
  Logger.log("Email admin: " + (props.getProperty(AKREDITASI_2027.emailProperty) || "BELUM DISET"));
  Logger.log("Hash password: " + (props.getProperty(AKREDITASI_2027.passwordHashProperty) ? "SUDAH ADA" : "BELUM ADA"));
  Logger.log("Versi sesi: " + (props.getProperty(AKREDITASI_2027.sessionVersionProperty) || "BELUM ADA"));
}

function RESET_SESI_AKREDITASI_2027() {
  PropertiesService.getScriptProperties().setProperty(AKREDITASI_2027.sessionVersionProperty, String(Date.now()));
  Logger.log("Semua sesi lama akan dianggap tidak valid.");
}

function loginAkreditasi2027(payload) {
  payload = payload || {};
  const email = normalizeEmail_(payload.email);
  const password = String(payload.password || "");

  if (!email || !password) {
    return { ok: false, message: "Email dan password wajib diisi." };
  }

  if (isRateLimited_(email)) {
    return { ok: false, message: "Percobaan login terlalu banyak. Tunggu beberapa menit lalu coba lagi." };
  }

  const props = PropertiesService.getScriptProperties();
  const savedEmail = normalizeEmail_(props.getProperty(AKREDITASI_2027.emailProperty));
  const savedHash = props.getProperty(AKREDITASI_2027.passwordHashProperty);

  if (!savedEmail || !savedHash) {
    return { ok: false, message: "Login belum dikonfigurasi. Jalankan SET_LOGIN_AKREDITASI_2027 di Apps Script." };
  }

  const passwordHash = sha256_(password);
  if (email !== savedEmail || !secureEquals_(passwordHash, savedHash)) {
    recordFailedAttempt_(email);
    return { ok: false, message: "Email atau password tidak sesuai." };
  }

  clearFailedAttempts_(email);
  const token = Utilities.getUuid() + "." + Utilities.getUuid();
  const session = {
    email,
    createdAt: Date.now(),
    version: getSessionVersion_(),
  };

  CacheService.getScriptCache().put(sessionKey_(token), JSON.stringify(session), AKREDITASI_2027.sessionSeconds);
  return {
    ok: true,
    token,
    email,
    expiresInSeconds: AKREDITASI_2027.sessionSeconds,
    message: "Login berhasil.",
  };
}

function checkSessionAkreditasi2027(token) {
  const session = readSession_(token);
  if (!session) return { ok: false };

  return {
    ok: true,
    email: session.email,
    title: AKREDITASI_2027.title,
    program: AKREDITASI_2027.program,
    expiresInSeconds: AKREDITASI_2027.sessionSeconds,
  };
}

function logoutAkreditasi2027(token) {
  if (token) CacheService.getScriptCache().remove(sessionKey_(token));
  return { ok: true };
}

function getAkreditasi2027Dashboard(token) {
  const session = assertSession_(token);
  return {
    ok: true,
    email: session.email,
    cards: [
      {
        title: "Dokumen LKPS dan LED",
        text: "Siapkan matriks data, bukti dukung, dan narasi evaluasi diri untuk akreditasi 2027.",
        tone: "blue",
      },
      {
        title: "Laporan LAMSAMA",
        text: "Kumpulkan laporan tahunan, tindak lanjut asesmen, serta dokumen mutu pendukung.",
        tone: "gold",
      },
      {
        title: "Monitoring Mutu",
        text: "Pantau evaluasi PBM, tracer study, kepuasan pengguna, publikasi, hibah, dan PKM.",
        tone: "orange",
      },
      {
        title: "Simulasi Visitasi",
        text: "Susun checklist kesiapan, pembagian peran, dan agenda simulasi asesmen lapangan.",
        tone: "red",
      },
    ],
  };
}

function saveAccreditationCredential_(email, password) {
  if (!email || !password) throw new Error("Email dan password wajib diisi.");

  PropertiesService.getScriptProperties().setProperties({
    [AKREDITASI_2027.emailProperty]: normalizeEmail_(email),
    [AKREDITASI_2027.passwordHashProperty]: sha256_(password),
    [AKREDITASI_2027.sessionVersionProperty]: String(Date.now()),
  });
}

function assertSession_(token) {
  const session = readSession_(token);
  if (!session) throw new Error("Sesi tidak valid. Silakan login ulang.");
  return session;
}

function readSession_(token) {
  if (!token) return null;
  const raw = CacheService.getScriptCache().get(sessionKey_(token));
  if (!raw) return null;

  try {
    const session = JSON.parse(raw);
    if (session.version !== getSessionVersion_()) return null;
    return session;
  } catch (error) {
    return null;
  }
}

function getSessionVersion_() {
  const props = PropertiesService.getScriptProperties();
  let version = props.getProperty(AKREDITASI_2027.sessionVersionProperty);
  if (!version) {
    version = String(Date.now());
    props.setProperty(AKREDITASI_2027.sessionVersionProperty, version);
  }
  return version;
}

function sessionKey_(token) {
  return "akreditasi2027:session:" + sha256_(String(token)).slice(0, 48);
}

function normalizeEmail_(email) {
  return String(email || "").trim().toLowerCase();
}

function sha256_(value) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(value), Utilities.Charset.UTF_8);
  return bytes
    .map(function(byte) {
      const value = (byte + 256) % 256;
      return value.toString(16).padStart(2, "0");
    })
    .join("");
}

function secureEquals_(a, b) {
  a = String(a || "");
  b = String(b || "");
  if (a.length !== b.length) return false;

  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function attemptKey_(email) {
  return "akreditasi2027:attempt:" + sha256_(normalizeEmail_(email)).slice(0, 32);
}

function isRateLimited_(email) {
  const count = Number(CacheService.getScriptCache().get(attemptKey_(email)) || "0");
  return count >= AKREDITASI_2027.maxAttemptsPerWindow;
}

function recordFailedAttempt_(email) {
  const cache = CacheService.getScriptCache();
  const key = attemptKey_(email);
  const count = Number(cache.get(key) || "0") + 1;
  cache.put(key, String(count), AKREDITASI_2027.attemptWindowSeconds);
}

function clearFailedAttempts_(email) {
  CacheService.getScriptCache().remove(attemptKey_(email));
}
