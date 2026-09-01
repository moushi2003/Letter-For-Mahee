function openLetter() {

    const envelope = document.querySelector(".envelope");

    envelope.style.transform = "scale(1.1)";
    envelope.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "letter.html";
    }, 800);

}
