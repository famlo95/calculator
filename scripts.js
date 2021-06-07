const screen = document.querySelector('.solution');
const numbersPanel = document.querySelector('.clear-numbers-container');
const operators = document.querySelector('.operators-container');
const equalTo = document.querySelector('#equalTo');
const eraser = document.querySelector('#erase-btn');
const cleaner = document.querySelector('#clear-btn');
let digit;
let number;
let operator = '';
let firstNumber = 0;
let numbers = [];
let total = 0;
let numberAdded;

function showNumber() {
    number = parseInt(numbers.join(''));
    screen.innerText = number;
}

function clearMemory() {
    firstNumber = number = 0;
    screen.innerText = number;
}

cleaner.addEventListener('click', function () {
    numbers.splice(0);
    clearMemory();
});

eraser.addEventListener('click', function () {
    block_1: {
        numbers.pop();
        showNumber();
        if (numbers.length === 0) {
            clearMemory();
            break block_1;
        }
    }
});

numbersPanel.addEventListener('click', function (event) {
    if(event.target.className === 'calc-btn height number') {
        digit = event.target.innerText;
        numbers.push(digit);
        showNumber();
    }
});

operators.addEventListener('click', function (event) {
    if (event.target.className === 'op-btn height') {
        operator = event.target.innerText;
        eraser.disabled = true;
        firstNumber = number;
        numbers.splice(0);
    }
});

equalTo.addEventListener('click', function () {
    if(operator === '+'){
        total = firstNumber + number;
        number = total;
        numbers = Array.from(String(number), Number);
        showNumber();
    } 
    else if (operator === 'x') {
        total = firstNumber * number;
        number = total;
        numbers = Array.from(String(number), Number);
        showNumber();
    }
    else if (operator === '/') {
        total = firstNumber / number;
        number = total;
        numbers = Array.from(String(number), Number);
        showNumber();
    }
    else {
        total = firstNumber - number;
        number = total;
        numbers = Array.from(String(number), Number);
        showNumber();
    }
    eraser.enabled = true;
});