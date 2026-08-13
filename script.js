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
   START CINEMATIC TYPING
===================================================== */

setTimeout(() => {

    if (!introTyping) return;

    const text =
        "A little surprise for someone who makes life brighter.";

    let index = 0;

    introTyping.textContent = "";

    function typeCharacter() {

        if (index < text.length) {

            introTyping.textContent += text[index];

            index++;

            setTimeout(typeCharacter, 55);

        }

    }

    typeCharacter();

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
   CINEMATIC MUSIC PLAYER
========================================================= */

const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");
const musicPlayer = document.getElementById("musicPlayer");
const musicMessage = document.getElementById("musicMessage");
const musicMessageText = document.getElementById("musicMessageText");

let musicMessageTimer;


/* =========================================================
   MUSIC BUTTON
========================================================= */

if (musicButton && backgroundMusic) {

    musicButton.addEventListener("click", async () => {

        try {

            if (backgroundMusic.paused) {

                await backgroundMusic.play();

                musicPlayer.classList.add("playing");

                musicButton.setAttribute(
                    "aria-pressed",
                    "true"
                );

                musicButton.setAttribute(
                    "aria-label",
                    "Pause background music"
                );


                /* SHOW MESSAGE */

                if (musicMessage) {

                    musicMessageText.textContent =
                        "A little music for this moment...";

                    musicMessage.classList.add("show");


                    clearTimeout(musicMessageTimer);

                    musicMessageTimer = setTimeout(() => {

                        musicMessage.classList.remove("show");

                    }, 4000);

                }

            } else {

                backgroundMusic.pause();

                musicPlayer.classList.remove("playing");

                musicButton.setAttribute(
                    "aria-pressed",
                    "false"
                );

                musicButton.setAttribute(
                    "aria-label",
                    "Play background music"
                );


                /* SHOW PAUSE MESSAGE */

                if (musicMessage) {

                    musicMessageText.textContent =
                        "Music paused...";

                    musicMessage.classList.add("show");


                    clearTimeout(musicMessageTimer);

                    musicMessageTimer = setTimeout(() => {

                        musicMessage.classList.remove("show");

                    }, 2500);

                }

            }

        } catch (error) {

            console.log(
                "Music could not be played:",
                error
            );

            if (musicMessage) {

                musicMessageText.textContent =
                    "Add the music file to the music folder.";

                musicMessage.classList.add("show");


                clearTimeout(musicMessageTimer);

                musicMessageTimer = setTimeout(() => {

                    musicMessage.classList.remove("show");

                }, 3500);

            }

        }

    });

}


/* =========================================================
   MUSIC ENDED
========================================================= */

if (backgroundMusic) {

    backgroundMusic.addEventListener(
        "ended",
        () => {

            if (musicPlayer) {
                musicPlayer.classList.remove("playing");
            }

            if (musicButton) {

                musicButton.setAttribute(
                    "aria-pressed",
                    "false"
                );

                musicButton.setAttribute(
                    "aria-label",
                    "Play background music"
                );

            }

        }
    );

}

});   

/* ==========================================================
   PAGE 7 — PERSONAL LETTER
   ENVELOPE → DIRECT PHOTO LETTER

   MATCHES CURRENT HTML EXACTLY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* ======================================================
       ELEMENTS
    ====================================================== */

    const envelope =
        document.getElementById("cinematicEnvelope");

    const seal =
        document.querySelector(
            "#cinematicEnvelope .m-seal"
        );

    const letterContent =
        document.getElementById(
            "personalLetterContent"
        );

    const closeButton =
        document.getElementById(
            "closePersonalLetter"
        );


    /* ======================================================
       SAFETY CHECK
    ====================================================== */

    if (!envelope) {

        console.error(
            "❌ cinematicEnvelope not found"
        );

        return;

    }


    if (!letterContent) {

        console.error(
            "❌ personalLetterContent not found"
        );

        return;

    }


    console.log(
        "✅ Page 7 Personal Letter system loaded"
    );


    let opened = false;

    let openingTimer = null;


    /* ======================================================
       OPEN PERSONAL LETTER
    ====================================================== */

    function openPersonalLetter(event) {


        if (event) {

            event.preventDefault();

            event.stopPropagation();

        }


        if (opened) {

            return;

        }


        opened = true;


        console.log(
            "💌 Opening personal letter..."
        );


        /* ==================================================
           ENVELOPE ANIMATION
        ================================================== */

        envelope.classList.add(
            "opening"
        );


        /* ==================================================
           SHOW DIRECT PHOTO LETTER
        ================================================== */

        openingTimer = setTimeout(() => {


            letterContent.classList.add(
                "show-letter"
            );


            document.body.classList.add(
                "personal-letter-open"
            );


            /* ----------------------------------------------
               ALWAYS START FROM TOP
            ---------------------------------------------- */

            letterContent.scrollTop = 0;


            console.log(
                "❤️ Personal letter opened"
            );


        }, 850);

    }


    /* ======================================================
       ENVELOPE CLICK
    ====================================================== */

    envelope.addEventListener(
        "click",
        openPersonalLetter
    );


    /* ======================================================
       M SEAL CLICK
    ====================================================== */

    if (seal) {


        seal.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();

                openPersonalLetter(event);

            }
        );


        console.log(
            "✅ M seal click connected"
        );

    }


    /* ======================================================
       KEYBOARD SUPPORT
    ====================================================== */

    envelope.addEventListener(
        "keydown",
        (event) => {


            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openPersonalLetter(event);

            }

        }
    );


    /* ======================================================
       CLOSE PERSONAL LETTER
    ====================================================== */

    function closePersonalLetter() {


        if (!opened) {

            return;

        }


        console.log(
            "↩️ Closing personal letter..."
        );


        /* ==================================================
           HIDE LETTER
        ================================================== */

        letterContent.classList.remove(
            "show-letter"
        );


        document.body.classList.remove(
            "personal-letter-open"
        );


        /* ==================================================
           WAIT FOR FADE
        ================================================== */

        setTimeout(() => {


            envelope.classList.remove(
                "opening"
            );


            opened = false;


            letterContent.scrollTop = 0;


            console.log(
                "💌 Returned to envelope"
            );


        }, 700);

    }


    /* ======================================================
       CLOSE BUTTON
    ====================================================== */

    if (closeButton) {


        closeButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();

                closePersonalLetter();

            }
        );

    }


    /* ======================================================
       ESCAPE KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {


            if (
                event.key === "Escape" &&
                opened
            ) {

                closePersonalLetter();

            }

        }
    );


    /* ======================================================
       MOBILE TOUCH
       
       NOTE:
       No separate touchend listener needed.
       click already works on mobile.
    ====================================================== */


    /* ======================================================
       INITIAL STATE
    ====================================================== */

    envelope.classList.remove(
        "opening"
    );


    letterContent.classList.remove(
        "show-letter"
    );


    document.body.classList.remove(
        "personal-letter-open"
    );


    console.log(
        "💌 Personal Letter ready!"
    );

});
.
