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
const equals = document.getElementById('#equal');
const allBtns = document.querySelectorAll('.numBtn');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multi = document.querySelector('#multi');
const division = document.querySelector('#divide');
const display2 = document.querySelector('.display2');
const operator = document.querySelectorAll('.operator');
let display1 = document.querySelector('.display1');
let currentDisplay1 = '';
let prevDisplay2 = '';
let haveDot = false;
let previousOperation = '';
let total = null;

allBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {

        if (e.target.innerText === "." && haveDot) {
            return;
        } else if (e.target.innerText === "." && haveDot == false) {
            haveDot = true
        }
        currentDisplay1 += e.target.innerText;
        display2.innerText = currentDisplay1;
    })
})

operator.forEach(op => {
    op.addEventListener('click', (e) => {


        let operationName = e.target.innerText;
        if (display1 && display2) {
            operations();
        } else {
            total = parseFloat(display2)
        }

        clearVar(operationName);
        previousOperation = operationName;
        console.log(total)


    })

})

const clearVar = (operationV) => {
    prevDisplay2 += currentDisplay1 + ' ' + operationV;
    display1.innerText = prevDisplay2;
    display2.innerText = '';
    currentDisplay1 = '';
    console.log(total)
}


//to do tomorrow
// make the the Nan result work


const operations = () => {
    if (previousOperation === '+') {
        total = parseFloat(total) + parseFloat(display2);
    }
}