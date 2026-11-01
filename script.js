// CampusBite landing page interactions
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

// Demo-only waitlist interaction. Connect this form to a backend or form service
// (e.g. Formspree / Google Forms) before collecting real submissions.
const waitlistForm = document.querySelector("#waitlist-form");
const formNote = document.querySelector("#form-note");

waitlistForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value.trim();
  if (!email) return;

  formNote.textContent = "Thanks for your interest! This demo form isn't connected yet.";
  formNote.setAttribute("role", "status");
  waitlistForm.reset();
});
