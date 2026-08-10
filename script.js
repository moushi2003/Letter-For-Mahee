/* =========================================================
   FOR MY MAHEE
   CINEMATIC SPIDER-MAN INTRO
   JAVASCRIPT PART 1
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const intro = document.getElementById("spidermanIntro");

    const introTyping = document.getElementById("introTyping");

    const littleSpider = document.querySelector(".little-spider");

    const spiderThread = document.querySelector(".little-spider-thread");

    const spiderman = document.querySelector(".spiderman");

    const bouquet = document.querySelector(".hero-bouquet");

    const introContent = document.querySelector(".intro-content");


    /* =====================================================
       INTRO TEXT
    ===================================================== */

    const introText =
        "A little surprise for someone who makes life brighter.";


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    if (introTyping) {
        introTyping.textContent = "";
    }


    /* =====================================================
       CINEMATIC INTRO DELAY
    ===================================================== */

    setTimeout(() => {

        if (introContent) {
            introContent.classList.add("intro-visible");
        }

    }, 500);


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    function typeIntroText(text, speed = 55) {

        if (!introTyping) {
            return;
        }

        let index = 0;

        introTyping.textContent = "";

        function typeCharacter() {

            if (index < text.length) {

                introTyping.textContent += text.charAt(index);

                index++;

                setTimeout(typeCharacter, speed);

            }

        }

        typeCharacter();
    }


    /* =====================================================
       START TYPING AFTER INTRO APPEARS
    ===================================================== */

    setTimeout(() => {

        typeIntroText(introText, 55);

    }, 1800);


    /* =====================================================
       LITTLE SPIDER MOVEMENT
    ===================================================== */

    let spiderPosition = 0;

    let spiderDirection = 1;

    let spiderSpeed = 0.45;


    function animateSpider() {

        if (!littleSpider) {
            return;
        }

        spiderPosition +=
            spiderSpeed * spiderDirection;


        if (spiderPosition >= 1) {

            spiderDirection = -1;

        }


        if (spiderPosition <= 0) {

            spiderDirection = 1;

        }


        const movement =
            Math.sin(spiderPosition * Math.PI);


        const horizontalMovement =
            Math.sin(spiderPosition * Math.PI * 4)
            * 18;


        littleSpider.style.transform =
            `translateX(calc(-50% + ${horizontalMovement}px))
             rotate(${movement * 5 - 2.5}deg)`;


        requestAnimationFrame(animateSpider);
    }


    animateSpider();


    /* =====================================================
       SPIDER THREAD MOVEMENT
    ===================================================== */

    let threadAngle = 0;

    let threadDirection = 1;


    function animateThread() {

        if (!spiderThread) {
            return;
        }

        threadAngle +=
            0.015 * threadDirection;


        if (threadAngle > 3) {

            threadDirection = -1;

        }


        if (threadAngle < -3) {

            threadDirection = 1;

        }


        spiderThread.style.transform =
            `translateX(-50%) rotate(${threadAngle}deg)`;


        requestAnimationFrame(animateThread);
    }


    animateThread();


    /* =====================================================
       HERO FLOATING MOVEMENT
    ===================================================== */

    let heroTime = 0;


    function animateHero() {

        if (!spiderman) {
            return;
        }

        heroTime += 0.015;


        const vertical =
            Math.sin(heroTime) * 5;


        const rotation =
            Math.sin(heroTime * 0.8) * 1.2;


        spiderman.style.transform =
            `translateY(${vertical}px)
             rotate(${rotation}deg)`;


        requestAnimationFrame(animateHero);
    }


    animateHero();


    /* =====================================================
       BOUQUET FLOAT
    ===================================================== */

    let bouquetTime = 0;


    function animateBouquet() {

        if (!bouquet) {
            return;
        }

        bouquetTime += 0.025;


        const y =
            Math.sin(bouquetTime) * 3;


        const rotation =
            Math.sin(bouquetTime * 0.7) * 2;


        bouquet.style.transform =
            `rotate(${-8 + rotation}deg)
             translateY(${y}px)`;


        requestAnimationFrame(animateBouquet);
    }


    animateBouquet();


    /* =====================================================
       MOUSE PARALLAX
    ===================================================== */

    if (intro) {

        intro.addEventListener("mousemove", (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5);

            const y =
                (event.clientY / window.innerHeight - 0.5);


            if (spiderman) {

                spiderman.style.marginLeft =
                    `${x * 12}px`;

                spiderman.style.marginTop =
                    `${y * 8}px`;
            }


            if (littleSpider) {

                littleSpider.style.marginLeft =
                    `${x * 8}px`;
            }

        });


        intro.addEventListener("mouseleave", () => {

            if (spiderman) {

                spiderman.style.marginLeft = "0px";

                spiderman.style.marginTop = "0px";

            }


            if (littleSpider) {

                littleSpider.style.marginLeft = "0px";

            }

        });

    }


    /* =====================================================
       TOUCH PARALLAX
    ===================================================== */

    if (intro) {

        intro.addEventListener("touchmove", (event) => {

            if (!event.touches.length) {
                return;
            }


            const touch =
                event.touches[0];


            const x =
                touch.clientX / window.innerWidth - 0.5;

            const y =
                touch.clientY / window.innerHeight - 0.5;


            if (spiderman) {

                spiderman.style.marginLeft =
                    `${x * 8}px`;

                spiderman.style.marginTop =
                    `${y * 6}px`;

            }

        }, {
            passive: true
        });

    }


    /* =====================================================
       INTRO LOADED CLASS
    ===================================================== */

    setTimeout(() => {

        if (intro) {
            intro.classList.add("intro-loaded");
        }

    }, 100);


    /* =====================================================
       PAGE VISIBILITY
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (document.hidden) {

                document.body.classList.add(
                    "page-paused"
                );

            } else {

                document.body.classList.remove(
                    "page-paused"
                );

            }

        }
    );

   /* =========================================================
   JAVASCRIPT PART 2
   INTRO INTERACTION + PAGE TRANSITION
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const introSection =
    document.getElementById("spidermanIntro");

const birthdayPage =
    document.getElementById("birthdayPage");

const scrollIndicator =
    document.querySelector(".intro-scroll");

const lightSweep =
    document.querySelector(".light-sweep");


/* =========================================================
   INTRO SCROLL EFFECT
========================================================= */

