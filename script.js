/* ==========================================================
   MARVEL CINEMATIC SPIDER HERO
   PART 1
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

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
   TYPE WRITER
================================ */

const message =
"Today isn't just another birthday. It's the celebration of a truly wonderful soul. Welcome to your own little Marvel adventure... ❤️";

let index = 0;

function typeWriter(){

if(index < message.length){

typing.innerHTML += message.charAt(index);

index++;

setTimeout(typeWriter,35);

}

}

/* ===============================
   FLASH EFFECT
================================ */

function screenFlash(){

flash.style.transition="none";

flash.style.opacity="1";

setTimeout(()=>{

flash.style.transition=".8s";

flash.style.opacity="0";

},80);

}

/* ===============================
   MUSIC
================================ */

musicBtn.addEventListener("click",()=>{

music.play();

music.volume=.55;

musicBtn.innerHTML="🎵 Music Playing";

musicBtn.disabled=true;

screenFlash();

if(thunder){

thunder.volume=.45;

thunder.play();

}

typeWriter();

});

/* ===============================
   ENTER BUTTON
================================ */

if(enterBtn){

enterBtn.addEventListener("click",()=>{

whoosh.play();

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

});

}

/* ===============================
   GLOW FOLLOW
================================ */

scene.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

glow.style.transform=

`translate(${x*40-20}px,${y*30-15}px)`;

heroCard.style.transform=

`rotateY(${(x-.5)*6}deg)
 rotateX(${(0.5-y)*6}deg)`;

});

  /* ==========================================================
   MARVEL CINEMATIC SPIDER HERO
   PART 2
========================================================== */

/* ===============================
   RANDOM LIGHTNING
================================ */

function lightningStrike() {

    screenFlash();

    if (thunder) {

        thunder.currentTime = 0;
        thunder.volume = 0.45;
        thunder.play();

    }

}

setInterval(() => {

    const chance = Math.random();

    if (chance > 0.78) {

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

    p.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    p.style.opacity =
        0.2 + Math.random() * 0.8;

    p.style.transform =
        `scale(${0.4 + Math.random()})`;

    particles.appendChild(p);

    setTimeout(() => {

        p.remove();

    }, 11000);

}

setInterval(createParticle, 350);

/* ===============================
   SPIDER SWING
================================ */

const spider =
document.querySelector(".spiderman-entry");

let swing = 0;
let direction = 1;

setInterval(() => {

    if (!spider) return;

    swing += direction * 0.5;

    if (swing >= 7) direction = -1;

    if (swing <= -7) direction = 1;

    spider.style.transform =
        `rotate(${swing}deg)`;

}, 40);

/* ===============================
   WEB SHOOT EFFECT
================================ */

document.addEventListener("click", (e) => {

    if (webShoot) {

        webShoot.currentTime = 0;

        webShoot.volume = 0.45;

        webShoot.play();

    }

    const web = document.createElement("div");

    web.className = "click-web";

    web.style.left = e.clientX + "px";

    web.style.top = e.clientY + "px";

    document.body.appendChild(web);

    setTimeout(() => {

        web.remove();

    }, 700);

});

/* ===============================
   HERO CARD FLOAT
================================ */

let floatValue = 0;

setInterval(() => {

    floatValue += 0.04;

    if (heroCard) {

        heroCard.style.marginTop =
            Math.sin(floatValue) * 8 + "px";

    }

}, 30);

/* ===============================
   BUTTON GLOW
================================ */

const heroButtons =
document.querySelectorAll(".hero-btn");

heroButtons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.boxShadow =
            "0 0 35px rgba(0,180,255,.8)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.boxShadow = "";

    });

});

  /* ==========================================================
   MARVEL CINEMATIC SPIDER HERO
   PART 3
   Canvas Web + Mouse Trail + Intro
========================================================== */

/* ===============================
   CANVAS SPIDER WEB
================================ */

