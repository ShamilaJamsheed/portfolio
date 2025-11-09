document.addEventListener("DOMContentLoaded", () => {
  // Typing Effect
  const typedElement = document.getElementById("typed");
  if (typedElement) {
    const phrases = [
      "Full Stack Developer",
      "MERN Stack Specialist",
      "React & Node Enthusiast",
      "Passionate Problem Solver",
      "Master of Computer Applications",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];
      typedElement.textContent = currentPhrase.substring(0, charIndex);

      if (!isDeleting && charIndex < currentPhrase.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
      } else {
        if (!isDeleting) {
          isDeleting = true;
          setTimeout(typeEffect, 1000);
        } else {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(typeEffect, 200);
        }
      }
    }
    typeEffect();
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
