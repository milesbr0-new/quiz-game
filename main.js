// main.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
  const scrollY = window.scrollY;
  const offset = 120; // tweak if needed

  let currentId = null;

  sections.forEach((section) => {
    const top = section.offsetTop - offset;
    const bottom = top + section.offsetHeight;

    if (scrollY >= top && scrollY < bottom) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const hrefId = link.getAttribute("href").slice(1);
    link.classList.toggle("active", hrefId === currentId);
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);
