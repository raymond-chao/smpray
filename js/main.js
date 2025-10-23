const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());

// Before and after
const container = document.querySelector('.before-and-after-container');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})
// FAQ Section
document.addEventListener('DOMContentLoaded', function() {
    const faqContainers = document.querySelectorAll('.faq-container');
    
    faqContainers.forEach(container => {
        container.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});
