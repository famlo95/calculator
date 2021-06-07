const screen = document.querySelector('.solution');
const eraser = document.querySelector('#erase-btn');
const cleaner = document.querySelector('#clear-btn');
const numbers = document.querySelector('.clear-numbers-container');
const operators = document.querySelector('.operators-container');
const equalTo = document.querySelector('#equalTo');
let digit;
let num;
let operator = '';
let firstNum = 0;
let nums = [];
let total = 0;

function showNumber() {
    num = parseInt(nums.join(''));
    screen.innerText = num;
}

function clearMemory() {
    firstNum = num = 0;
    screen.innerText = num;
    console.log(`empty ${num}`);
}

cleaner.addEventListener('click', function () {
    nums.splice(0);
    clearMemory();
});

eraser.addEventListener('click', function () {
    block_1: {
        nums.pop();
        showNumber();
        if (nums.length === 0) {
            clearMemory();
            break block_1;
        }
    }
});

numbers.addEventListener('click', function (event) {
    if(event.target.className === 'calc-btn height number') {
        digit = event.target.innerText;
        nums.push(digit);
        showNumber();
    }
});

operators.addEventListener('click', function (event) {
    if (event.target.className === 'op-btn height') {
        operator = event.target.innerText;
        eraser.disabled = true;
        firstNum = num;
        nums.splice(0);
    }
});

equalTo.addEventListener('click', function () {
    if(operator === '+'){
        total = firstNum + num;
        num = total;
        nums = Array.from(String(num), Number);
        showNumber();
    } 
    else if (operator === 'x') {
        total = firstNum * num;
        num = total;
        nums = Array.from(String(num), Number);
        showNumber();
    }
    else if (operator === '/') {
        total = firstNum / num;
        num = total;
        nums = Array.from(String(num), Number);
        showNumber();
    }
    else {
        total = firstNum - num;
        num = total;
        nums = Array.from(String(num), Number);
        showNumber();
    }
    eraser.disabled = false;
});