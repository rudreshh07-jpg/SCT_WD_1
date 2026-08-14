const header = document.getElementById("siteHeader");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

function updateNavigation() {
    header.classList.toggle("scrolled", window.scrollY > 24);

    let current = "home";
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top <= 150) current = section.id;
    });

    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
}

window.addEventListener("scroll", updateNavigation, { passive: true });
window.addEventListener("load", updateNavigation);

menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
