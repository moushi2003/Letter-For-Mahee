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

/* =========================================================
   PAGE 2 — CINEMATIC BIRTHDAY
   JAVASCRIPT PART 1
   CORE SETUP + CINEMATIC CURTAIN
========================================================= */


/* =========================================================
   1. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🎬 Cinematic Birthday — JS Loaded");


    /* =====================================================
       2. ELEMENT REFERENCES
    ===================================================== */

    const curtain = document.querySelector(".birthday-curtain");

    const leftCurtain =
        document.querySelector(".curtain-left");

    const rightCurtain =
        document.querySelector(".curtain-right");

    const celebrateBtn =
        document.getElementById("celebrateBtn");


    /* =====================================================
       3. BASIC STATE
    ===================================================== */

    let curtainOpened = false;
    let celebrationStarted = false;


    /* =====================================================
       4. CINEMATIC CURTAIN OPEN
    ===================================================== */

    function openBirthdayCurtain() {

        // Prevent duplicate execution
        if (curtainOpened) return;

        curtainOpened = true;

        console.log("🎭 Opening birthday curtain...");


        /*
         * Small cinematic pause before opening.
         * This gives the page a dramatic entrance.
         */

        setTimeout(() => {

            if (curtain) {
                curtain.classList.add("curtain-open");
            }

            if (leftCurtain) {
                leftCurtain.classList.add("curtain-left-open");
            }

            if (rightCurtain) {
                rightCurtain.classList.add("curtain-right-open");
            }

        }, 900);


        /*
         * Completely disable curtain after animation.
         * This prevents it from blocking buttons/content.
         */

        setTimeout(() => {

            if (curtain) {
                curtain.classList.add("curtain-finished");
            }

        }, 3500);
    }


    /* =====================================================
       5. START CURTAIN
    ===================================================== */

    /*
     * Start after the page has visually settled.
     */

    setTimeout(() => {
        openBirthdayCurtain();
    }, 500);


    /* =====================================================
       6. CELEBRATE BUTTON — INITIAL SETUP
    ===================================================== */

    if (celebrateBtn) {

        celebrateBtn.addEventListener("click", () => {

            if (celebrationStarted) return;

            celebrationStarted = true;

            console.log("🎉 Celebration button clicked!");

            /*
             * The actual balloons, sparkles and cake
             * celebration will be connected in later parts.
             */

            celebrateBtn.classList.add("celebrated");

        });

    }


    /* =====================================================
       7. SAFE RESIZE HANDLER
    ===================================================== */

    let resizeTimer;

    window.addEventListener("resize", () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            /*
             * Future responsive animation logic
             * will be connected here.
             */

            console.log("📱 Screen resized");

        }, 150);

    });


    /* =====================================================
       8. PAGE INITIALIZATION COMPLETE
    ===================================================== */

    console.log("✅ Birthday Page initialized successfully.");

});

/* =========================================================
   PAGE 2 — CINEMATIC BIRTHDAY
   JAVASCRIPT PART 2
   FLOATING SPARKLE / JHIKIMIKI SYSTEM
========================================================= */


