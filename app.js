const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const num4 = document.querySelector('#num4');
const num5 = document.querySelector('#num5');
const num6 = document.querySelector('#num6');
const num7 = document.querySelector('#num7');
const num8 = document.querySelector('#num8');
const num9 = document.querySelector('#num9');
const num0 = document.querySelector('#num0');
const equals = document.querySelector('#equal');
const allBtns = document.querySelectorAll('.numBtn');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multi = document.querySelector('#multi');
const division = document.querySelector('#divide');
const displayValue = document.querySelector('.display');
const operator = document.querySelectorAll('.operator');

function display() {
    allBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            displayValue.innerText += e.target.innerText;
        })
    })
}
display()

//to do tomorrow
// once the operator is clicked the value will go to the prev-display
// then make the calculation work


const add = (ad1, ad2) => {

    return ad1 + ad2;
}
const substract = (sub1, sub2) => {

    return sub1 - sub2;
}
const multiply = (mul1, mul2) => {

    return mul1 * mul2;
}
const divide = (div1, div2) => {

    return div1 / div2;
}
const operate = (a, b) => {

    // if textContent is + then add();
    //if textContent is - then substract();
    //if textContent is * then multiply();
    //if text content is / then divide();



}