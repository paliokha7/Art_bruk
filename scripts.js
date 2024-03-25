document.addEventListener("DOMContentLoaded", (event) => {
  const productContainer = document.getElementById("productContainer");

  for (let i = 1; i < 32; i++) {
    productContainer.appendChild(createProductCard());
  }

  function createProductCard() {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="images/Frame 329.png" alt="" class="image-card" />
        <p class="title-card">Широко-форматна</p>
        <p class="description-card">Тратуарні плити</p>
      `;
    return card;
  }
});
