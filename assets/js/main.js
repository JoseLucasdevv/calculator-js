function Calculate() {
  return {
    display: document.querySelector(".display"),
    start() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.selectButton(el);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearCalculate();
        }
        if (el.classList.contains("btn-del")) {
          this.delButton();
        }
        if (el.classList.contains("btn-eq")) {
          this.resultCalculate();
        }
      });
    },

    pressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.resultCalculate();
        }
      });
    },

    selectButton(el) {
      this.display.value += el.innerText;
    },

    clearCalculate() {
      this.display.value = "";
      this.display.focus();
    },

    delButton() {
      this.display.value = this.display.value.slice(0, -1);
    },
    resultCalculate() {
      let result = this.display.value;
      try {
        result = eval(result);
        if (!result) {
          alert("conta invalida");
          return;
        }
        this.display.value = result;
      } catch (e) {
        alert("conta invalida");
      }
    },
  };
}

const calc = Calculate();

calc.start();
calc.pressEnter();
