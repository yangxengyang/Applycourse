document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".hero-content h1");
  
  // Phrases to loop through
  const phrases = [
    "Full Stack Developer Student",
    "Programmer",
    "Problem Solver"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 100;   // typing speed in ms
  const deletingSpeed = 60;  // deleting speed in ms
  const pauseBetween = 1500; // pause before deleting/next word

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      textElement.textContent = currentPhrase.substring(0, charIndex--);
    } else {
      textElement.textContent = currentPhrase.substring(0, charIndex++);
    }

    let timeout = typingSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = pauseBetween;
      isDeleting = true;
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length; // move to next phrase
      timeout = typingSpeed;
    }

    setTimeout(typeEffect, timeout);
  }

  typeEffect();
}); 

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 40) { 
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

