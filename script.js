let score = 0;
let timeLeft = 5;
let timerId;
let maxTime = 5;
let x = (window.innerWidth / 2 - 25);
let y = (window.innerHeight / 2 - 25);

const target = document.getElementById('target');
const greenTarget = document.getElementById('green-target')
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const progress = document.getElementById('progress');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    maxTime = 5
    timeLeft = maxTime;
    updateDisplay();
    updateProgressBar();
    moveTarget();
    timerId = setInterval(countDown, 100);
    startButton.style.display = 'none';
    target.style.display = 'block';
    greenTarget.style.display = 'block';
}

function moveTarget() {
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    x = Math.random() * (window.innerWidth - 50);
    y = Math.random() * (window.innerHeight - 50);
    greenTarget.style.left = `${x}px`;
    greenTarget.style.top = `${y}px`;
}

target.addEventListener('click', () => {
    score++;
    updateDisplay();
    clearInterval(timerId);
    maxTime = (maxTime * 0.95);
    timeLeft = maxTime;
    updateDisplay();
    updateProgressBar();
    moveTarget();
    timerId = setInterval(countDown, 100);
});

function countDown() {
    timeLeft = (timeLeft - 0.1);
    updateDisplay();
    updateProgressBar();
    if (timeLeft <= 0) {
        clearInterval(timerId);
        alert(`Temps écoulé ! Votre score est : ${score}`);
        startButton.style.display = 'block';
        target.style.display = 'none';
        greenTarget.style.display = 'none';
        x = window.innerWidth / 2 - 25;
        y = window.innerHeight / 2 - 25;
        greenTarget.style.left = `${x}px`;
        greenTarget.style.top = `${y}px`;
    }
}

function updateDisplay() {
    timerDisplay.textContent = `Temps: ${timeLeft.toFixed(1)}`;
    scoreDisplay.textContent = `Score: ${score}`;
}

function updateProgressBar() {
    const percentage = (timeLeft / maxTime) * 100;
    progress.style.width = `${percentage}%`; 
}