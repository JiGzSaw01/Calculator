const equals = document.querySelector('.equals');
const allBtns = document.querySelectorAll('.numBtn');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multi = document.querySelector('#multi');
const division = document.querySelector('#divide');
const displayLower = document.querySelector('.display2');
const operator = document.querySelectorAll('.operator');
const clearAll = document.querySelector('.clearAll');
let displayUpper = document.querySelector('.display1');
const clearPrev = document.querySelector('.clearPrev');

let upperDisplay = '';
let lowerDisplay = '';
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
        lowerDisplay += e.target.innerText;
        displayLower.innerText = lowerDisplay;
    })
})

operator.forEach(op => {
    op.addEventListener('click', (e) => {
        if (!lowerDisplay) return;
        haveDot = false;

        let operationName = e.target.innerText;
        //operations();
        if (upperDisplay && lowerDisplay && previousOperation) {
            operations();

        } else {
            total = parseFloat(lowerDisplay)
        }

        clearVar(operationName);
        previousOperation = operationName;
        console.log(previousOperation)




    })

})
const clearVar = (name = '') => {
    upperDisplay += lowerDisplay + ' ' + name;
    displayUpper.innerText = upperDisplay;
    displayLower.innerText = '';
    lowerDisplay = '';
    haveDot = false;
    console.log(upperDisplay)

}

equals.addEventListener('click', (e) => {
    //console.log(e)
    if (!lowerDisplay || !upperDisplay) return;
    haveDot = false;
    operations();
    clearVar();
    displayLower.innerText = total;
    lowerDisplay = total;
    upperDisplay = '';
    console.log(displayUpper.innerText)


})

//to work on
//styling
// clear previous inputted number

const operations = () => {
    if (previousOperation === '+') {
        total = parseFloat(total) + parseFloat(lowerDisplay);
        console.log(total) // check this why it is returning NaN
    } else if (previousOperation === '-') {
        total = parseFloat(total) - parseFloat(lowerDisplay);
    } else if (previousOperation === '*') {
        total = parseFloat(total) * parseFloat(lowerDisplay);
        console.log(total)
    } else if (previousOperation === '/') {
        total = parseFloat(total) / parseFloat(lowerDisplay);
        console.log(total)
    }
}

clearAll.addEventListener('click', () => {
    upperDisplay = '';
    lowerDisplay = '';
    displayUpper.innerText = '';
    displayLower.innerText = '';
    total = '';
    previousOperation = '';

    console.log(upperDisplay)

})

clearPrev.addEventListener('click', (e) => {
    console.log(e)
    lowerDisplay = '';
    displayLower.innerText = '';
})

//things to fix
//clear all not clearing the upper display
// operation does not clearing the upper display and then adding the previous operand.