/* =========================================================
   1. SPARKLE SYSTEM
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("✨ Sparkle system initializing...");


    /* =====================================================
       2. FIND SPARKLE CONTAINER
    ===================================================== */

    let sparkleContainer =
        document.querySelector(".birthday-sparkles");


    /* =====================================================
       3. CREATE CONTAINER IF NOT FOUND
    ===================================================== */

    if (!sparkleContainer) {

        sparkleContainer =
            document.createElement("div");

        sparkleContainer.className =
            "birthday-sparkles";

        document.body.appendChild(sparkleContainer);
    }


    /* =====================================================
       4. SPARKLE CREATOR
    ===================================================== */

    function createFloatingSparkle() {

        const sparkle =
            document.createElement("span");


        /* ---------------------------------------------
           Sparkle class
        --------------------------------------------- */

        sparkle.className =
            "floating-sparkle";


        /* ---------------------------------------------
           Random position
        --------------------------------------------- */

        const randomX =
            Math.random() * 100;

        const randomY =
            Math.random() * 100;


        sparkle.style.left =
            randomX + "%";

        sparkle.style.top =
            randomY + "%";


        /* ---------------------------------------------
           Random size
        --------------------------------------------- */

        const size =
            Math.random() * 5 + 3;

        sparkle.style.width =
            size + "px";

        sparkle.style.height =
            size + "px";


        /* ---------------------------------------------
           Random animation duration
        --------------------------------------------- */

        const duration =
            Math.random() * 4 + 3;

        sparkle.style.animationDuration =
            duration + "s";


        /* ---------------------------------------------
           Random animation delay
        --------------------------------------------- */

        const delay =
            Math.random() * 3;

        sparkle.style.animationDelay =
            delay + "s";


        /* ---------------------------------------------
           Add sparkle
        --------------------------------------------- */

        sparkleContainer.appendChild(sparkle);


        /* ---------------------------------------------
           Automatic cleanup
        --------------------------------------------- */

        setTimeout(() => {

            sparkle.remove();

        }, (duration + delay) * 1000 + 1000);
    }


    /* =====================================================
       5. INITIAL SPARKLES
    ===================================================== */

    const initialSparkles =
        window.innerWidth <= 600 ? 18 : 30;


    for (
        let i = 0;
        i < initialSparkles;
        i++
    ) {

        createFloatingSparkle();
    }


    /* =====================================================
       6. CONTINUOUS SPARKLES
    ===================================================== */

    const sparkleInterval =
        window.innerWidth <= 600
            ? 700
            : 500;


    setInterval(() => {

        createFloatingSparkle();

    }, sparkleInterval);


    /* =====================================================
       7. RESIZE OPTIMIZATION
    ===================================================== */

    let sparkleResizeTimer;

    window.addEventListener("resize", () => {

        clearTimeout(sparkleResizeTimer);

        sparkleResizeTimer =
            setTimeout(() => {

                console.log(
                    "✨ Sparkle system adjusted for screen size."
                );

            }, 250);
    });


    /* =====================================================
       8. COMPLETE
    ===================================================== */

    console.log("✨ Floating sparkle system ready.");

});

