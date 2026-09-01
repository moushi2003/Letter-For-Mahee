function openLetter(){

    const env = document.querySelector(".envelope");

    const seal = document.querySelector(".wax-seal");

    env.classList.add("open");

    seal.style.transform =
    "translate(-50%,-50%) scale(1.3)";

    setTimeout(()=>{

        window.location.href="letter.html";

    },1200);

}