const canvas = document.getElementById("webCanvas");
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

    /* Rings */

    for (let r = 1; r <= rings; r++) {

        const radius = (maxRadius / rings) * r;

        ctx.beginPath();

        for (let i = 0; i <= spokes; i++) {

            const angle = (Math.PI * 2 / spokes) * i;

            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;

            if (i === 0)
                ctx.moveTo(x, y);
            else
                ctx.lineTo(x, y);

        }

        ctx.stroke();

    }

    /* Spokes */

    for (let i = 0; i < spokes; i++) {

        const angle = (Math.PI * 2 / spokes) * i;

        ctx.beginPath();

        ctx.moveTo(cx, cy);

        ctx.lineTo(
            cx + Math.cos(angle) * maxRadius,
            cy + Math.sin(angle) * maxRadius
        );

        ctx.stroke();

    }

}

drawSpiderWeb();

/* ===============================
   MOUSE TRAIL
================================ */

document.addEventListener("mousemove", e => {

    const dot = document.createElement("div");

    dot.className = "trail-dot";

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    document.body.appendChild(dot);

    setTimeout(() => {

        dot.remove();

    }, 700);

});

/* ===============================
   INTRO CINEMATIC
================================ */

window.addEventListener("load", () => {

    heroCard.style.opacity = "0";
    heroCard.style.transform = "translateY(80px) scale(.9)";

    setTimeout(() => {

        heroCard.style.transition =
            "all 1.6s ease";

        heroCard.style.opacity = "1";
        heroCard.style.transform =
            "translateY(0) scale(1)";

    }, 800);

});

/* ===============================
   AUTO TITLE GLOW
================================ */

setInterval(() => {

    const title =
        document.querySelector(".glow-title");

    if (!title) return;

    title.style.filter =
        "drop-shadow(0 0 30px #5bbdff)";

    setTimeout(() => {

        title.style.filter = "";

    }, 1200);

}, 5000);

/* ===============================
   PARALLAX EFFECT
================================ */

