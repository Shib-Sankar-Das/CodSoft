let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Function to update input and string
function updateInputAndString(newValue) {
    string = newValue;
    input.value = string;
}

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleButtonClick(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    const keyPressed = e.key;

    // Check if the pressed key is a number, operator, or Enter
    const isNumber = /[0-9]/.test(keyPressed);
    const isOperator = /[+\-*/]/.test(keyPressed);
    const isEqual = (keyPressed === '=' || e.code === 'Enter');
    const isDelete = (keyPressed === 'Delete' || keyPressed === 'Backspace');

    if (isNumber || isOperator) {
        handleButtonClick(keyPressed);
    } else if (isEqual) {
        updateInputAndString(eval(string));
    } else if (isDelete) {
        updateInputAndString(string.slice(0, -1));
    }
});

function handleButtonClick(buttonValue) {
    if (buttonValue === '=') {
        updateInputAndString(eval(string));
    } else if (buttonValue === 'AC') {
        updateInputAndString("");
    } else if (buttonValue === 'DEL') {
        updateInputAndString(string.slice(0, -1));
    } else {
        updateInputAndString(string + buttonValue);
    }
}
