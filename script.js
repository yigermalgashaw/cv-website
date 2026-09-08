// Mobile navigation

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// Close mobile menu after clicking a navigation link

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


// Automatically display the current year in the footer

document.getElementById("year").textContent =
    new Date().getFullYear();