"use strict";

const contacto = document.querySelector("#contact");
const getInTouch = document.querySelector("#contact h2");
const meetDevBtn = document.querySelector(".meetDev--Btn");
const meetDevSection = document.querySelector("#meetTheDeveloper");
const navLinks = document.querySelector(".navbar-nav");
const nav = document.querySelector(".navbar");
const allSection = document.querySelectorAll("section");

// -- Section Fade in
const fadeIn = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry.target);
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target);
};
const fadeInObserver = new IntersectionObserver(fadeIn, {
  root: null,
  threshold: 0.13,
});

allSection.forEach((section) => {
  section.classList.add("section__hidden");
  fadeInObserver.observe(section);
});

// -- ^--^--^--^--^--^--^--^--

const smoothScrolling = function (e) {
  // const projectsCoords = projectsSection.getBoundingClientRect();
  // window.scrollTo({
  //   left: projectsCoords.left + window.pageXOffset,
  //   top: projectsCoords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const idSection = document.querySelector(e.target.getAttribute("href"));
    idSection.scrollIntoView({ behavior: "smooth" });
  }
};

const fadeNavLinks = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const clicked = e.target;
    const links = e.target
      .closest(".navbar")
      .querySelectorAll(".nav-link, .navbar-brand");
    links.forEach((link) => {
      if (link !== clicked) {
        link.style.opacity = this;
      }
    });
  }
};
const colorChange = function (e) {
  getInTouch.style.color = `rgb(${e.offsetX}, ${e.offsetY}, 10)`;
};

//Event Listeners
document.body.addEventListener("mousemove", colorChange);
navLinks.addEventListener("click", smoothScrolling);
nav.addEventListener("mouseover", fadeNavLinks.bind(0.25));
nav.addEventListener("mouseout", fadeNavLinks.bind(1));
