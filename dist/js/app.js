"use strict";

// add background to nav on scroll
const nav = document.querySelector(".navbar");

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 1) {
    nav.classList.add("dark");
  } else {
    nav.classList.remove("dark");
  }
}

window.addEventListener("scroll", fixNav);

// hamburger menu
const menuIcon = document.querySelector(".hamburger-menu");
const menuNavbar = document.querySelector(".menu-navbar");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
  menuNavbar.classList.toggle("change");
  if (menuNavbar.classList.contains("change")) {
    overlay.classList.remove("hidden");
    body.style.overflowY = "hidden";
  } else {
    overlay.classList.add("hidden");
    body.style.overflowY = "auto";
  }
});

overlay.addEventListener("click", () => {
  menuNavbar.classList.remove("change");
  overlay.classList.add("hidden");
  body.style.overflowY = "auto";
});

// faq dropdown
const faqLink = document.querySelectorAll(".faq-content-link");

faqLink.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.nextElementSibling.classList.toggle("show");
  });
});
