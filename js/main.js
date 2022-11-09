// Hamburger menu
const menuBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active");
});

// Activate Link header
const headerMenu = document.querySelectorAll(".header-menu li a");

if (headerMenu) {
  function activateLink(event) {
    const url = location.href;
    const href = event.href;
    if (url.includes(href)) {
      event.classList.add("nav-active");
    }
  }
  headerMenu.forEach(activateLink);
}

// Activete items orcamento

const paramSearch = location.search;

if (paramSearch) {
  const param = new URLSearchParams(paramSearch);
  function activateProduct(parameter) {
    const element = document.getElementById(parameter);
    if (element) {
      element.checked = true;
    }
  }
  param.forEach(activateProduct);
}

// Change image gallery
const imgsProduct = document.querySelectorAll(".product-image img");

if (imgsProduct) {
  function changeImage(event) {
    let mainImage = document.querySelector("#main-image");
    event.addEventListener("click", function (event) {
      const currentSrc = event.currentTarget;
      mainImage.src = currentSrc.src;
    });
  }
}

imgsProduct.forEach(changeImage);
