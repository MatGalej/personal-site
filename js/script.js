const buttons = document.querySelectorAll("button");
const cards = document.querySelectorAll(".card");

// Add click event listeners to each button
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

const hamburgerMenu = document.getElementById("hamburger-icon");
const hamburgerIcon = document.getElementById("hamburger-icon")
const navbar = document.getElementById("hamburger-navbar");

hamburgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("show"); // Add/remove the "show" class
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            // Hamburger menu is not visible, hide the navbar
            navbar.classList.remove("show");
        }
    });
});

observer.observe(hamburgerIcon);