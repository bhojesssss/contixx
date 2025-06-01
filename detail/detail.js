document.addEventListener("DOMContentLoaded", () => {
  const locImages = document.querySelectorAll(".mapping-loc img");
  const cards = document.querySelectorAll(".card-price");

  locImages.forEach((img) => {
    img.addEventListener("click", () => {
      const selectedCat = img.getAttribute("data-cat");

      cards.forEach((card) => {
        if (card.getAttribute("data-cat") === selectedCat) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
  const resetBtn = document.getElementById("reset-filter");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      cards.forEach((card) => {
        card.style.display = "flex";
      });
    });
  }
});
