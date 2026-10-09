
/* =========================================================
   ASMA & FAIZAN — MASTER JAVASCRIPT
   Premium Muslim Wedding Invitation
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =======================================================
     ELEMENTS
  ======================================================= */

  const loader = document.getElementById("loader");
  const cover = document.getElementById("cover");
  const royalGate = document.getElementById("royalGate");
  const enterWedding = document.getElementById("enterWedding");
  const invitation = document.getElementById("invitation");
  const musicButton = document.getElementById("musicButton");


  /* =======================================================
     INITIAL LOCK
  ======================================================= */

  document.body.classList.add("wedding-locked");


  /* =======================================================
     LOADER
  ======================================================= */

  window.setTimeout(function () {

    if (loader) {
      loader.classList.add("hide");
    }

  }, 900);


 
/* =======================================================
   ROYAL GATE OPEN + RESTORE PAGE SCROLL
======================================================= */

if (enterWedding && royalGate && invitation) {

  enterWedding.addEventListener("click", function () {

    if (royalGate.classList.contains("opening")) return;

    enterWedding.disabled = true;
    royalGate.classList.add("opening");

    window.setTimeout(function () {

      royalGate.classList.add("opened");
      invitation.classList.add("show");

      // Remove the scroll lock
      document.body.classList.remove("wedding-locked");
      document.documentElement.classList.remove("wedding-locked");

      document.body.style.overflow = "auto";
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.overflowY = "auto";

      // Hide the cover after the gate animation
      if (cover) {
        cover.style.opacity = "0";
        cover.style.pointerEvents = "none";

        window.setTimeout(function () {
          cover.style.visibility = "hidden";
        }, 500);
      }

      if (musicButton) {
        musicButton.classList.add("show");
      }

      window.scrollTo({
        top: 0,
        behavior: "auto"
      });

    }, 2100);

  });

}

  /* =======================================================
     COUNTDOWN
     14 DECEMBER 2026 — 7:00 PM IST
  ======================================================= */

  const weddingDate = new Date(
    "2026-12-14T19:00:00+05:30"
  ).getTime();


  function updateCountdown() {

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
      return;
    }

    const distance = weddingDate - Date.now();

    if (distance <= 0) {

      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";

      return;
    }

    const days = Math.floor(
      distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) /
      (1000 * 60)
    );

    const seconds = Math.floor(
      (distance % (1000 * 60)) / 1000
    );


    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");

  }


  updateCountdown();

  window.setInterval(updateCountdown, 1000);


  /* =======================================================
     PHOTO SLIDER
  ======================================================= */

  let slideIndex = 1;


  function showSlide(number) {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    if (!slides.length) {
      return;
    }

    if (number > slides.length) {
      slideIndex = 1;
    }

    if (number < 1) {
      slideIndex = slides.length;
    }


    slides.forEach(function (slide) {
      slide.classList.remove("active");
    });

    dots.forEach(function (dot) {
      dot.classList.remove("active-dot");
    });


    slides[slideIndex - 1].classList.add("active");

    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].classList.add("active-dot");
    }

  }


  // Previous and next buttons
  window.changeSlide = function (step) {

    slideIndex += step;

    showSlide(slideIndex);

  };


  // Slider navigation dots
  window.currentSlide = function (number) {

    slideIndex = number;

    showSlide(slideIndex);

  };


  showSlide(slideIndex);


  /* =======================================================
     AUTOMATIC SLIDER
  ======================================================= */

  window.setInterval(function () {

    if (
      invitation &&
      invitation.classList.contains("show")
    ) {

      slideIndex += 1;

      showSlide(slideIndex);

    }

  }, 5000);


  /* =======================================================
     MUSIC BUTTON
  ======================================================= */

  if (musicButton) {

    musicButton.addEventListener("click", function () {

      musicButton.classList.toggle("playing");

    });

  }


  /* =======================================================
     END
  ======================================================= */

});
