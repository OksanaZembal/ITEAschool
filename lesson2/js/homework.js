/*eslint-disable no-console */
//eslint no - console: "error"


function calculator() {
    const intoduce = "Result is: ";
    this.addNum = function(a, b) {
        result = a + b;
        return intoduce + result;
    }
    this.multNum = function(a, b) {
        result = a * b;
        return intoduce + result;
    }
    this.divNum = function(a, b) {
        result = a / b;
        return intoduce + result;
    }
    this.subtractNum = function(a, b) {
        result = a - b;
        return intoduce + result;

    }

}

const calcul = new calculator();
console.log(calcul.addNum(2, 3));
console.log(calcul.multNum(2, 3));
console.log(calcul.divNum(6, 3));
console.log(calcul.subtractNum(6, 3));