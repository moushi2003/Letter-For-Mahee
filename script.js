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