/* =========================================================
   PAGE 2 — CINEMATIC BIRTHDAY
   JAVASCRIPT PART 3
   CELEBRATE BUTTON + CELEBRATED STATE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🎉 Celebrate Button system initializing...");


    /* =====================================================
       1. GET BUTTON
    ===================================================== */

    const celebrateBtn =
        document.getElementById("celebrateBtn");


    /* =====================================================
       2. SAFETY CHECK
    ===================================================== */

    if (!celebrateBtn) {

        console.warn(
            "⚠️ Celebrate button not found."
        );

        return;
    }


    /* =====================================================
       3. PREVENT DUPLICATE LISTENER
    ===================================================== */

    if (
        celebrateBtn.dataset.celebrateInitialized === "true"
    ) {

        console.log(
            "ℹ️ Celebrate button already initialized."
        );

        return;
    }


    celebrateBtn.dataset.celebrateInitialized =
        "true";


    /* =====================================================
       4. BUTTON STATE
    ===================================================== */

    let isCelebrated = false;


    /* =====================================================
       5. CLICK HANDLER
    ===================================================== */

    celebrateBtn.addEventListener("click", () => {


        /* ---------------------------------------------
           Prevent repeated celebration
        --------------------------------------------- */

        if (isCelebrated) {

            console.log(
                "🎉 Celebration already started."
            );

            return;
        }


        /* ---------------------------------------------
           Update state
        --------------------------------------------- */

        isCelebrated = true;


        /* ---------------------------------------------
           Add celebrated class
        --------------------------------------------- */

        celebrateBtn.classList.add(
            "celebrated"
        );


        /* ---------------------------------------------
           Accessibility state
        --------------------------------------------- */

        celebrateBtn.setAttribute(
            "aria-pressed",
            "true"
        );


        /* ---------------------------------------------
           Visual text change
        --------------------------------------------- */

        const originalText =
            celebrateBtn.dataset.originalText ||
            celebrateBtn.textContent.trim();

        celebrateBtn.dataset.originalText =
            originalText;


        /*
         * Don't permanently destroy the original
         * text if later JS needs it.
         */

        if (!celebrateBtn.dataset.celebrationTextChanged) {

            celebrateBtn.textContent =
                "Celebration Started ✨";

            celebrateBtn.dataset.celebrationTextChanged =
                "true";
        }


        /* ---------------------------------------------
           Cinematic button effect
        --------------------------------------------- */

        celebrateBtn.classList.add(
            "celebrate-pulse"
        );


        /* ---------------------------------------------
           Remove temporary pulse
        --------------------------------------------- */

        setTimeout(() => {

            celebrateBtn.classList.remove(
                "celebrate-pulse"
            );

        }, 1000);


        /* ---------------------------------------------
           Dispatch custom event
           
           Part 4/5/6 will listen to this event.
           This keeps every animation modular.
        --------------------------------------------- */

        document.dispatchEvent(
            new CustomEvent("birthdayCelebrationStart", {
                detail: {
                    button: celebrateBtn
                }
            })
        );


        console.log(
            "🎉 Birthday celebration event dispatched!"
        );

    });


    /* =====================================================
       6. INITIAL ACCESSIBILITY STATE
    ===================================================== */

    if (
        !celebrateBtn.hasAttribute("aria-pressed")
    ) {

        celebrateBtn.setAttribute(
            "aria-pressed",
            "false"
        );
    }


    /* =====================================================
       7. READY
    ===================================================== */

    console.log(
        "✅ Celebrate Button system ready."
    );

});

/* =========================================================
   PAGE 2 — CINEMATIC BIRTHDAY
   JAVASCRIPT PART 4
   BALLOON FLIGHT SYSTEM 🎈
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🎈 Balloon system initializing...");


    /* =====================================================
       1. BALLOON CONTAINER
    ===================================================== */

    let balloonContainer =
        document.querySelector(".birthday-balloons");


    /*
     * If HTML container doesn't exist,
     * create it automatically.
     */

    if (!balloonContainer) {

        balloonContainer =
            document.createElement("div");

        balloonContainer.className =
            "birthday-balloons";

        document.body.appendChild(balloonContainer);
    }


    /* =====================================================
       2. BALLOON SYMBOLS
    ===================================================== */

    const balloonSymbols = [
        "🎈",
        "🎈",
        "🎈",
        "🎈",
        "🎈",
        "🎈"
    ];


    /* =====================================================
       3. BALLOON CREATOR
    ===================================================== */

    function createBalloon(index) {

        const balloon =
            document.createElement("span");


        /* ---------------------------------------------
           Basic class
        --------------------------------------------- */

        balloon.className =
            "cinematic-balloon";


        /* ---------------------------------------------
           Balloon character
        --------------------------------------------- */

        balloon.textContent =
            balloonSymbols[
                index % balloonSymbols.length
            ];


        /* ---------------------------------------------
           Random horizontal position
        --------------------------------------------- */

        const randomX =
            Math.random() * 90 + 5;


        balloon.style.left =
            randomX + "vw";


        /* ---------------------------------------------
           Random size
        --------------------------------------------- */

        const randomSize =
            Math.random() * 0.7 + 0.8;


        balloon.style.setProperty(
            "--balloon-scale",
            randomSize
        );


        /* ---------------------------------------------
           Random horizontal movement
        --------------------------------------------- */

        const drift =
            (Math.random() * 160) - 80;


        balloon.style.setProperty(
            "--balloon-drift",
            drift + "px"
        );


        /* ---------------------------------------------
           Random animation duration
        --------------------------------------------- */

        const duration =
            Math.random() * 3 + 5;


        balloon.style.animationDuration =
            duration + "s";


        /* ---------------------------------------------
           Staggered launch delay
        --------------------------------------------- */

        const delay =
            Math.random() * 0.9;


        balloon.style.animationDelay =
            delay + "s";


        /* ---------------------------------------------
           Add to page
        --------------------------------------------- */

        balloonContainer.appendChild(
            balloon
        );


        /* ---------------------------------------------
           Cleanup
        --------------------------------------------- */

        setTimeout(() => {

            balloon.remove();

        }, (duration + delay) * 1000 + 1000);
    }


    /* =====================================================
       4. LAUNCH BALLOONS
    ===================================================== */

    function launchBalloons() {

        console.log("🎈 Launching balloons!");


        /*
         * Fewer balloons on mobile
         * for smoother performance.
         */

        const isMobile =
            window.innerWidth <= 600;


        const balloonCount =
            isMobile ? 12 : 20;


        for (
            let i = 0;
            i < balloonCount;
            i++
        ) {

            setTimeout(() => {

                createBalloon(i);

            }, i * 120);
        }
    }


    /* =====================================================
       5. LISTEN FOR CELEBRATION EVENT
    ===================================================== */

    document.addEventListener(
        "birthdayCelebrationStart",
        () => {

            launchBalloons();

        }
    );


    /* =====================================================
       6. READY
    ===================================================== */

    console.log(
        "✅ Balloon Flight System ready."
    );

});

