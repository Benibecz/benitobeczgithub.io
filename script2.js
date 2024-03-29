"use strict";

// --------------- Section Selectors -------------------//

const contacto = document.querySelector("#contact");
const colors = document.querySelectorAll(".color");
const meetDevSection = document.querySelector("#meetTheDeveloper");
const navLinks = document.querySelector(".navbar-nav");
const nav = document.querySelector(".navbar");
const allSection = document.querySelectorAll("section");
const allImgs = document.querySelectorAll("img");
const allSlides = document.querySelectorAll(".slide");

// --------------- Buttons Selectors -------------------//

const meetDevBtn = document.querySelector(".meetDev--Btn");
const slideBtnLeft = document.querySelector(".slider__btn--left");
const slideBtnRight = document.querySelector(".slider__btn--right");

const dotsContainer = document.querySelector(".dots__container");

const createDots = function () {
  allSection.forEach(function (_, index) {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
};

// ---------------------------------->> Slider

let currentSlide = 0;
const totalSlides = allSlides.length - 1;

const initializationFunction = function (currentSlide) {
  createDots();
  dotActive(currentSlide);
};

const sliderFuntion = function (slideNumber) {
  allSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - slideNumber)}%)`;
  });
};
const sliderMobileFunction = function () {
  if (this.screen.width > 1000) {
    sliderFuntion(0);
  } else {
    allSlides.forEach((slide, index) => {
      slide.style.transform = `translateX(${0}%)`;
    });
  }
};

slideBtnRight.addEventListener("click", function () {
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  dotActive(currentSlide);
  sliderFuntion(currentSlide);
});

slideBtnLeft.addEventListener("click", function () {
  if (currentSlide <= 0) {
    currentSlide = totalSlides;
  } else {
    currentSlide--;
  }
  dotActive(currentSlide);
  sliderFuntion(currentSlide);
});

window.addEventListener("resize", sliderMobileFunction);
window.addEventListener("load", sliderMobileFunction);

// ---------------------------------->> Slider > dots
const dotActive = function (currentSlide) {
  const allDots = document.querySelectorAll(".dots__dot");

  allDots.forEach((dot) => {
    dot.classList.remove("dots__dot--active");
    if (dot.dataset.slide === `${currentSlide}`) {
      dot.classList.add("dots__dot--active");
    }
  });
  sliderFuntion(currentSlide);
};

// ---------------------------------->> lazy loading img

const lazyLoadFunction = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.classList.remove("blur");
    observer.unobserve(entry.target);
  });
};

const lazyLoadObserver = new IntersectionObserver(lazyLoadFunction, {
  root: null,
  threshold: 0.1,
});
allImgs.forEach((img) => {
  img.classList.add("blur");
  lazyLoadObserver.observe(img);
});

// ---------------------------------->> Section Fade-in

const fadeIn = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target);
};
const fadeInObserver = new IntersectionObserver(fadeIn, {
  root: null,
  threshold: 0.09,
});

allSection.forEach((section) => {
  section.classList.add("section__hidden");
  fadeInObserver.observe(section);
});

// ---------------------------- //

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
  colors.forEach(
    (element) => (element.style.color = `rgb(${e.offsetX}, ${e.offsetY}, 5)`)
  );
};

initializationFunction(currentSlide);

//Event Listeners
document.body.addEventListener("mousemove", colorChange);
navLinks.addEventListener("click", smoothScrolling);
nav.addEventListener("mouseover", fadeNavLinks.bind(0.2));
nav.addEventListener("mouseout", fadeNavLinks.bind(1));
// --> slider dots
dotsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("dots__dot")) return;
  currentSlide = e.target.dataset.slide;
  sliderFuntion(currentSlide);
  dotActive(currentSlide);
});
