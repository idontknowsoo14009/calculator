const display = document.getElementById('display'); // just so you know these comments are made by me and yes i know i googled it 
let firstValue = null; // but I know what the code does,  this code creates variables the first one looks for an input element in the html file
let operator = null; 
let waitingforSecondoperator = false; 

function updateDisplay(value) {
    display.value = value; // this checks for the input value and will also update the text in the input textbox
  }
  
  function handleNumber(number) {
    if (waitingForSecondValue) {
      updateDisplay(number); // this function needs to be applied to the button onclick
      waitingForSecondValue = false; // and in the () you have to put a number in the html file
    } else {
      const currentValue = display.value; // this gets the current value in the input html element
      updateDisplay(currentValue === '0' ? number : currentValue + number); 
    } // current value=== 0 checks if the current value is the same as zero 
      // this is also a if else statement and if currentvalue===0 is true then the conditon after the first colon is evualeted
      
  }
  
  function handleOperator(op) { // handle operator needs to be applied to button onclick and button needs to be an operator
    const currentValue = parseFloat(display.value); // and in the () u have to put an operator but with an string like ''
    if (operator === null) {
      firstValue = currentValue;
    } else if (waitingForSecondValue) {
      performCalculation();
    }
    operator = op; // op stands for operator i think
    waitingForSecondValue = true; // and this changes the variable's value to true(boolean)
  }
  
  function performCalculation() { // this function needs to be applied to the enter button onclick in html file
    const secondValue = parseFloat(display.value);
    let result; // and this does operations, if it was  + then it will do first vl=alue + secondvalue
    switch (operator) {
      case '+':
        result = firstValue + secondValue; // this does the operation if + was pressed
        break;
      case '-':
        result = firstValue - secondValue; // if the user did subtraction then it would do this
        break;
      case '*':
        result = firstValue * secondValue; // it will multiply the first and second value if the user did multipaction
        break;
      case '/':
        result = firstValue / secondValue; // it will divide the first and second value if the user did divison
        break;
      default:
        return; 
    }
    operator = null; // i dont have to explain this
    firstValue = result;
    updateDisplay(result);
  }
  
  function handleClear() { // this needs to be applied to clear button onclick in html
    updateDisplay('0');
    firstValue = null;
    operator = null;
    waitingForSecondValue = false;
  }
