// ACCESS DOM ELEMENTS
const txtNum = document.getElementById("txtNum");
const btnStart = document.getElementById("btnStart");
const btnGuess = document.getElementById("btnGuess");
const txtResult = document.getElementById("txtResult");

// GLOBAL VARIABLES
let randomNumber = 0;
const minRandomNumber = 20;
const maxRandomNumber = 80;
const totalShot = 10;

// FUNCTION DEFINITIONS
const startGame = () => {
    randomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    txtNum.removeAttribute("disabled");
    txtNum.value = "";
    txtNum.focus();
    btnGuess.classList.remove("d-none");
    btnStart.innerText = "YENİDEN BAŞLAT";
    txtResult.innerText = "";
};

const resetGame = () => { };


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;