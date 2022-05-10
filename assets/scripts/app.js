let currentResult = 0;

function getUserInputNumber() {
    return parseInt(userInput.value);
}

function sumValues() {
    const enteredValue = getUserInputNumber();
    const calcDescription = `${currentResult} + ${enteredValue}`;
    currentResult += enteredValue;
    outputResult(currentResult, calcDescription);
}

function subtractValues() {
    const enteredValue = getUserInputNumber();
    const calcDescription = `${currentResult} - ${enteredValue}`;
    currentResult -= enteredValue;
    outputResult(currentResult, calcDescription);
}

function multiplyValues() {
    const enteredValue = getUserInputNumber();
    if (currentResult == 0) {
        currentResult = 1;
    }
    const calcDescription = `${currentResult} * ${enteredValue}`;
    currentResult *= enteredValue;
    outputResult(currentResult, calcDescription);
}

function divideValues() {
    const enteredValue = getUserInputNumber();
    const calcDescription = `${currentResult} / ${enteredValue}`;
    currentResult /= enteredValue;
    outputResult(currentResult, calcDescription);
}

function cleanValues() {
    currentResult = 0;
    outputResult(currentResult, 0);
}

addBtn.addEventListener('click', sumValues);
subtractBtn.addEventListener('click', subtractValues);
multiplyBtn.addEventListener('click', multiplyValues);
divideBtn.addEventListener('click', divideValues);
cleanBtn.addEventListener('click', cleanValues);

