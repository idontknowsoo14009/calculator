const display = document.getElementById('display'); 
let firstValue = null; 
let operator = null; 
let waitingforSecondoperator = false; 

function updateDisplay(value) {
    display.value = value;
  }
  
  function handleNumber(number) {
    if (waitingForSecondValue) {
      updateDisplay(number);
      waitingForSecondValue = false;
    } else {
      const currentValue = display.value;
      updateDisplay(currentValue === '0' ? number : currentValue + number);
    }
  }
  
  function handleOperator(op) {
    const currentValue = parseFloat(display.value);
    if (operator === null) {
      firstValue = currentValue;
    } else if (waitingForSecondValue) {
      performCalculation();
    }
    operator = op;
    waitingForSecondValue = true;
  }
  
  function performCalculation() {
    const secondValue = parseFloat(display.value);
    let result;
    switch (operator) {
      case '+':
        result = firstValue + secondValue;
        break;
      case '-':
        result = firstValue - secondValue;
        break;
      case '*':
        result = firstValue * secondValue;
        break;
      case '/':
        result = firstValue / secondValue;
        break;
      default:
        return;
    }
    operator = null;
    firstValue = result;
    updateDisplay(result);
  }
  
  function handleClear() {
    updateDisplay('0');
    firstValue = null;
    operator = null;
    waitingForSecondValue = false;
  }