let introLeaving = false;


function leaveIntro() {

    if (introLeaving) {
        return;
    }

    introLeaving = true;


    if (introSection) {

        introSection.classList.add(
            "intro-leaving"
        );

    }


    setTimeout(() => {

        if (birthdayPage) {

            birthdayPage.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 700);

}


/* =========================================================
   SCROLL DETECTION
========================================================= */

window.addEventListener(
    "wheel",
    (event) => {

        if (window.scrollY > 80) {

            leaveIntro();

        }

    },
    {
        passive: true
    }
);


/* =========================================================
   TOUCH SWIPE DETECTION
========================================================= */

let touchStartY = 0;

let touchEndY = 0;


window.addEventListener(
    "touchstart",
    (event) => {

        if (!event.touches.length) {
            return;
        }

        touchStartY =
            event.touches[0].clientY;

    },
    {
        passive: true
    }
);


window.addEventListener(
    "touchend",
    (event) => {

        if (!event.changedTouches.length) {
            return;
        }

        touchEndY =
            event.changedTouches[0].clientY;


        const swipeDistance =
            touchStartY - touchEndY;


        if (swipeDistance > 60) {

            leaveIntro();

        }

    },
    {
        passive: true
    }
);


/* =========================================================
   SCROLL INDICATOR CLICK
========================================================= */

if (scrollIndicator) {

    scrollIndicator.style.cursor =
        "pointer";


    scrollIndicator.addEventListener(
        "click",
        () => {

            leaveIntro();

        }
    );

}


/* =========================================================
   SPIDER CLICK / TAP EFFECT
========================================================= */

const smallSpider =
    document.querySelector(".little-spider");


if (smallSpider) {

    smallSpider.style.pointerEvents =
        "auto";

    smallSpider.style.cursor =
        "pointer";


    smallSpider.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();


            smallSpider.classList.add(
                "spider-startled"
            );


            setTimeout(() => {

                smallSpider.classList.remove(
                    "spider-startled"
                );

            }, 800);

        }
    );

}


