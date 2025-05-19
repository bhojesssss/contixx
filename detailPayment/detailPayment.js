document.addEventListener("DOMContentLoaded", function () {
  const paymentSelect = document.getElementById("paymentSelect");

  paymentSelect.addEventListener("change", function () {
    const selected = this.value;

    if (selected === "va") {
      window.location.href = "../paymentMethod/va.html";
    } else if (selected === "qris") {
      window.location.href = "../paymentMethod/qris.html";
    } else if (selected === "transfer") {
      window.location.href = "../paymentMethod/transfer.html";
    }
  });
});
