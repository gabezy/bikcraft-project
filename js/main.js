const menuBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active");
});

const headerMenu = document.querySelectorAll(".header-menu li a");

function activateLink(event) {
  const url = location.href;
  const href = event.href;
  if (url.includes(href)) {
    event.classList.add("nav-active");
  }
}

headerMenu.forEach(activateLink);
