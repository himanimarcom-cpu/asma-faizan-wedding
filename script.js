/* =========================================================
   ASMA & FAIZAN — CLEAN MASTER JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const loader = document.getElementById("loader");
  const cover = document.getElementById("cover");
  const royalGate = document.getElementById("royalGate");
  const enterWedding = document.getElementById("enterWedding");
  const invitation = document.getElementById("invitation");
  const musicButton = document.getElementById("musicButton");

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
     ROYAL GATE OPEN
  ======================================================= */

  if (enterWedding && royalGate && cover && invitation) {

    enterWedding.addEventListener("click", function () {

      if (royalGate.classList.contains("opening")) return;

      enterWedding.disabled = true;

      royalGate.classList.add("opening");


      /*
        Gate opening animation ke baad
        main invitation show hoga.
      */

      window.setTimeout(function () {

        royalGate.classList.add("opened");

        invitation.classList.add("show");

        document.body.classList.remove("wedding-locked");


        if (musicButton) {
          musicButton.classList.add("show");
        }


        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }, 2100);

    });

  }


  /* =======================================================
     COUNTDOWN
     14 DECEMBER 2026 — 7:00 PM IST
  ======================================================= */

  const weddingDate =
    new Date("2026-12-14T19:00:00+05:30").getTime();


  function updateCountdown() {

    const now = Date.now();

    const distance = weddingDate - now;


    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");


    if (
      !daysEl ||
      !hoursEl ||
      !minutesEl ||
      !secondsEl
    ) {
      return;
    }


    if (distance <= 0) {

      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";

      return;
    }


    const days =
      Math.floor(
        distance / (1000 * 60 * 60 * 24)
      );


    const hours =
      Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );


    const minutes =
      Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
      );


    const seconds =
      Math.floor(
        (distance % (1000 * 60)) /
        1000
      );


    daysEl.textContent =
      String(days).padStart(2, "0");


    hoursEl.textContent =
      String(hours).padStart(2, "0");


    minutesEl.textContent =
      String(minutes).padStart(2, "0");


    secondsEl.textContent =
      String(seconds).padStart(2, "0");

  }


  updateCountdown();

  window.setInterval(
    updateCountdown,
    1000
  );


  /* =======================================================
     SLIDER
  ======================================================= */

  let slideIndex = 1;


  function showSlide(number) {

    const slides =
      document.querySelectorAll(".slide");

    const dots =
      document.querySelectorAll(".dot");


    if (!slides.length) return;


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


    slides[slideIndex - 1]
      .classList.add("active");


    if (dots[slideIndex - 1]) {

      dots[slideIndex - 1]
        .classList.add("active-dot");

    }

  }


  window.changeSlide = function (step) {

    slideIndex += step;

    showSlide(slideIndex);

  };


  window.currentSlide = function (number) {

    slideIndex = number;

    showSlide(slideIndex);

  };


  showSlide(slideIndex);


  /* =======================================================
     AUTO SLIDER
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

    musicButton.addEventListener(
      "click",
      function () {

        musicButton.classList.toggle("playing");

      }
    );

  }

});