/* =========================================================
   INTRO CLICK EFFECT
========================================================= */

if (introSection) {

    introSection.addEventListener(
        "click",
        (event) => {

            const ripple =
                document.createElement("span");


            ripple.className =
                "cinematic-ripple";


            ripple.style.left =
                `${event.clientX}px`;


            ripple.style.top =
                `${event.clientY}px`;


            introSection.appendChild(
                ripple
            );


            setTimeout(() => {

                ripple.remove();

            }, 900);

        }
    );

}


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "ArrowDown" ||
            event.key === "PageDown" ||
            event.key === " "
        ) {

            if (
                document.activeElement.tagName !==
                "INPUT"
            ) {

                leaveIntro();

            }

        }

    }
);


/* =========================================================
   INTRO EXIT ANIMATION
========================================================= */

const introExitStyle =
    document.createElement("style");


introExitStyle.textContent = `

    .intro-leaving {
        animation:
            introExitAnimation
            1.2s
            cubic-bezier(0.77, 0, 0.175, 1)
            forwards;
    }


    @keyframes introExitAnimation {

        0% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
        }

        45% {
            opacity: 1;
            transform: scale(1.025);
            filter: blur(0);
        }

        100% {
            opacity: 0;
            transform: scale(1.08);
            filter: blur(10px);
        }

    }


    .spider-startled {

        animation:
            spiderStartled
            0.8s
            ease-in-out
            forwards !important;

    }


    @keyframes spiderStartled {

        0% {
            transform:
                translateX(-50%)
                scale(1);
        }

        25% {
            transform:
                translateX(-50%)
                scale(1.25)
                rotate(-15deg);
        }

        50% {
            transform:
                translateX(-50%)
                scale(0.85)
                rotate(15deg);
        }

        75% {
            transform:
                translateX(-50%)
                scale(1.15)
                rotate(-8deg);
        }

        100% {
            transform:
                translateX(-50%)
                scale(1)
                rotate(0);
        }

    }


    .cinematic-ripple {

        position: fixed;

        width: 20px;
        height: 20px;

        border-radius: 50%;

        pointer-events: none;

        z-index: 9999;

        transform:
            translate(-50%, -50%)
            scale(0);

        border:
            1px solid
            rgba(255,255,255,0.6);

        box-shadow:
            0 0 20px
            rgba(120,160,255,0.3);

        animation:
            rippleAnimation
            0.9s
            ease-out
            forwards;

    }


    @keyframes rippleAnimation {

        0% {
            transform:
                translate(-50%, -50%)
                scale(0);

            opacity: 0.8;
        }

        100% {
            transform:
                translate(-50%, -50%)
                scale(12);

            opacity: 0;
        }

    }


    .page-paused * {
        animation-play-state: paused !important;
    }

`;


document.head.appendChild(
    introExitStyle
);


/* =========================================================
   INITIAL SCROLL POSITION
========================================================= */

if ("scrollRestoration" in history) {

    history.scrollRestoration =
        "manual";

}


window.addEventListener(
    "load",
    () => {

        window.scrollTo(
            0,
            0
        );

    }
);


/* =========================================================
   FINAL INTRO INITIALIZATION
========================================================= */

setTimeout(() => {

    if (introSection) {

        introSection.classList.add(
            "ready"
        );

    }

}, 1200);

   


});