/* =========================================================
   PAGE 2 — CINEMATIC BIRTHDAY
   JAVASCRIPT PART 5
   CELEBRATION SPARKLE BURST ✨
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("✨ Celebration burst system initializing...");


    /* =====================================================
       1. BURST CONTAINER
    ===================================================== */

    let burstContainer =
        document.querySelector(".celebration-burst-container");


    if (!burstContainer) {

        burstContainer =
            document.createElement("div");

        burstContainer.className =
            "celebration-burst-container";

        document.body.appendChild(
            burstContainer
        );
    }


    /* =====================================================
       2. SPARKLE CHARACTERS
    ===================================================== */

    const sparkleSymbols = [
        "✦",
        "✧",
        "✨",
        "⋆",
        "✦",
        "✧"
    ];


    /* =====================================================
       3. CREATE SINGLE BURST SPARKLE
    ===================================================== */

    function createBurstSparkle(
        centerX,
        centerY,
        index,
        total
    ) {

        const sparkle =
            document.createElement("span");


        sparkle.className =
            "celebration-sparkle";


        /* ---------------------------------------------
           Symbol
        --------------------------------------------- */

        sparkle.textContent =
            sparkleSymbols[
                index % sparkleSymbols.length
            ];


        /* ---------------------------------------------
           Starting position
        --------------------------------------------- */

        sparkle.style.left =
            centerX + "px";

        sparkle.style.top =
            centerY + "px";


        /* ---------------------------------------------
           Radial direction
        --------------------------------------------- */

        const angle =
            (Math.PI * 2 / total) * index;


        /*
         * Random distance gives the burst
         * a natural cinematic feel.
         */

        const distance =
            Math.random() * 130 + 70;


        const moveX =
            Math.cos(angle) * distance;


        const moveY =
            Math.sin(angle) * distance;


        sparkle.style.setProperty(
            "--burst-x",
            moveX + "px"
        );


        sparkle.style.setProperty(
            "--burst-y",
            moveY + "px"
        );


        /* ---------------------------------------------
           Random size
        --------------------------------------------- */

        const size =
            Math.random() * 12 + 8;


        sparkle.style.fontSize =
            size + "px";


        /* ---------------------------------------------
           Random delay
        --------------------------------------------- */

        sparkle.style.animationDelay =
            (Math.random() * 0.15) + "s";


        /* ---------------------------------------------
           Add sparkle
        --------------------------------------------- */

        burstContainer.appendChild(
            sparkle
        );


        /* ---------------------------------------------
           Cleanup
        --------------------------------------------- */

        setTimeout(() => {

            sparkle.remove();

        }, 1500);
    }


    /* =====================================================
       4. CREATE FULL BURST
    ===================================================== */

    function createCelebrationBurst() {

        console.log(
            "✨ Celebration sparkle burst!"
        );


        /*
         * Burst starts around the center of
         * the visible screen.
         */

        const centerX =
            window.innerWidth / 2;


        const centerY =
            window.innerHeight * 0.48;


        /*
         * Mobile gets fewer particles.
         */

        const isMobile =
            window.innerWidth <= 600;


        const particleCount =
            isMobile ? 26 : 42;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            createBurstSparkle(
                centerX,
                centerY,
                i,
                particleCount
            );
        }
    }


    /* =====================================================
       5. SECONDARY MINI BURST
    ===================================================== */

    function createMiniBurst() {

        const centerX =
            window.innerWidth / 2;

        const centerY =
            window.innerHeight * 0.48;


        const particleCount =
            window.innerWidth <= 600
                ? 12
                : 18;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            createBurstSparkle(
                centerX,
                centerY,
                i,
                particleCount
            );
        }
    }


    /* =====================================================
       6. LISTEN FOR CELEBRATION
    ===================================================== */

    document.addEventListener(
        "birthdayCelebrationStart",
        () => {

            /*
             * Main burst
             */

            createCelebrationBurst();


            /*
             * Small delayed burst
             * for cinematic layering.
             */

            setTimeout(() => {

                createMiniBurst();

            }, 420);

        }
    );


    /* =====================================================
       7. READY
    ===================================================== */

    console.log(
        "✅ Celebration Sparkle Burst ready."
    );

});

