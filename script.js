// add value
function toScreen(number) {
    const inputElement = document.querySelector('input');
    inputElement.value = inputElement.value + number;
    onInputFunc()
}

function toScreenOp(op) {
    const inputElement = document.querySelector('input');
    inputElement.value = inputElement.value + op;
}

function deleteFunc () {
    const inputElement = document.querySelector('input');
    const value = inputElement.value.slice(0,-1);
    inputElement.value = value;
    onInputFunc();
}



function clearScreen() {
    const inputElement = document.querySelector('input');
    inputElement.value = '';
    onInputFunc();
}
const clearBtnElement = document.querySelector('.clear-button');
clearBtnElement.addEventListener('click', clearScreen);



// this checks if the brackets are closed or note
let groupOut = true;
function parenthisisFunc () {
    if (groupOut) {
        const inputElement = document.querySelector('input');
        inputElement.value = inputElement.value + '(';
        groupOut = false;
    } else {
        const inputElement = document.querySelector('input');
        inputElement.value = inputElement.value + ')';
        groupOut = true;
    }
}
const parenthisElement = document.querySelector('.parnthesis');
parenthisElement.addEventListener('click', parenthisisFunc);


function percentageFunc() {
    window.alert('made percentage');
}
const percentageElement = document.querySelector('.percentage');
percentageElement.addEventListener('click', percentageFunc);


function onInputFunc() {
    const inputElement = document.querySelector('input');
    let value = inputElement.value;
    value = value.replace(/[^0-9\.\-\+\*\/\(\)\%]/g, '').replace(/(\..*?)\..*/g, '$1').replace('%', '/100');
    inputElement.value = value;
    const numbersElement = document.querySelector('.text');
    numbersElement.innerHTML = value;
    numbersElement.innerHTML = value !== '' ? eval(value) : ' ';
}

function equalFunc(params) {
    const textElement = document.querySelector('.text');
    const inputElement = document.querySelector('input');
    inputElement.value = textElement.innerHTML;
}
