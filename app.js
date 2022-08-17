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
const display = () => {
    allBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            let displayValue = e.target.value;
            document.querySelector('.display').innerText += displayValue;
        })


    })
    //make the calculator work
    //get the operators and the numbers inputted.

}
display()

const operation = (numberField1, numberField2) => {
    nu

}




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