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