// function Calculate() {
//   return {
//     display: document.querySelector(".display"),
//     start() {
//       document.addEventListener("click", (e) => {
//         const el = e.target;
//         if (el.classList.contains("btn-num")) {
//           this.selectButton(el);
//         }
//         if (el.classList.contains("btn-clear")) {
//           this.clearCalculate();
//         }
//         if (el.classList.contains("btn-del")) {
//           this.delButton();
//         }
//         if (el.classList.contains("btn-eq")) {
//           this.resultCalculate();
//         }
//       });
//     },

//     pressEnter() {
//       this.display.addEventListener("keyup", (e) => {
//         if (e.keyCode === 13) {
//           this.resultCalculate();
//         }
//       });
//     },

//     selectButton(el) {
//       this.display.value += el.innerText;
//     },

//     clearCalculate() {
//       this.display.value = "";
//       this.display.focus();
//     },

//     delButton() {
//       this.display.value = this.display.value.slice(0, -1);
//     },
//     resultCalculate() {
//       let result = this.display.value;
//       try {
//         result = eval(result);
//         if (!result) {
//           alert("conta invalida");
//           return;
//         }
//         this.display.value = result;
//       } catch (e) {
//         alert("conta invalida");
//       }
//     },
//   };
// }

// const calc = Calculate();

// calc.start();
// calc.pressEnter();

//Constructor Function

function Calculator() {
  const input = document.querySelector(".display");
  this.start = () => {
    result();
    pressEnter();
  };

  const pressEnter = () => {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        totalResult();
      }
    });
  };

  const result = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) {
        btnForInput(el);
      }
      if (el.classList.contains("btn-clear")) {
        btnClear();
      }
      if (el.classList.contains("btn-del")) {
        cleanOneChar();
      }
      if (el.classList.contains("btn-eq")) {
        totalResult();
      }
    });
  };
  const btnForInput = (element) => {
    input.value += element.innerText;
    input.focus();
  };

  const btnClear = () => {
    input.value = "";
    input.focus();
  };

  const cleanOneChar = () => (input.value = input.value.slice(0, -1));

  const totalResult = () => {
    let result = input.value;
    try {
      result = eval(result);
      if (!result) {
        alert("Conta invalida");
        return;
      }
      input.value = result;
    } catch (e) {
      alert("Conta invalida");
    }
  };
}

const calculate = new Calculator();

calculate.start();
