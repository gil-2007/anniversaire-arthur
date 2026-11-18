
/* =========================================
   1. NAVIGATION ENTRE LES ÉCRANS
========================================= */

const homeScreen = document.getElementById("home");
const celebrationScreen = document.getElementById("celebration");
const letterScreen = document.getElementById("letter");

const enterButton = document.getElementById("enterButton");
const letterButton = document.getElementById("letterButton");
const backButton = document.getElementById("backButton");

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach((element) => {
        element.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

enterButton.addEventListener("click", () => {
    showScreen(celebrationScreen);
    createConfetti();
});

letterButton.addEventListener("click", () => {
    showScreen(letterScreen);
});

backButton.addEventListener("click", () => {
    showScreen(celebrationScreen);
});


/* =========================================
   2. COMPTE À REBOURS
========================================= */

const birthdayDate = new Date(2026, 10, 20, 0, 0, 0).getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const countdownTitle = document.querySelector(".countdown-title");

function updateCountdown() {
    const now = new Date().getTime();
    const difference = birthdayDate - now;

    if (difference <= 0) {
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        countdownTitle.textContent = "C'EST LE GRAND JOUR ! JOYEUX ANNIVERSAIRE ARTHUR !";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* =========================================
   3. CIEL ÉTOILÉ
========================================= */

const cosmicScene = document.querySelector(".cosmic-scene");

for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");

    star.className = "cosmic-star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = 1 + Math.random() * 2;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay = Math.random() * 5 + "s";
    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    cosmicScene.appendChild(star);
}


/* =========================================
   4. SOUFFLER LES BOUGIES
========================================= */

const blowButton = document.getElementById("blowButton");
const wishMessage = document.getElementById("wishMessage");

let candlesBlown = false;

blowButton.addEventListener("click", () => {

    if (candlesBlown) {
        wishMessage.textContent =
            "Ton prochain chapitre sera encore plus beau. ✨";
        return;
    }

    candlesBlown = true;

    const flames = document.querySelectorAll(".flame");

    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.display = "none";
        }, index * 350);
    });

    wishMessage.textContent =
        "Vœu envoyé dans l'univers... Que la vie t'offre le meilleur ! ❤️";

    blowButton.textContent = "✦ TON VŒU EST LANCÉ !";

    createConfetti();
});


/* =========================================
   5. OUVERTURE DE L'ENVELOPPE
========================================= */

const envelopeContainer = document.getElementById("envelopeContainer");
const envelopeHint = document.getElementById("envelopeHint");
const fullLetter = document.getElementById("fullLetter");

let envelopeOpened = false;

envelopeContainer.addEventListener("click", () => {

    if (envelopeOpened) {
        return;
    }

    envelopeOpened = true;

    envelopeContainer.classList.add("opened");

    envelopeHint.textContent =
        "Un message sincère, écrit spécialement pour toi...";

    setTimeout(() => {
        fullLetter.classList.add("visible");

        fullLetter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        createConfetti();
    }, 1000);
});


/* =========================================
   6. CONFETTIS
========================================= */

function createConfetti() {

    const numberOfConfetti = 70;

    const colors = [
        "#c9a96e",
        "#f0d9a5",
        "#ffffff",
        "#8c6b45",
        "#536b9c"
    ];

    for (let i = 0; i < numberOfConfetti; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDelay = Math.random() * 2 + "s";
        confetti.style.animationDuration = (3 + Math.random() * 3) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 7000);
    }
}


/* =========================================
   7. PETIT EFFET SUR LE GÂTEAU
========================================= */

const cake = document.querySelector(".cake");

cake.addEventListener("mousemove", (event) => {

    if (window.innerWidth <= 600) {
        return;
    }

    const rect = cake.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    cake.style.transform =
        `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

cake.addEventListener("mouseleave", () => {
    cake.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
});


/* =========================================
   8. MESSAGE DANS LA CONSOLE
========================================= */

console.log("Un univers entier a été créé pour Arthur. ❤️");
console.log("Joyeux anniversaire en avance !");
