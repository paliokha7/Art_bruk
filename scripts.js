document.addEventListener("DOMContentLoaded", (event) => {
  const productContainer = document.getElementById("productContainer");

  for (let i = 1; i < 32; i++) {
    productContainer.appendChild(createProductCard());
  }

  function createProductCard() {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="images/Frame 329.webp" alt="" class="image-card" />
        <p class="title-card">Широко-форматна</p>
        <p class="description-card">Тратуарні плити</p>
      `;
    return card;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var burgerIcon = document.querySelector(".burger-icon");
  var menu = document.getElementById("menu");

  function toggleMenu() {
    if (menu.style.display === "grid") {
      menu.style.display = "none";
    } else {
      menu.style.display = "grid";
    }
  }

  burgerIcon.addEventListener("click", function () {
    toggleMenu();
  });

  window.addEventListener("click", function (event) {
    if (
      !event.target.matches(".burger-icon, .burger-icon *") &&
      menu.style.display === "grid"
    ) {
      menu.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var btnOpenPopup = document.getElementById("open-popup");

  var popup = document.getElementById("popup");

  var closeBtn = popup.querySelector(".close");

  btnOpenPopup.addEventListener("click", function () {
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});