scene.addEventListener("mousemove", e => {

    const x =
        (e.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (e.clientY / window.innerHeight - 0.5) * 20;

    canvas.style.transform =
        `translate(${x}px,${y}px)`;

});

/* ===============================
   READY
================================ */

console.log("🕷 Marvel Spider Hero Loaded Successfully");

   /*==================================================
      CINEMATIC CAKE PAGE — PART 1
      Curtains • Countdown • Intro
==================================================*/

const cakePage = document.getElementById("cakePage");

const countdownOverlay =
document.getElementById("countdownOverlay");

const countdownNumber =
document.getElementById("countdownNumber");

const cakeMainContent =
document.getElementById("cakeMainContent");

const leftCurtain =
document.querySelector(".left-curtain");

const rightCurtain =
document.querySelector(".right-curtain");

const celebrateBtn =
document.getElementById("celebrateBtn");

const blowBtn =
document.getElementById("blowBtn");

const nextBtn =
document.getElementById("nextBtn");

let cakeStarted = false;


/*====================================
      START CINEMATIC INTRO
====================================*/

function startCakeIntro(){

    if(cakeStarted) return;

    cakeStarted = true;

    countdownOverlay.style.display = "flex";

    let count = 3;

    countdownNumber.textContent = count;

    const timer = setInterval(()=>{

        count--;

        if(count > 0){

            countdownNumber.textContent = count;

            countdownNumber.animate([

                {
                    transform:"scale(.4)",
                    opacity:0
                },

                {
                    transform:"scale(1)",
                    opacity:1
                }

            ],{

                duration:500

            });

        }

        else{

            clearInterval(timer);

            countdownNumber.innerHTML = "🎉";

            setTimeout(openCurtains,900);

        }

    },1000);

}


/*====================================
      OPEN CURTAINS
====================================*/

function openCurtains(){

    leftCurtain.classList.add("open-left");

    rightCurtain.classList.add("open-right");

    setTimeout(()=>{

        countdownOverlay.style.display="none";

        cakeMainContent.classList.remove("hidden-content");

        cakeMainContent.style.opacity="1";

        cakeMainContent.style.visibility="visible";

        cinematicEntrance();

    },1800);

}


/*====================================
     MAIN ENTRANCE ANIMATION
====================================*/

function cinematicEntrance(){

    cakeMainContent.animate([

        {

            opacity:0,

            transform:"translateY(80px) scale(.92)"

        },

        {

            opacity:1,

            transform:"translateY(0) scale(1)"

        }

    ],{

        duration:1600,

        easing:"ease"

    });

}


/*====================================
      AUTO START WHEN PAGE OPENS
====================================*/

window.addEventListener("load",()=>{

    setTimeout(startCakeIntro,1200);

});

   /*==================================================
      CINEMATIC CAKE PAGE — PART 2
      Candle • Blow • Celebrate
==================================================*/

const flame = document.getElementById("flame");
const fireworksCanvas = document.getElementById("cakeFireworksCanvas");
const ctx = fireworksCanvas.getContext("2d");

/*====================================
        CANVAS RESIZE
====================================*/

function resizeFireworks(){

    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;

}

resizeFireworks();

window.addEventListener("resize", resizeFireworks);


/*====================================
        CANDLE FLICKER
====================================*/

setInterval(()=>{

    if(!flame) return;

    const scale = 0.9 + Math.random()*0.25;
    const rotate = -5 + Math.random()*10;

    flame.style.transform =
    `translateX(-50%) scale(${scale}) rotate(${rotate}deg)`;

},120);


/*====================================
        BLOW THE CANDLE
====================================*/

blowBtn.addEventListener("click",()=>{

    flame.animate([

        {
            opacity:1,
            transform:"translateX(-50%) scale(1)"
        },

        {
            opacity:0,
            transform:"translateX(-50%) scale(0)"
        }

    ],{

        duration:700,
        fill:"forwards"

    });

    setTimeout(()=>{

        flame.style.display="none";

        launchConfetti();

        launchFireworks();

    },650);

});


/*====================================
        CELEBRATE BUTTON
====================================*/

celebrateBtn.addEventListener("click",()=>{

    launchConfetti();

    launchFireworks();

});


/*====================================
        CONFETTI
====================================*/

function launchConfetti(){

    document
    .querySelectorAll(".confetti")
    .forEach((piece,index)=>{

        piece.style.animation="none";

        piece.offsetHeight;

        piece.style.animation=
        `confettiFall ${3+Math.random()*2}s linear`;

        piece.style.animationDelay=
        `${index*0.05}s`;

    });

}


/*====================================
        SIMPLE FIREWORKS
====================================*/

let fireworks=[];

function launchFireworks(){

    for(let i=0;i<6;i++){

        fireworks.push({

            x:Math.random()*fireworksCanvas.width,

            y:120+Math.random()*220,

            r:0,

            max:50+Math.random()*40

        });

    }

}

function animateFireworks(){

    ctx.clearRect(
        0,
        0,
        fireworksCanvas.width,
        fireworksCanvas.height
    );

    fireworks.forEach((f,index)=>{

        ctx.beginPath();

        ctx.arc(f.x,f.y,f.r,0,Math.PI*2);

        ctx.strokeStyle=`hsla(${Math.random()*360},
        100%,70%,1)`;

        ctx.lineWidth=2;

        ctx.stroke();

        f.r+=2;

        if(f.r>f.max){

            fireworks.splice(index,1);

        }

    });

    requestAnimationFrame(
        animateFireworks
    );

}

animateFireworks();

   /*==================================================
      CINEMATIC CAKE PAGE — PART 3 (FINAL)
      Music • Camera • Next Transition
==================================================*/

const music = document.getElementById("music");
const letterPage = document.querySelector(".letter-page");

/*====================================
      PLAY BIRTHDAY MUSIC
====================================*/

if(celebrateBtn){

    celebrateBtn.addEventListener("click",()=>{

        if(music){

            music.play().catch(()=>{});

        }

    });

}


/*====================================
      MAGIC PARTICLES
====================================*/

function createSparkle(){

    const sparkle = document.createElement("span");

    sparkle.className = "magic-particle";

    sparkle.style.left =
    Math.random()*window.innerWidth+"px";

    sparkle.style.top =
    window.innerHeight+"px";

    sparkle.style.animationDuration =
    (4+Math.random()*4)+"s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },8000);

}

setInterval(createSparkle,350);


/*====================================
      NEXT BUTTON
====================================*/

nextBtn.addEventListener("click",()=>{

    cakeMainContent.animate([

        {
            opacity:1,
            transform:"scale(1)"
        },

        {
            opacity:0,
            transform:"scale(1.12)"
        }

    ],{

        duration:1200,
        easing:"ease-in-out",
        fill:"forwards"

    });

    setTimeout(()=>{

        letterPage.scrollIntoView({

            behavior:"smooth"

        });

    },1000);

});


/*====================================
      CINEMATIC CAMERA
====================================*/

window.addEventListener("scroll",()=>{

    const value =
    window.scrollY * 0.06;

    document.querySelector(".cake-page")
    .style.backgroundPositionY =
    value+"px";

});


/*====================================
      SOFT GLOW PULSE
====================================*/

setInterval(()=>{

    const glow =
    document.querySelector(".cake-glow");

    if(!glow) return;

    glow.animate([

        {
            opacity:.5,
            transform:"scale(1)"
        },

        {
            opacity:1,
            transform:"scale(1.15)"
        },

        {
            opacity:.5,
            transform:"scale(1)"
        }

    ],{

        duration:3000

    });

},3000);


/*====================================
      END OF CAKE PAGE
====================================*/

console.log(
"🎂 Cinematic Cake Page Loaded Successfully."
);

/* ===========================
   PAGE 3 : BIRTHDAY LETTER
=========================== */

const letterPage = document.querySelector(".letter-page");
const letterCard = document.querySelector(".letter-card");
const letterParagraphs = document.querySelectorAll(".letter-text p");

/* Scroll Reveal */

const letterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            letterCard.classList.add("letter-active");

            letterParagraphs.forEach((paragraph, index) => {

                setTimeout(() => {

                    paragraph.style.opacity = "1";
                    paragraph.style.transform = "translateY(0)";

                }, index * 450);

            });

        }

    });

}, {
    threshold: 0.35
});

