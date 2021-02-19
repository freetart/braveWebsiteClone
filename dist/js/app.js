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