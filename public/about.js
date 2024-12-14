document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation should happen only once
    });
  });

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".page-overlay").classList.add("active");
  
      // Delay navigation until overlay animation completes
      setTimeout(() => {
        window.location.href = e.target.href;
      }, 500);
    });
  });
  
  