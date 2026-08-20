(() => {
  const form = document.getElementById("portfolioAccessForm");
  const status = document.getElementById("portfolioStatus");
  const button = form?.querySelector("button");
  if (!form || !status || !button || !window.crypto?.subtle) return;

  const normalizeName = (value) => value.normalize("NFKC").trim().replace(/\s+/g, " ").toLocaleLowerCase("id-ID");
  const bytesToHex = (bytes) => [...new Uint8Array(bytes)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  const base64Bytes = (value) => Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
  const setStatus = (kind, html) => { status.className = `portfolio-status is-${kind}`; status.innerHTML = html; };
  let manifestPromise;
  let currentObjectUrl = "";

  const loadManifest = () => manifestPromise ||= fetch("manifest.json", { cache: "no-store" }).then((response) => {
    if (!response.ok) throw new Error("Daftar portofolio tidak dapat dimuat.");
    return response.json();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const npm = document.getElementById("portfolioNpm").value.trim();
    const name = normalizeName(document.getElementById("portfolioName").value);
    if (!/^\d{12}$/.test(npm) || !name) {
      setStatus("error", "Masukkan NPM 12 digit dan nama lengkap tanpa gelar.");
      return;
    }
    button.disabled = true;
    setStatus("loading", "Memverifikasi identitas dan menyiapkan PDF terenkripsi…");
    try {
      const manifest = await loadManifest();
      const npmHash = bytesToHex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(npm)));
      const record = manifest.records.find((item) => item.npmHash === npmHash);
      if (!record) throw new Error("NPM atau nama lengkap tidak sesuai dengan data portofolio.");
      const passwordKey = await crypto.subtle.importKey("raw", new TextEncoder().encode(`${npm}|${name}`), "PBKDF2", false, ["deriveKey"]);
      const aesKey = await crypto.subtle.deriveKey({name:"PBKDF2",salt:base64Bytes(record.salt),iterations:manifest.iterations,hash:"SHA-256"}, passwordKey, {name:"AES-GCM",length:256}, false, ["decrypt"]);
      const encryptedResponse = await fetch(record.file, { cache: "no-store" });
      if (!encryptedResponse.ok) throw new Error("Berkas portofolio tidak dapat dimuat.");
      const encrypted = await encryptedResponse.arrayBuffer();
      const decrypted = await crypto.subtle.decrypt({name:"AES-GCM",iv:base64Bytes(record.iv),tagLength:128}, aesKey, encrypted);
      if (currentObjectUrl) URL.revokeObjectURL(currentObjectUrl);
      currentObjectUrl = URL.createObjectURL(new Blob([decrypted], {type:"application/pdf"}));
      setStatus("success", `Identitas cocok. Portofolio angkatan ${record.cohort} siap dibuka.<br><a href="${currentObjectUrl}" target="_blank" rel="noopener" download="Portofolio_${npm}.pdf">Buka / Unduh PDF Portofolio</a>`);
    } catch (error) {
      setStatus("error", error.name === "OperationError" ? "NPM atau nama lengkap tidak sesuai dengan data portofolio." : (error.message || "Portofolio tidak dapat dibuka."));
    } finally {
      button.disabled = false;
    }
  });
})();
