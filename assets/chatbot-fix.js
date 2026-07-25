/*
 * Compatibility loader + curriculum card injection.
 * The original chatbot and workspace enhancements are loaded from the
 * last complete version, while this file adds the Diskusi Tesis report
 * immediately after the Tesis Online card.
 */
(() => {
  "use strict";

  const ORIGINAL_FIX_URL = "https://cdn.jsdelivr.net/gh/mindra-bit/pasca-statistika-web@bdd305386854d8c68cc2235a8d2fb6eba4bba956/assets/chatbot-fix.js";

  function addDiskusiTesisCard() {
    if (document.querySelector(".diskusi-tesis-ai-hub-card")) return;

    const thesisOnlineCard = document.querySelector(".thesis-online-hub-card");
    if (!thesisOnlineCard) return;

    const card = document.createElement("a");
    card.className = "curriculum-hub-card diskusi-tesis-ai-hub-card";
    card.href = "laporan-diskusi-tesis-ai.html";
    card.target = "_blank";
    card.rel = "noopener";
    card.setAttribute("aria-label", "Buka laporan Diskusi Tesis: Optimalisasi AI sebagai Asisten Riset Pribadi");
    card.innerHTML = [
      "<span>Diskusi Tesis: AI untuk Riset</span>",
      "<small>Laporan HTML, materi kegiatan, dan dua video dokumentasi</small>"
    ].join("");

    thesisOnlineCard.insertAdjacentElement("afterend", card);
  }

  function loadOriginalEnhancements() {
    const script = document.createElement("script");
    script.src = ORIGINAL_FIX_URL;
    script.async = false;
    script.onload = addDiskusiTesisCard;
    script.onerror = () => {
      console.warn("Penyempurnaan chatbot lama tidak dapat dimuat; kartu Diskusi Tesis tetap tersedia.");
      addDiskusiTesisCard();
    };
    document.head.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      addDiskusiTesisCard();
      loadOriginalEnhancements();
    }, { once: true });
  } else {
    addDiskusiTesisCard();
    loadOriginalEnhancements();
  }
})();