/* =========================================================
   PAGE 2 — CINEMATIC BIRTHDAY
   JAVASCRIPT PART 6
   CAKE CELEBRATION ANIMATION 🎂
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🎂 Cake celebration system initializing...");


    /* =====================================================
       1. FIND CAKE ELEMENT
    ===================================================== */

    /*
     * Multiple possible selectors are checked so this
     * can work with the existing Page 2 structure.
     */

    const cake =
        document.querySelector(".cake") ||
        document.querySelector(".birthday-cake") ||
        document.querySelector(".cake-container");


    /* =====================================================
       2. FIND CAKE SECTION
    ===================================================== */

    const cakeSection =
        document.querySelector(".cake-page") ||
        document.querySelector(".birthday-page") ||
        document.querySelector(".cake-section");


    /* =====================================================
       3. FIND CANDLES
    ===================================================== */

    const candles =
        document.querySelectorAll(
            ".candle, .cake-candle, .birthday-candle"
        );


    /* =====================================================
       4. FIND CAKE GLOW
    ===================================================== */

    let cakeGlow =
        document.querySelector(".cake-celebration-glow");


    /*
     * Create glow automatically if cake exists.
     */

    if (!cakeGlow && cake) {

        cakeGlow =
            document.createElement("div");

        cakeGlow.className =
            "cake-celebration-glow";

        cake.appendChild(cakeGlow);
    }


    /* =====================================================
       5. CAKE CELEBRATION STATE
    ===================================================== */

    let cakeCelebrated = false;


    /* =====================================================
       6. START CAKE CELEBRATION
    ===================================================== */

    function celebrateCake() {

        if (cakeCelebrated) return;

        cakeCelebrated = true;


        console.log(
            "🎂 Cake celebration started!"
        );


        /* ---------------------------------------------
           Cake main animation
        --------------------------------------------- */

        if (cake) {

            cake.classList.add(
                "cake-celebration"
            );
        }


        /* ---------------------------------------------
           Cake section animation
        --------------------------------------------- */

        if (cakeSection) {

            cakeSection.classList.add(
                "cake-celebration-active"
            );
        }


        /* ---------------------------------------------
           Glow effect
        --------------------------------------------- */

        if (cakeGlow) {

            cakeGlow.classList.add(
                "cake-glow-active"
            );
        }


        /* ---------------------------------------------
           Candle celebration
        --------------------------------------------- */

        if (candles.length) {

            candles.forEach((candle, index) => {

                setTimeout(() => {

                    candle.classList.add(
                        "candle-celebration"
                    );

                }, index * 90);

            });
        }


        /* ---------------------------------------------
           Cinematic cake pulse
        --------------------------------------------- */

        setTimeout(() => {

            if (cake) {

                cake.classList.add(
                    "cake-final-pulse"
                );
            }

        }, 650);


        /* ---------------------------------------------
           Remove temporary pulse
           Keep celebration state active.
        --------------------------------------------- */

        setTimeout(() => {

            if (cake) {

                cake.classList.remove(
                    "cake-final-pulse"
                );
            }

        }, 1600);
    }


    /* =====================================================
       7. LISTEN FOR CELEBRATE EVENT
    ===================================================== */

    document.addEventListener(
        "birthdayCelebrationStart",
        () => {

            /*
             * Small delay makes the sequence feel
             * cinematic after the button is pressed.
             */

            setTimeout(() => {

                celebrateCake();

            }, 180);

        }
    );


    /* =====================================================
       8. SAFE RESIZE
    ===================================================== */

    let cakeResizeTimer;

    window.addEventListener("resize", () => {

        clearTimeout(cakeResizeTimer);

        cakeResizeTimer =
            setTimeout(() => {

                /*
                 * Cake animation itself doesn't need
                 * recalculation. This simply keeps the
                 * module ready for responsive additions.
                 */

                console.log(
                    "🎂 Cake system adjusted."
                );

            }, 200);
    });


    /* =====================================================
       9. READY
    ===================================================== */

    console.log(
        "✅ Cake Celebration System ready."
    );

});

