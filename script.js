// ELEMENTS
var num1 = document.getElementById("n1-input")
var num2 = document.getElementById("n2-input")

let result
const resultDisplay = document.getElementById("result-display")
const resultBtn = document.getElementById("result-btn")

const clearBtn = document.getElementById("clear-btn")

// FUNCTIONS
// Computation functions
function add() {
  return result = parseFloat(num1.value) + parseFloat(num2.value)
}

function sub() {
  return result = parseFloat(num1.value) - parseFloat(num2.value)
}

function mul() {
  return result = parseFloat(num1.value) * parseFloat(num2.value)
}

function div() {
  return result = parseFloat(num2.value) > 0 ? parseFloat(num1.value) / parseFloat(num2.value) : "It's not possible to divide by 0"
}

// Clear function
function clear() {

  num1.value = 0
  num2.value = 0

  resultDisplay.textContent = 0

}

// BUTTON CLICKS
// Result button click
resultBtn.addEventListener("click", () => {

  let operator = document.getElementById("operator").value

  if(operator == "add") {
    resultDisplay.textContent = add()
  } else if(operator == "sub") {
    resultDisplay.textContent = sub()
  } else if(operator == "mul") {
    resultDisplay.textContent = mul()
  } else if(operator == "div") {
    resultDisplay.textContent = div()
  }
  
})

// Clear button click
clearBtn.addEventListener("click", () => { clear() })