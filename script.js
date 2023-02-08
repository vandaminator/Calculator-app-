// add value
function toScreen(number) {
    window.alert('number pressed was ' + number)
}



function clearScreen() {
    window.alert('screen cleared')
}
const clearBtnElement = document.querySelector('.clear-button');
clearBtnElement.addEventListener('click', clearScreen);



// this checks if the brackets are closed or note
let groupOut = true;
function parenthisisFunc () {
    if (groupOut) {
        window.alert('we are in');
        groupOut = false;
    } else {
        window.alert('we are out');
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
