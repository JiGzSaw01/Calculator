const equals = document.querySelector('.equals');
const allBtns = document.querySelectorAll('.numBtn');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multi = document.querySelector('#multi');
const division = document.querySelector('#divide');
const display2 = document.querySelector('.display2');
const operator = document.querySelectorAll('.operator');
const clearAll = document.querySelector('.clearAll');
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
        if (display1 && display2 && previousOperation) {
            operations();
        } else {
            total = parseFloat(currentDisplay1)
        }

        clearVar(operationName);
        previousOperation = operationName;



    })

})
const clearVar = (operationV) => {
    prevDisplay2 += currentDisplay1 + ' ' + operationV;
    display1.innerText = prevDisplay2;
    display2.innerText = '';
    currentDisplay1 = '';

}

equals.addEventListener('click', (e) => {
    console.log(e)
    operations();
    clearVar();
    display2.innerText = total;
    // fix this it should goes to the upper display
    display1.innerText = '';


})

/*equalEl.addEventListener("click", () => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = "";
    dis2Num = result;
    dis1Num = "";
 });*/

const operations = () => {
    if (previousOperation === '+') {
        total = parseFloat(total) + parseFloat(currentDisplay1);
        console.log(total) // check this why it is returning NaN
    } else if (previousOperation === '-') {
        total = parseFloat(total) - parseFloat(currentDisplay1);
    } else if (previousOperation === '*') {
        total = parseFloat(total) * parseFloat(currentDisplay1);
        console.log(total)
    } else if (previousOperation === '/') {
        total = parseFloat(total) / parseFloat(currentDisplay1);
        console.log(total)
    }
}

clearAll.addEventListener('click', () => {
    currentDisplay1 = '';
    prevDisplay2 = '';
    display1.innerText = '';
    display2.innerText = '';
    currentDisplay1 = '';
    previousOperation = '';

    console.log(typeof (total))

})