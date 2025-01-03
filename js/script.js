// Button logic for the experience nav panel
const buttons = document.querySelectorAll("button");
const cards = document.querySelectorAll(".card");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("active"));
        cards.forEach((card) => card.classList.remove("active"));
        
        button.classList.add("active");
        
        const targetId = button.getAttribute("data-target");
        const targetCard = document.getElementById(targetId);
        if (targetCard) {
            targetCard.classList.add("active");
        }
    });
});

// Mobile hamburger menu for the experience panel
const experienceHamburgerMenu = document.getElementById("content-panel-hamburger-menu");
const experienceNavbar = document.getElementById("experience-nav-panel-hamburger");

experienceHamburgerMenu.addEventListener("click", () => {
    experienceNavbar.classList.toggle("show");
});




// Top nav hamburger menu
const hamburgerMenu = document.getElementById("hamburger-icon");
const navbar = document.getElementById("hamburger-navbar");

hamburgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("show"); 
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            // Hamburger menu is not visible, hide the navbar
            navbar.classList.remove("show");
        }
    });
});

observer.observe(hamburgerMenu);