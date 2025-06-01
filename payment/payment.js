document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copy-btn");
  const vaNumber = document.getElementById("va-number");

  copyBtn.addEventListener("click", () => {
    const textToCopy = vaNumber.innerText;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        copyBtn.innerText = "Copied!";
        setTimeout(() => (copyBtn.innerText = "Copy"), 1500);
      })
      .catch((err) => {
        console.error("Gagal menyalin:", err);
        copyBtn.innerText = "Error";
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("download-btn");
  const qrImg = document.getElementById("qris-img");

  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = qrImg.src;
    link.download = "qris-payment.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
