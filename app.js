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
    });
});

operator.forEach(op => {
    op.addEventListener('click', (e) => {
        if (!lowerDisplay) return;
        haveDot = false;
        let operationName = e.target.innerText;
        if (upperDisplay && lowerDisplay && previousOperation) {
            operations();
        } else {
            total = parseFloat(lowerDisplay)
        }
        clearVar(operationName);
        previousOperation = operationName;
        console.log(previousOperation)
    });

});
const clearVar = (name = '') => {
    upperDisplay += lowerDisplay + ' ' + name;
    displayUpper.innerText = upperDisplay;
    displayLower.innerText = '';
    lowerDisplay = '';
    haveDot = false;
};

equals.addEventListener('click', (e) => {
    if (!lowerDisplay || !upperDisplay) return;
    haveDot = false;
    operations();
    clearVar();
    displayLower.innerText = total;
    lowerDisplay = total;
    upperDisplay = '';
});

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
    };
};

clearAll.addEventListener('click', () => {
    upperDisplay = '';
    lowerDisplay = '';
    displayUpper.innerText = '0';
    displayLower.innerText = '0';
    total = '';
    previousOperation = '';
});

clearPrev.addEventListener('click', (e) => {
    lowerDisplay = '';
    displayLower.innerText = '';
});

document.addEventListener('keydown', (e) => {
    if (
        e.key === '0' || e.key === '0' ||
        e.key === '1' || e.key === '2' ||
        e.key === '3' || e.key === '4' ||
        e.key === '5' || e.key === '6' ||
        e.key === '7' || e.key === '8' ||
        e.key === '9' || e.key === '.') {
        buttonClicked(e.key);
    } else if (e.key === '+' || e.key === '-' || e.key === '/' || e.key === '*') {
        clickedOperator(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
        equals.click();
    };
});

const buttonClicked = (key) => {
    allBtns.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        };
    });
};
const clickedOperator = (key) => {
    operator.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        };
    });
};