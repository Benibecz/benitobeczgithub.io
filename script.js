"use strict";
const contacto = document.querySelector("#contact");
const getInTouch = document.querySelector("#contact h2");
const meetDevBtn = document.querySelector(".meetDev--Btn");
const meetDevSection = document.querySelector("#meetTheDeveloper");
const myProjects = document.querySelector(".my--projects");
const projectsSection = document.querySelector("#projects");

const smoothScrolling = function () {
  const projectsCoords = projectsSection.getBoundingClientRect();
  console.log(projectsCoords.top);
  console.log(window.pageYOffset);

  window.scrollTo({
    left: projectsCoords.left + window.pageXOffset,
    top: projectsCoords.top + window.pageYOffset,
    behavior: "smooth",
  });
};

myProjects.addEventListener("click", smoothScrolling);

// -- Modern way of doing smooth scrolling
// meetDevBtn.addEventListener("click", () =>
//   meetDevSection.scrollIntoView({ behavior: "smooth" })
// );

function colorChange(e) {
  getInTouch.style.color = `rgb(${e.offsetX}, ${e.offsetY}, 10)`;
  // detail[1].style.color = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

document.body.addEventListener("mousemove", colorChange);

// function mouseOver() {
//   detail[0].style.backgroundColor = "#6c757d";
//   detail[0].style.color = "#fff";
//   detail[1].style.backgroundColor = "#6c757d";
//   detail[1].style.color = "#fff";
// }

// function mouseOut() {
//   detail[0].style.backgroundColor = "#fff";
//   detail[0].style.color = "#343a40";
//   detail[1].style.backgroundColor = "#fff";
//   detail[1].style.color = "#343a40";
// }

// contacto.addEventListener("mouseover", mouseOver);
// contacto.addEventListener("mouseout", mouseOut);
