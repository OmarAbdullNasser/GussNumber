'use strict';
let randamNum = Math.trunc(Math.random() * 20) + 1;

let checked = document.querySelector('#checked');
let again = document.querySelector('#again');
let massage = document.querySelector('.message');
let number = document.querySelector('.qq');
let scor = 20;
let highscor = 0;


checked.addEventListener('click', function() {
    let inputNum = Number(document.querySelector('.gussing').value);
    if (!inputNum) {
        massage.textContent = '⛔ No Number'
    } else if (inputNum === randamNum) {
        massage.textContent = '🎉 correct Number ! '
        document.querySelector('body').style.backgroundColor = "#60b347";
        number.style.width = "13%";
        number.textContent = randamNum;
        if (scor > highscor) {
            highscor = scor;
            document.querySelector('.highscore').textContent = highscor
        }

    } else if (inputNum !== randamNum) {
        if (scor > 1) {
            massage.textContent = inputNum < randamNum ? '📉 too low!' : '📈 too high!';
            scor--;
            document.querySelector('.score').textContent = scor
        } else {
            massage.textContent = '🤣 you lose the game!';
            document.querySelector('.score').textContent = 0
        }
    }
})

again.addEventListener('click', function() {
    randamNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = "#222";
    massage.textContent = 'Start guessing...';
    number.textContent = '?';
    scor = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.gussing').value = null;
    number.style.width = "10%";
});