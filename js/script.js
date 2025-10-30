// document.addEventListener("DOMContentLoaded", function () {
//     const toggleButton = document.querySelector("navbar__mobile-menu-toggle");
//     const mobileMenu = document.querySelector("navbar__mobile-menu-items");
//     toggleButton.addEventListener("click", function () { 
//         mobileMenu.classList.toggle("active");
//     })

// }) 


document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }
});