/* =========================================================
   PAGE 2 — CINEMATIC BIRTHDAY
   JAVASCRIPT PART 7
   MUSIC + SOUND INTEGRATION 🎵
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🎵 Audio integration initializing...");


    /* =====================================================
       1. FIND EXISTING AUDIO ELEMENTS
    ===================================================== */

    const music =
        document.getElementById("music");

    const thunderSound =
        document.getElementById("thunderSound");

    const webShootSound =
        document.getElementById("webShootSound");

    const whooshSound =
        document.getElementById("whooshSound");

    const sparkleSound =
        document.getElementById("sparkleSound");


    /* =====================================================
       2. SAFE AUDIO PLAY FUNCTION
    ===================================================== */

    function playSound(audio, volume = 1) {

        /*
         * If the audio element doesn't exist,
         * simply skip it.
         */

        if (!audio) return;


        try {

            audio.volume = volume;

            /*
             * Restart short effects from beginning.
             */

            audio.currentTime = 0;

            const playPromise =
                audio.play();


            /*
             * Prevent autoplay/promise errors
             * from breaking the rest of the page.
             */

            if (
                playPromise &&
                typeof playPromise.catch === "function"
            ) {

                playPromise.catch(() => {

                    console.log(
                        "🔇 Audio playback waiting for user interaction."
                    );

                });
            }

        } catch (error) {

            console.warn(
                "⚠️ Audio could not be played:",
                error
            );
        }
    }


    /* =====================================================
       3. SAFE MUSIC FUNCTION
    ===================================================== */

    function startBackgroundMusic() {

        if (!music) return;


        try {

            music.volume = 0.45;

            /*
             * Don't restart music if it is already playing.
             */

            if (!music.paused) return;


            const playPromise =
                music.play();


            if (
                playPromise &&
                typeof playPromise.catch === "function"
            ) {

                playPromise.catch(() => {

                    console.log(
                        "🎵 Music requires user interaction."
                    );

                });
            }

        } catch (error) {

            console.warn(
                "⚠️ Background music unavailable."
            );
        }
    }


    /* =====================================================
       4. CELEBRATE EVENT
    ===================================================== */

    document.addEventListener(
        "birthdayCelebrationStart",
        () => {

            console.log(
                "🎉 Audio celebration sequence started."
            );


            /* ---------------------------------------------
               Start music after user click
               This avoids browser autoplay problems.
            --------------------------------------------- */

            startBackgroundMusic();


            /* ---------------------------------------------
               Whoosh
            --------------------------------------------- */

            setTimeout(() => {

                playSound(
                    whooshSound,
                    0.55
                );

            }, 80);


            /* ---------------------------------------------
               Sparkle sound
            --------------------------------------------- */

            setTimeout(() => {

                playSound(
                    sparkleSound,
                    0.65
                );

            }, 350);


            /* ---------------------------------------------
               Optional cinematic thunder
               Only plays if that audio exists.
            --------------------------------------------- */

            setTimeout(() => {

                playSound(
                    thunderSound,
                    0.20
                );

            }, 700);

        }
    );


    /* =====================================================
       5. SPIDER-MAN / WEB SOUND SUPPORT
    ===================================================== */

    /*
     * This function is intentionally exposed globally
     * so your existing Spider-Man intro JS can call:
     *
     * playWebShootSound();
     */

    window.playWebShootSound =
        function () {

            playSound(
                webShootSound,
                0.55
            );
        };


    /* =====================================================
       6. MUSIC BUTTON SUPPORT
    ===================================================== */

    const musicButton =
        document.getElementById("musicBtn");


    if (musicButton && music) {

        musicButton.addEventListener(
            "click",
            () => {

                if (music.paused) {

                    startBackgroundMusic();

                    musicButton.classList.add(
                        "music-playing"
                    );

                } else {

                    music.pause();

                    musicButton.classList.remove(
                        "music-playing"
                    );
                }

            }
        );

    }


    /* =====================================================
       7. READY
    ===================================================== */

    console.log(
        "✅ Music + Sound Integration ready."
    );

});

