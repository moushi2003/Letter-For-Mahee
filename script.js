/* ==========================================================
   MARVEL CINEMATIC SPIDER HERO & CAKE PAGE — COMBINED SCRIPT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       GLOBAL SELECTORS & VARIABLES
    ================================ */
    const scene = document.getElementById("spiderScene");
    const musicBtn = document.getElementById("musicBtn");
    const enterBtn = document.getElementById("enterBtn");
    const music = document.getElementById("music");
    const typing = document.getElementById("typing");
    const flash = document.querySelector(".screen-flash");
    const thunder = document.getElementById("thunderSound");
    const whoosh = document.getElementById("whooshSound");
    const webShoot = document.getElementById("webShootSound");
    const particles = document.querySelector(".particle-container");
    const glow = document.querySelector(".spider-glow");
    const heroCard = document.querySelector(".glass-card");

    /* ===============================
       TYPE WRITER (HERO)
    ================================ */
    const message = "Today isn't just another birthday. It's the celebration of a truly wonderful soul. Welcome to your own little Marvel adventure... ❤️";
    let index = 0;

    function typeWriter() {
        if (typing && index < message.length) {
            typing.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeWriter, 35);
        }
    }

    /* ===============================
       FLASH EFFECT
    ================================ */
    function screenFlash() {
        if (!flash) return;
        flash.style.transition = "none";
        flash.style.opacity = "1";
        setTimeout(() => {
            flash.style.transition = ".8s";
            flash.style.opacity = "0";
        }, 80);
    }

    /* ===============================
       MUSIC & INTRO TRIGGER
    ================================ */
    if (musicBtn) {
        musicBtn.addEventListener("click", () => {
            if (music) {
                music.play().catch(() => {});
                music.volume = .55;
            }
            musicBtn.innerHTML = "🎵 Music Playing";
            musicBtn.disabled = true;
            screenFlash();

            if (thunder) {
                thunder.volume = .45;
                thunder.play().catch(() => {});
            }
            typeWriter();
        });
    }

    /* ===============================
       ENTER BUTTON
    ================================ */
    if (enterBtn) {
        enterBtn.addEventListener("click", () => {
            if (whoosh) whoosh.play().catch(() => {});
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        });
    }

    /* ===============================
       GLOW & CARD FOLLOW
    ================================ */
    if (scene && glow && heroCard) {
        scene.addEventListener("mousemove", (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            glow.style.transform = `translate(${x * 40 - 20}px,${y * 30 - 15}px)`;
            heroCard.style.setProperty("--rx", `${(0.5 - y) * 6}deg`);
            heroCard.style.setProperty("--ry", `${(x - .5) * 6}deg`);
        });
    }

    /* ===============================
       RANDOM LIGHTNING
    ================================ */
    function lightningStrike() {
        screenFlash();
        if (thunder) {
            thunder.currentTime = 0;
            thunder.volume = 0.45;
            thunder.play().catch(() => {});
        }
    }

    setInterval(() => {
        if (Math.random() > 0.78) {
            lightningStrike();
        }
    }, 4500);

    /* ===============================
       FLOATING PARTICLES
    ================================ */
    function createParticle() {
        if (!particles) return;
        const p = document.createElement("span");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.bottom = "-10px";
        p.style.animationDuration = (6 + Math.random() * 5) + "s";
        p.style.opacity = 0.2 + Math.random() * 0.8;
        p.style.transform = `scale(${0.4 + Math.random()})`;
        particles.appendChild(p);
        setTimeout(() => p.remove(), 11000);
    }
    setInterval(createParticle, 350);

    /* ===============================
       SPIDER SWING
    ================================ */
    const spider = document.querySelector(".spiderman-entry");
    let swing = 0;
    let direction = 1;

    setInterval(() => {
        if (!spider) return;
        swing += direction * 0.5;
        if (swing >= 7) direction = -1;
        if (swing <= -7) direction = 1;
        spider.style.transform = `rotate(${swing}deg)`;
    }, 40);

    /* ===============================
       WEB SHOOT EFFECT
    ================================ */
    document.addEventListener("click", (e) => {
        if (webShoot) {
            webShoot.currentTime = 0;
            webShoot.volume = 0.45;
            webShoot.play().catch(() => {});
        }
        const web = document.createElement("div");
        web.className = "click-web";
        web.style.left = e.clientX + "px";
        web.style.top = e.clientY + "px";
        document.body.appendChild(web);
        setTimeout(() => web.remove(), 700);
    });

    /* ===============================
       HERO CARD FLOAT
    ================================ */
    let floatValue = 0;
    setInterval(() => {
        floatValue += 0.04;
        if (heroCard) {
            heroCard.style.marginTop = Math.sin(floatValue) * 8 + "px";
        }
    }, 30);

    /* ===============================
       BUTTON GLOW
    ================================ */
    document.querySelectorAll(".hero-btn").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.boxShadow = "0 0 35px rgba(0,180,255,.8)";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.boxShadow = "";
        });
    });

    /* ===============================
       CANVAS SPIDER WEB
    ================================ */
    const canvas = document.getElementById("webCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        function drawSpiderWeb() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;
            const rings = 9;
            const spokes = 16;
            const maxRadius = Math.max(canvas.width, canvas.height) * 0.55;

            ctx.strokeStyle = "rgba(255,255,255,.10)";
            ctx.lineWidth = 1;

            for (let r = 1; r <= rings; r++) {
                const radius = (maxRadius / rings) * r;
                ctx.beginPath();
                for (let i = 0; i <= spokes; i++) {
                    const angle = (Math.PI * 2 / spokes) * i;
                    const x = cx + Math.cos(angle) * radius;
                    const y = cy + Math.sin(angle) * radius;
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            for (let i = 0; i < spokes; i++) {
                const angle = (Math.PI * 2 / spokes) * i;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + Math.cos(angle) * maxRadius, cy + Math.sin(angle) * maxRadius);
                ctx.stroke();
            }
        }
        drawSpiderWeb();
    }

    /* ===============================
       MOUSE TRAIL
    ================================ */
    document.addEventListener("mousemove", e => {
        const dot = document.createElement("div");
        dot.className = "trail-dot";
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";
        document.body.appendChild(dot);
        setTimeout(() => dot.remove(), 700);
    });

    /* ===============================
       INTRO CINEMATIC
    ================================ */
    window.addEventListener("load", () => {
        if (heroCard) {
            heroCard.style.opacity = "0";
            heroCard.style.transform = "translateY(80px) scale(.9)";
            setTimeout(() => {
                heroCard.style.transition = "all 1.6s ease";
                heroCard.style.opacity = "1";
                heroCard.style.transform = "translateY(0) scale(1)";
            }, 800);
        }
    });

    /* ==========================================================
       CINEMATIC CAKE PAGE LOGIC
    ========================================================== */
    const countdownOverlay = document.getElementById("countdownOverlay");
    const countdownNumber = document.getElementById("countdownNumber");
    const cakeMainContent = document.getElementById("cakeMainContent");
    const leftCurtain = document.querySelector(".left-curtain");
    const rightCurtain = document.querySelector(".right-curtain");
    const celebrateBtn = document.getElementById("celebrateBtn");
    const blowBtn = document.getElementById("blowBtn");
    const nextBtn = document.getElementById("nextBtn");
    let cakeStarted = false;

    function startCakeIntro() {
        if (cakeStarted || !countdownOverlay) return;
        cakeStarted = true;
        countdownOverlay.style.display = "flex";
        let count = 3;
        if (countdownNumber) countdownNumber.textContent = count;

        const timer = setInterval(() => {
            count--;
            if (count > 0) {
                if (countdownNumber) {
                    countdownNumber.textContent = count;
                    countdownNumber.animate([
                        { transform: "scale(.4)", opacity: 0 },
                        { transform: "scale(1)", opacity: 1 }
                    ], { duration: 500 });
                }
            } else {
                clearInterval(timer);
                if (countdownNumber) countdownNumber.innerHTML = "🎉";
                setTimeout(openCurtains, 900);
            }
        }, 1000);
    }

    function openCurtains() {
        if (leftCurtain) leftCurtain.classList.add("open-left");
        if (rightCurtain) rightCurtain.classList.add("open-right");

        setTimeout(() => {
            if (countdownOverlay) countdownOverlay.style.display = "none";
            if (cakeMainContent) {
                cakeMainContent.classList.remove("hidden-content");
                cakeMainContent.style.opacity = "1";
                cakeMainContent.style.visibility = "visible";
                cinematicEntrance();
            }
        }, 1800);
    }

    function cinematicEntrance() {
        if (cakeMainContent) {
            cakeMainContent.animate([
                { opacity: 0, transform: "translateY(80px) scale(.92)" },
                { opacity: 1, transform: "translateY(0) scale(1)" }
            ], { duration: 1600, easing: "ease" });
        }
    }

    setTimeout(startCakeIntro, 1200);

    /* ===============================
       CANDLE & FIREWORKS
    ================================ */
    const flame = document.getElementById("flame");
    const fireworksCanvas = document.getElementById("cakeFireworksCanvas");
    const ctxFw = fireworksCanvas ? fireworksCanvas.getContext("2d") : null;

    function resizeFireworks() {
        if (!fireworksCanvas) return;
        fireworksCanvas.width = window.innerWidth;
        fireworksCanvas.height = window.innerHeight;
    }
    resizeFireworks();
    window.addEventListener("resize", resizeFireworks);

    setInterval(() => {
        if (!flame) return;
        const scale = 0.9 + Math.random() * 0.25;
        const rotate = -5 + Math.random() * 10;
        flame.style.transform = `translateX(-50%) scale(${scale}) rotate(${rotate}deg)`;
    }, 120);

    if (blowBtn) {
        blowBtn.addEventListener("click", () => {
            if (flame) {
                flame.animate([
                    { opacity: 1, transform: "translateX(-50%) scale(1)" },
                    { opacity: 0, transform: "translateX(-50%) scale(0)" }
                ], { duration: 700, fill: "forwards" });

                setTimeout(() => {
                    flame.style.display = "none";
                    launchConfetti();
                    launchFireworks();
                }, 650);
            }
        });
    }

    if (celebrateBtn) {
        celebrateBtn.addEventListener("click", () => {
            launchConfetti();
            launchFireworks();

            document.querySelectorAll(".balloon").forEach((balloon, index) => {
                setTimeout(() => {
                    balloon.classList.add("balloon-fly");
                }, index * 300);
            });

            if (music) music.play().catch(() => {});
        });
    }

    function launchConfetti() {
        document.querySelectorAll(".confetti").forEach((piece, index) => {
            piece.style.animation = "none";
            piece.offsetHeight;
            piece.style.animation = `confettiFall ${3 + Math.random() * 2}s linear`;
            piece.style.animationDelay = `${index * 0.05}s`;
        });
    }

    let fireworks = [];

    function launchFireworks() {
        if (!fireworksCanvas) return;
        for (let i = 0; i < 6; i++) {
            fireworks.push({
                x: Math.random() * fireworksCanvas.width,
                y: 120 + Math.random() * 220,
                r: 0,
                max: 50 + Math.random() * 40
            });
        }
    }

    function animateFireworks() {
        if (!ctxFw || !fireworksCanvas) return;
        ctxFw.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

        fireworks.forEach((f, index) => {
            ctxFw.beginPath();
            ctxFw.arc(f.x, f.y, f.r, 0, Math.PI * 2);
            ctxFw.strokeStyle = `hsla(${Math.random() * 360}, 100%, 70%, 1)`;
            ctxFw.lineWidth = 2;
            ctxFw.stroke();
            f.r += 2;
            if (f.r > f.max) {
                fireworks.splice(index, 1);
            }
        });
        requestAnimationFrame(animateFireworks);
    }
    animateFireworks();

    /* ===============================
       MAGIC PARTICLES & NEXT BTN
    ================================ */
    setInterval(() => {
        const sparkle = document.createElement("span");
        sparkle.className = "magic-particle";
        sparkle.style.left = Math.random() * window.innerWidth + "px";
        sparkle.style.top = window.innerHeight + "px";
        sparkle.style.animationDuration = (4 + Math.random() * 4) + "s";
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 8000);
    }, 350);

    const letterPageTarget = document.querySelector(".personal-letter-section") || document.querySelector(".letter-page");
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (cakeMainContent) {
                cakeMainContent.animate([
                    { opacity: 1, transform: "scale(1)" },
                    { opacity: 0, transform: "scale(1.12)" }
                ], { duration: 1200, easing: "ease-in-out", fill: "forwards" });
            }
            setTimeout(() => {
                if (letterPageTarget) {
                    letterPageTarget.scrollIntoView({ behavior: "smooth" });
                }
            }, 1000);
        });
    }

    /* ===============================
       PAGE 3 : BIRTHDAY LETTER TYPEWRITER
    ================================ */
    const letterTextElem = document.getElementById("letterText");
    const letterCardElem = document.querySelector(".letter-card");

    if (letterTextElem) {
        const paragraphs = [...letterTextElem.querySelectorAll("p")];
        const originalTexts = paragraphs.map(p => p.innerHTML);

        paragraphs.forEach(p => { p.innerHTML = ""; });
        let currentParagraph = 0;

        function typeParagraph() {
            if (currentParagraph >= paragraphs.length) return;
            const target = paragraphs[currentParagraph];
            const html = originalTexts[currentParagraph];
            let charIndex = 0;

            function type() {
                if (charIndex < html.length) {
                    target.innerHTML += html.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, 25);
                } else {
                    currentParagraph++;
                    setTimeout(typeParagraph, 2000);
                }
            }
            type();
        }
        setTimeout(typeParagraph, 2000);
    }

    if (letterCardElem) {
        setInterval(() => {
            letterCardElem.animate([
                { boxShadow: "0 0 25px rgba(255,215,120,.20)" },
                { boxShadow: "0 0 50px rgba(255,215,120,.35)" },
                { boxShadow: "0 0 25px rgba(255,215,120,.20)" }
            ], { duration: 4000, iterations: 1 });
        }, 5000);
    }

    /* ===============================
       ROYAL 3D ENVELOPE & REVEAL LOGIC
    ================================ */
    const envelopeWrapper = document.getElementById("envelopeWrapper");
    const letterStage = document.getElementById("letterCard") || document.querySelector(".letter-stage");

    if (envelopeWrapper && letterStage) {
        envelopeWrapper.addEventListener("click", () => {
            envelopeWrapper.classList.add("open");

            setTimeout(() => {
                letterStage.classList.add("active");
                letterStage.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "start" 
                });
            }, 600);
        });
    }

    const kissBtn = document.getElementById("kissCorner");
    const petals = document.getElementById("petalContainer");

    if (kissBtn && petals) {
        kissBtn.addEventListener("click", () => {
            for (let i = 0; i < 30; i++) {
                const p = document.createElement("div");
                p.className = "rose-petal";
                p.style.left = (85 + Math.random() * 6) + "%";
                p.style.top = (88 + Math.random() * 3) + "%";
                p.style.animationDelay = (Math.random() * 0.8) + "s";
                p.style.animationDuration = (4 + Math.random() * 2) + "s";
                petals.appendChild(p);

                setTimeout(() => {
                    p.remove();
                }, 6500);
            }
        });
    }

    const paper = document.querySelector(".letter-paper");

    if (paper) {
        paper.animate([
            { transform: "translateY(0px)" },
            { transform: "translateY(-5px)" },
            { transform: "translateY(0px)" }
        ], {
            duration: 6500,
            iterations: Infinity,
            easing: "ease-in-out"
        });
    }

    document.querySelectorAll("blockquote").forEach(q => {
        q.addEventListener("mouseenter", () => {
            q.style.transition = ".5s";
            q.style.color = "#b77b44";
            q.style.textShadow = "0 0 18px rgba(255,210,150,.45)";
        });
        q.addEventListener("mouseleave", () => {
            q.style.color = "";
            q.style.textShadow = "";
        });
    });

    console.log("🕷 All Cinematic Scripts Loaded Successfully.");
});
