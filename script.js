"use strict";
const contacto = document.querySelector("#contact");
const detail = document
  .querySelector("#contact")
  .getElementsByClassName("details");

function mouseOver() {
  detail[0].style.backgroundColor = "#6c757d";
  detail[0].style.color = "#fff";
  detail[1].style.backgroundColor = "#6c757d";
  detail[1].style.color = "#fff";
}

function mouseOut() {
  detail[0].style.backgroundColor = "#fff";
  detail[0].style.color = "#343a40";
  detail[1].style.backgroundColor = "#fff";
  detail[1].style.color = "#343a40";
}

contacto.addEventListener("mouseover", mouseOver);
contacto.addEventListener("mouseout", mouseOut);
