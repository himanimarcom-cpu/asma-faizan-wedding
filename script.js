// =========================================================
// ASMA & FAIZAN — PREMIUM WEDDING INVITATION
// JAVASCRIPT
// =========================================================


// =========================================================
// PAGE LOADER
// =========================================================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 1200);

});


// =========================================================
// ROYAL GATE — UNLOCK & OPEN
// =========================================================

const gateLock = document.getElementById("gateLock");
const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");
const musicButton = document.getElementById("musicButton");

let gateOpened = false;


gateLock.addEventListener("click", function () {

    // Prevent multiple clicks
    if (gateOpened) {
        return;
    }

    gateOpened = true;


    // ---------------------------------------------
    // STEP 1 — UNLOCK THE LOCK
    // ---------------------------------------------

    cover.classList.add("gate-unlocked");


    // ---------------------------------------------
    // STEP 2 — WAIT FOR GATE TO OPEN
    // ---------------------------------------------

    setTimeout(function () {

        // Fade away the opening cover
        cover.style.transition =
            "opacity 1.2s ease, transform 1.5s ease";

        cover.style.opacity = "0";
        cover.style.transform = "scale(1.04)";


    }, 2200);


    // ---------------------------------------------
    // STEP 3 — SHOW MAIN INVITATION
    // ---------------------------------------------

    setTimeout(function () {

        cover.style.display = "none";

        invitation.classList.add("show");

        musicButton.classList.add("show");


        // Start countdown
        updateCountdown();


        // Start slideshow
        startSlideshow();


        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });


    }, 3400);

});


// =========================================================
// COUNTDOWN
// =========================================================

const weddingDate = new Date(
    "December 14, 2026 19:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;


    if (distance <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;

    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}


// Update every second
setInterval(updateCountdown, 1000);


// =========================================================
// SLIDESHOW
// =========================================================

let slideIndex = 0;

let slideshowTimer;


function showSlide(index) {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");


    if (slides.length === 0) {
        return;
    }


    if (index >= slides.length) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
    }


    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function (dot) {

        dot.classList.remove("active-dot");

    });


    slides[slideIndex].classList.add("active");


    if (dots[slideIndex]) {

        dots[slideIndex].classList.add("active-dot");

    }

}


function changeSlide(direction) {

    slideIndex += direction;

    showSlide(slideIndex);

    resetSlideshow();

}


function currentSlide(number) {

    slideIndex = number - 1;

    showSlide(slideIndex);

    resetSlideshow();

}


function startSlideshow() {

    showSlide(slideIndex);

    slideshowTimer = setInterval(function () {

        slideIndex++;

        showSlide(slideIndex);

    }, 5000);

}


function resetSlideshow() {

    clearInterval(slideshowTimer);

    slideshowTimer = setInterval(function () {

        slideIndex++;

        showSlide(slideIndex);

    }, 5000);

}


// =========================================================
// MUSIC
// =========================================================

let musicPlaying = false;

let audio;


/*
   IMPORTANT:

   Abhi audio file add nahi ki gayi hai.

   Jab hum wedding music upload karenge,
   yahan uski file connect karenge.

   Example:

   audio = new Audio("music/wedding.mp3");
*/


musicButton.addEventListener("click", function () {

    if (!audio) {

        alert(
            "Wedding music will be added in the next step."
        );

        return;

    }


    if (musicPlaying) {

        audio.pause();

        musicPlaying = false;

        musicButton.innerHTML = "♪";

    } else {

        audio.play();

        musicPlaying = true;

        musicButton.innerHTML = "Ⅱ";

    }

});


// =========================================================
// SCROLL REVEAL ANIMATION
// =========================================================

const revealElements = document.querySelectorAll(
    ".message, .slideshow-section, .events, .countdown-section, .nikah, .venue, .gallery, .rsvp"
);


const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(35px)";

    element.style.transition =
        "opacity 1s ease, transform 1s ease";

    revealObserver.observe(element);

});


// =========================================================
// MOBILE TOUCH SWIPE FOR SLIDESHOW
// =========================================================

let touchStartX = 0;
let touchEndX = 0;


const slider = document.querySelector(".slider");


if (slider) {

    slider.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );


    slider.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

        },
        { passive: true }
    );

}


function handleSwipe() {

    const swipeDistance =
        touchEndX - touchStartX;


    if (Math.abs(swipeDistance) < 50) {

        return;

    }


    if (swipeDistance < 0) {

        changeSlide(1);

    } else {

        changeSlide(-1);

    }

}


// =========================================================
// PREVENT IMAGE DRAGGING
// =========================================================

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("dragstart", function (event) {

        event.preventDefault();

    });

});


// =========================================================
// INITIALIZE
// =========================================================

showSlide(0);
updateCountdown();
