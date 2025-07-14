let currentInput = 0;
let previousInput = 0;
let operator = "+";
let liste = "";

let isFirstOpperation = true;

function number(zahl) {
  if (operator === "=") {
    previousInput = 0;
    currentInput = 0;
    operator = "+";
    updatePreviousInput("");
    updateCurrentInput(currentInput);
  }
  currentInput = currentInput * 10 + zahl;
  console.log(currentInput);
  updateCurrentInput(currentInput);
}
function add() {
  performOperator();
  operator = "+";
  updatePreviousInput(previousInput + operator);
}
function subtract() {
  performOperator();
  operator = "-";
  updatePreviousInput(previousInput + operator);
}
function multiply() {
  performOperator();
  operator = "*";
  updatePreviousInput(previousInput + operator);
}
function divide() {
  performOperator();
  operator = "/";
  updatePreviousInput(previousInput + operator);
}

function clearCalculator() {
  currentInput = 0;
  previousInput = 0;
  operator = "+";
  liste = "";
  updateCurrentInput("");
  updatePreviousInput("");
  updateList();
}

function performOperator() {
  let currentResult = 0;
  if (operator === "+") {
    currentResult = previousInput + currentInput;
  } else if (operator === "-") {
    currentResult = previousInput - currentInput;
  } else if (operator === "*") {
    currentResult = previousInput * currentInput;
  } else if (operator === "/") {
    currentResult = previousInput / currentInput;
  }
  if (operator !== "=") {
    if (isFirstOpperation) {
      isFirstOpperation = false;
    } else {
      let listString =
        "<p>" +
        previousInput +
        operator +
        currentInput +
        "=" +
        currentResult +
        "</p>";
      liste = listString + liste;
      console.log(listString);
      updateList();
    }
  }

  previousInput = currentResult;

  currentInput = 0;

  updateCurrentInput();
}

function enter() {
  performOperator();
  operator = "=";
  isFirstOpperation = true;
  updatePreviousInput(previousInput + operator);
  currentInput = previousInput;
  updateCurrentInput(previousInput);
}

function comma() {
  if (!currentInput.toString().includes(".")) {
    currentInput = previousInput + "." + currentInput;
    updateCurrentInput(currentInput);
    //bisher gehen nur ganze zahlen zum schreiben, 0,muss ich noch erzeugen und 0,0 ebenso
  }
}

function updateCurrentInput(text) {
  document.getElementById("eingabe").innerHTML = currentInput;
}

function updatePreviousInput(text) {
  document.getElementById("intermediate").innerHTML = text;
}

function updateList() {
  document.getElementById("list").innerHTML = liste;
}
