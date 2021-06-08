"use strict";

var screen = document.querySelector('.solution');
var numbersPanel = document.querySelector('.clear-numbers-container');
var operators = document.querySelector('.operators-container');
var equalTo = document.querySelector('#equalTo');
var eraser = document.querySelector('#erase-btn');
var cleaner = document.querySelector('#clear-btn');
var digit;
var number;
var operator = '';
var firstNumber = 0;
var numbers = [];
var total = 0; // let counter = 1;

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
  if (event.target.className === 'calc-btn height number') {
    digit = event.target.innerText;
    numbers.push(digit);
    showNumber();
  }
});
operators.addEventListener('click', function (event) {
  if (event.target.className === 'op-btn height') {
    operator = event.target.innerText; // eraser.disabled = true;

    firstNumber = number;
    numbers.splice(0);
  }
});
equalTo.addEventListener('click', function () {
  // eraser.enabled = true;
  if (operator === '+') {
    total = firstNumber + number;
    number = total;
    numbers = Array.from(String(number), Number);
    showNumber();
  } else if (operator === 'x') {
    total = firstNumber * number;
    number = total;
    numbers = Array.from(String(number), Number);
    showNumber();
  } else if (operator === '/') {
    total = firstNumber / number;
    number = total;
    numbers = Array.from(String(number), Number);
    showNumber();
  } else if (operator === '-') {
    total = firstNumber - number;
    number = total;
    numbers = Array.from(String(number), Number);
    showNumber();
  }
});