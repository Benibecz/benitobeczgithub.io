"use strict";

const contacto = document.querySelector("#contact");
const getInTouch = document.querySelector("#contact h2");
const meetDevBtn = document.querySelector(".meetDev--Btn");
const meetDevSection = document.querySelector("#meetTheDeveloper");
const navLinks = document.querySelector(".navbar-nav");

const smoothScrolling = function (e) {
  // const projectsCoords = projectsSection.getBoundingClientRect();
  // window.scrollTo({
  //   left: projectsCoords.left + window.pageXOffset,
  //   top: projectsCoords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = document.querySelector(e.target.getAttribute("href"));
    id.scrollIntoView({ behavior: "smooth" });
  }
};
const colorChange = function (e) {
  getInTouch.style.color = `rgb(${e.offsetX}, ${e.offsetY}, 10)`;
};

//Event Listeners
document.body.addEventListener("mousemove", colorChange);
navLinks.addEventListener("click", smoothScrolling);
