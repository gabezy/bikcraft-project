// Hamburger menu
const menuBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active");
  body.classList.toggle("mobile");
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

// Activate items orcamento

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

// Activate FAQ
const divFAQ = document.querySelectorAll(".perguntas-item button");

if (divFAQ) {
  function activateQuestion(event) {
    const question = event.currentTarget;
    const controls = question.getAttribute("aria-controls");
    const answer = document.getElementById(controls);
    answer.classList.toggle("activate");
    const activate = answer.classList.contains("activate");
    question.setAttribute("aria-expanded", activate);
  }

  function eventQuestion(question) {
    question.addEventListener("click", activateQuestion);
  }

  divFAQ.forEach(eventQuestion);
}

// Change image gallery
const imgsProduct = document.querySelectorAll(".product-image img");
const galleryContainer = document.querySelector(".product-image");

if (imgsProduct) {
  function changeImage(img) {
    img.addEventListener("click", function (event) {
      const image = event.currentTarget;
      const media = matchMedia("(min-width: 960px").matches;
      if (media) {
        galleryContainer.prepend(image);
      }
    });
  }

  imgsProduct.forEach(changeImage);
}

// Simple-anime

if (window.SimpleAnime) {
  new SimpleAnime();
}

// Intense

if (window.requestAnimFrame) {
  window.onload = function () {};
}
