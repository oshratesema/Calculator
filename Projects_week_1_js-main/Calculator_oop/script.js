let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let currentValue = document.querySelector(".currentValue");
let temptValue = document.querySelector(".tempValue");
let totalValue = document.querySelector(".totalValue");
let equalTo = document.querySelector("#equalTo");
let allClear = document.querySelector("#allClear");
let clear = document.querySelector("#clear");

class Calculator {
  constructor(numbers, operators) {
    this.numbers = numbers;
    this.operators = operators;
  }
  //display data from calculator
  displayData() {
    numbers.forEach((number) => {
      number.addEventListener("click", function () {
        if (currentValue.innerHTML == "0") {
          currentValue.innerHTML = "";
          temptValue.innerHTML = "";
        }
        currentValue.innerHTML += number.innerText;
        temptValue.innerHTML += number.innerText;
      });
    });

    let x;

    operators.forEach((operator) => {
      operator.addEventListener("click", function (e) {
        temptValue.innerHTML += " " + operator.getAttribute("data-value") + " ";
        x = currentValue.innerHTML;
        if (e.target.classList.contains("operator")) {
          currentValue.innerHTML = '';
        }
      });
    });
  }

  equalTo() {
    equalTo.addEventListener("click", function (e) {
      totalValue.innerHTML = eval(temptValue.innerHTML)
      if (e.target.classList.contains("equalTo")) {
        temptValue.innerHTML = `(${temptValue.innerHTML})`;
        totalValue.innerHTML = eval(temptValue.innerHTML);
      }
    });
  }

  clear() {
    clear.addEventListener("click", function () {
      currentValue.innerHTML = 0;
     let tempArr = temptValue.innerHTML.split('').slice(0,-3).join('');
      console.log(tempArr);
    
    });
  }

  allClear() {
    allClear.addEventListener("click", function () {
      location.reload();
    });
  }
}
let calculator = new Calculator(numbers, operators);
calculator.displayData();
calculator.equalTo();
calculator.allClear();
calculator.clear();
