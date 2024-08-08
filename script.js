document.addEventListener("DOMContentLoaded", () => {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // liens de navigation en fonction de la section visible
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          if (links.getAttribute("href") === `#${id}`) {
            links.classList.add("active");
          }
        });
      }
    });
  };
});

let menuIcon = document.querySelector("menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(
          "header nav a [href*=" + id + "]".classList.add("active")
        );
      });
    }
  });
};

// sélectionnez le bouton par son ID
var hireBtn = document.getElementById("hire-btn");

// gestionnaire d'événements de clic
hireBtn.addEventListener("click", function (event) {
  // ne pas suivre le lien immédiatement
  event.preventDefault();

  removeSparkles();
  addSparkles();

  // délai
  setTimeout(function () {
    window.location.href = hireBtn.href;
  }, 2000);
});

// sparkles
const addSparkles = function () {
  let maxCount = 400;

  for (let i = 0; i < maxCount; i++) {
    let sparkle = document.createElement("div");
    sparkle.classList.add("particle");
    // sparkle.innerHTML = "★"; 

    document.body.appendChild(sparkle);

    randomProperties(sparkle);
  }
};

// propriétés aléatoires pour les sparkles
const randomProperties = function (particle) {
  const left = Math.floor(Math.random() * (99 - 1)) + 1;
  particle.style.setProperty("--left", left + "%");

  const top = Math.floor(Math.random() * (99 - 1)) + 1;
  particle.style.setProperty("--top", top + "%");

  const size = Math.floor(Math.random() * (6 - 2)) + 2;
  particle.style.setProperty("--size", size + "px");
  particle.style.setProperty("--blur", size * 4 + "px");
  particle.style.setProperty("--spread", size + "px");

  const opacity = Math.random() + 0.1;
  particle.style.setProperty("--opacity", opacity);

  const duration = Math.floor(Math.random() * (800 - 300)) + 300;
  particle.style.setProperty("--duration", duration + "ms");

  const delay = Math.floor(Math.random() * (1000 - 200)) + 200;
  particle.style.setProperty("--delay", delay + "ms");

  const iteration = Math.floor(Math.random() * (10 - 4)) + 4;
  particle.style.setProperty("--iteration", iteration);
};

const removeSparkles = function () {
  let sparkles = document.getElementsByClassName("particle");

  while (sparkles.length > 0) {
    sparkles[0].parentNode.removeChild(sparkles[0]);
  }
};
