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
  // contact form
  emailjs.init("izkbmmtwBM8D96Jvt");

  document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const form = this;

      // 1. Skicka auto-reply till användaren
      emailjs.sendForm("service_h9dpbp6", "template_wc2xxz9", form)
          .then(function() {
              console.log("Auto-reply sent to user");
          }, function(error) {
              console.error("Auto-reply error:", error);
          });

      // 2. Skicka notis till dig själv
      emailjs.sendForm("service_h9dpbp6", "template_mh76r4s", form)
          .then(function() {
              Swal.fire({
                  icon: "success",
                  title: "Skickat!",
                  text: "Ditt meddelande har skickats, kolla också din skräppost för en bekräftelse.",
                  confirmButtonColor: "#6c63ff"
              });
              form.reset();
          }, function(error) {
              Swal.fire({
                  icon: "error",
                  title: "Fel",
                  text: "Meddelandet kunde inte skickas. Försök igen senare.",
                  confirmButtonColor: "#6c63ff"
              });
              console.error("Notification error:", error);
          });
  });