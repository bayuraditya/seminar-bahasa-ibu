const TAUTAN = {
  pemakalah: "https://bit.ly/PendaftaranPemakalahSNBI2027",
  alurPemakalah:
    "https://docs.google.com/document/d/1Uq41bFn4YhzlN6PFqAjHJjEZRefPPPvq/edit?usp=sharing",
  templateAbstrak:
    "https://docs.google.com/document/d/1dthBVUjt_nSQmdQCw1oCj_ejJ93qCnOD/edit?usp=sharing",
  templateFullPaper:
    "https://docs.google.com/document/d/1p5WcawSXUmEGLCMRab2_Y_NTqbimYwrU/edit?usp=sharing",
  konfirmasiPembayaran:
    "https://docs.google.com/forms/d/e/1FAIpQLSemeMw--Y9-PPF19b9Nwmm8kD8Sau7e43DN6c7j3PsSkv0FwQ/viewform",
  pesertaUmumOnline:
    "https://docs.google.com/forms/d/e/1FAIpQLSf5hJlbQa3Na6O4C059qgvRSwamofY4p8n58ZoBi17qdLUMdw/viewform",
  pesertaUmumOffline:
    "https://docs.google.com/forms/d/e/1FAIpQLSfq7Iq4owns3OVpPBFu6idzZSm8aesS06yasnlaumbKbXHr2Q/viewform",
  pesertaMahasiswaOnline:
    "https://docs.google.com/forms/d/e/1FAIpQLSc2kmq8W09xGD1ZDGnUz2B-kip4lGKTZ3IvOWJXFssw_c7i_w/viewform",
  // TODO: ganti dengan link form khusus mahasiswa offline saat tersedia
  pesertaMahasiswaOffline: "https://bit.ly/PendaftaranPesertaSNBI2027",
  wa: "http://wa.me/6285162533947",
  waRena: "https://wa.me/6285739003050",
  waDewi: "https://wa.me/6285162533947",
  waWahyuni: "https://wa.me/6287865027154",
  email: "mailto:snbi@unud.ac.id",
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-link]").forEach((el) => {
    const url = TAUTAN[el.getAttribute("data-link")];
    if (url) {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  // tombol salin (nomor rekening)
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const teks = btn.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(teks);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = teks;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      btn.classList.add("copied");
      btn.setAttribute("aria-label", "Nomor rekening tersalin");
      setTimeout(() => {
        btn.classList.remove("copied");
        btn.setAttribute("aria-label", "Salin nomor rekening");
      }, 1800);
    });
  });
});
