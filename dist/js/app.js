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

// faq dropdon
const faqLink = document.querySelectorAll(".faq-content-link");

faqLink.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.nextElementSibling.classList.toggle("show");
  });
});