/* =========================================================
   PAGE 2 — CINEMATIC BIRTHDAY
   JAVASCRIPT PART 8
   FINAL POLISH + MOBILE / PC OPTIMIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🎬 Final cinematic polish initializing...");


    /* =====================================================
       1. PAGE READY STATE
    ===================================================== */

    document.documentElement.classList.add(
        "birthday-js-ready"
    );

    document.body.classList.add(
        "birthday-page-ready"
    );


    /* =====================================================
       2. DEVICE DETECTION
    ===================================================== */

    const isMobile =
        window.matchMedia("(max-width: 600px)").matches;

    const isTablet =
        window.matchMedia(
            "(min-width: 601px) and (max-width: 1024px)"
        ).matches;


    if (isMobile) {

        document.body.classList.add(
            "birthday-mobile"
        );

    } else if (isTablet) {

        document.body.classList.add(
            "birthday-tablet"
        );

    } else {

        document.body.classList.add(
            "birthday-desktop"
        );
    }


    /* =====================================================
       3. REDUCE EFFECTS WHEN USER PREFERS IT
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    function updateMotionPreference() {

        if (reducedMotion.matches) {

            document.body.classList.add(
                "reduced-motion"
            );

        } else {

            document.body.classList.remove(
                "reduced-motion"
            );
        }
    }


    updateMotionPreference();


    /* =====================================================
       4. LISTEN FOR MOTION PREFERENCE CHANGES
    ===================================================== */

    if (
        typeof reducedMotion.addEventListener ===
        "function"
    ) {

        reducedMotion.addEventListener(
            "change",
            updateMotionPreference
        );
    }


    /* =====================================================
       5. PREVENT ACCIDENTAL DOUBLE TAP
    ===================================================== */

    let lastTouchTime = 0;


    document.addEventListener(
        "touchend",
        (event) => {

            const now =
                Date.now();


            if (
                now - lastTouchTime < 350
            ) {

                /*
                 * Don't block normal scrolling.
                 * Only protect extremely rapid repeated
                 * interactions around celebration elements.
                 */

                const target =
                    event.target.closest(
                        "#celebrateBtn"
                    );


                if (target) {

                    event.preventDefault();
                }
            }


            lastTouchTime = now;

        },
        {
            passive: false
        }
    );


    /* =====================================================
       6. VISIBILITY OPTIMIZATION
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            /*
             * When the tab becomes hidden, pause heavy
             * visual effects where possible.
             */

            if (document.hidden) {

                document.body.classList.add(
                    "birthday-page-hidden"
                );

            } else {

                document.body.classList.remove(
                    "birthday-page-hidden"
                );
            }

        }
    );


    /* =====================================================
       7. SAFE WINDOW RESIZE
    ===================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(resizeTimer);


            resizeTimer =
                setTimeout(() => {

                    const currentWidth =
                        window.innerWidth;


                    /*
                     * Update responsive body classes.
                     */

                    document.body.classList.remove(
                        "birthday-mobile",
                        "birthday-tablet",
                        "birthday-desktop"
                    );


                    if (currentWidth <= 600) {

                        document.body.classList.add(
                            "birthday-mobile"
                        );

                    } else if (
                        currentWidth <= 1024
                    ) {

                        document.body.classList.add(
                            "birthday-tablet"
                        );

                    } else {

                        document.body.classList.add(
                            "birthday-desktop"
                        );
                    }


                    console.log(
                        "📱 Responsive layout updated."
                    );

                }, 250);

        }
    );


    /* =====================================================
       8. CLEANUP OLD TEMPORARY EFFECTS
    ===================================================== */

    function cleanupTemporaryEffects() {

        const temporaryElements =
            document.querySelectorAll(
                ".cinematic-balloon, " +
                ".celebration-sparkle"
            );


        /*
         * Keep DOM lightweight.
         */

        if (temporaryElements.length > 120) {

            temporaryElements.forEach(
                (element, index) => {

                    if (index < 40) {

                        element.remove();
                    }

                }
            );
        }
    }


    setInterval(
        cleanupTemporaryEffects,
        5000
    );


    /* =====================================================
       9. GLOBAL CINEMATIC ERROR PROTECTION
    ===================================================== */

    window.addEventListener(
        "error",
        (event) => {

            /*
             * Don't allow a visual/audio module error
             * to break the entire birthday page.
             */

            console.warn(
                "⚠️ Birthday animation error:",
                event.message
            );

        }
    );


    /* =====================================================
       10. FINAL INITIALIZATION
    ===================================================== */

    setTimeout(() => {

        document.body.classList.add(
            "birthday-cinematic-ready"
        );


        console.log(
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        );

        console.log(
            "🎂 CINEMATIC BIRTHDAY READY"
        );

        console.log(
            "🎬 Curtain System       ✓"
        );

        console.log(
            "✨ Floating Sparkles    ✓"
        );

        console.log(
            "🎉 Celebrate Button     ✓"
        );

        console.log(
            "🎈 Balloon System       ✓"
        );

        console.log(
            "✨ Celebration Burst     ✓"
        );

        console.log(
            "🎂 Cake Animation       ✓"
        );

        console.log(
            "🎵 Audio Integration    ✓"
        );

        console.log(
            "📱 Mobile / PC Support  ✓"
        );

        console.log(
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        );

    }, 100);


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