letterObserver.observe(letterPage);


/* Mouse Tilt Effect */

letterCard.addEventListener("mousemove", (e) => {

    const rect = letterCard.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    letterCard.style.transform =
        `perspective(1200px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.01)`;

});

letterCard.addEventListener("mouseleave", () => {

    letterCard.style.transform =
        "perspective(1200px) rotateX(2deg) rotateY(0deg) scale(1)";
});


/* Floating Paper Effect */

let offset = 0;

function paperFloat() {

    offset += 0.02;

    letterCard.style.marginTop =
        `${Math.sin(offset) * 5}px`;

    requestAnimationFrame(paperFloat);
}

paperFloat();  

/* ===========================
   PAGE 3 : TYPEWRITER EFFECT
=========================== */

const letterText = document.getElementById("letterText");

if (letterText) {

    const paragraphs = [...letterText.querySelectorAll("p")];
    const originalTexts = paragraphs.map(p => p.innerHTML);

    paragraphs.forEach(p => p.innerHTML = "");

    let currentParagraph = 0;

    function typeParagraph() {

        if (currentParagraph >= paragraphs.length) return;

        const target = paragraphs[currentParagraph];
        const html = originalTexts[currentParagraph];

        let index = 0;

        function type() {

            if (index <= html.length) {

                target.innerHTML = html.substring(0, index);

                index++;

                setTimeout(type, 22);

            } else {

                currentParagraph++;

                setTimeout(typeParagraph, 400);

            }

        }

        type();
    }

    /* Start typing after a short delay */
    setTimeout(typeParagraph, 1000);

}


/* ===========================
   SOFT GLOW EFFECT
=========================== */

if (letterCard) {

    setInterval(() => {

        letterCard.animate(
            [
                {
                    boxShadow: "0 0 25px rgba(255,215,120,.20)"
                },
                {
                    boxShadow: "0 0 55px rgba(255,215,120,.45)"
                },
                {
                    boxShadow: "0 0 25px rgba(255,215,120,.20)"
                }
            ],
            {
                duration: 3500,
                iterations: 1
            }
        );

    }, 3500);

}
