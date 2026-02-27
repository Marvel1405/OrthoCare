// Smooth Scrolling for Nav Links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

// // Mobile Menu Toggle (Basic)
// const menuBtn = document.querySelector(".menu-toggle");
// const navLinks = document.querySelector(".nav-links");

// menuBtn.addEventListener("click", () => {
//   navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
//   navLinks.style.flexDirection = "column";
//   navLinks.style.position = "absolute";
//   navLinks.style.top = "70px";
//   navLinks.style.left = "0";
//   navLinks.style.width = "100%";
//   navLinks.style.background = "white";
//   navLinks.style.padding = "20px";
// });

// const slider = document.getElementById("ortho-slider");
// const foregroundImg = document.querySelector(".foreground-img");

// slider.addEventListener("input", (e) => {
//   const sliderValue = e.target.value;
//   // Update the width of the top image based on slider value
//   foregroundImg.style.width = `${sliderValue}%`;
// });

// 1. Before & After Slider Logic
const slider = document.getElementById("ortho-slider");
const foregroundImg = document.querySelector(".foreground-img");

if (slider) {
  slider.addEventListener("input", (e) => {
    const sliderValue = e.target.value;
    foregroundImg.style.width = `${sliderValue}%`;
  });
}

// 2. Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  // Change icon from ☰ to X when open
  menuBtn.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.innerHTML = "☰";
  });
});
