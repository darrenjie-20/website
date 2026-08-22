// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu when a navigation link is clicked

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navItems.forEach((item) => {

        item.classList.remove("active");

        if (
            item.getAttribute("href") ===
            "#" + currentSection
        ) {
            item.classList.add("active");
        }

    });

});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

// Elements that will appear gradually
const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .creative-card, .contact-content"
);


// Add reveal class automatically

revealElements.forEach((element) => {
    element.classList.add("reveal");
});


// Detect when elements enter screen

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Observe every reveal element

revealElements.forEach((element) => {
    observer.observe(element);
});


// =========================
// CURRENT YEAR
// =========================

const currentYear =
    document.getElementById("currentYear");

currentYear.textContent =
    new Date().getFullYear();


// =========================
// HEADER SHADOW ON SCROLL
// =========================

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0, 0, 0, 0.15)";

    } else {

        header.style.boxShadow =
            "none";

    }

});
