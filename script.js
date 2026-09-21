```javascript
// ================= MOBILE NAVIGATION =================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

}


// ================= CLOSE MOBILE MENU =================
// Close the mobile menu after clicking a navigation link

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


// ================= CURRENT YEAR =================
// Automatically display the current year in the footer

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}
```
