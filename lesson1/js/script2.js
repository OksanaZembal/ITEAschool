/*eslint-disable no-console */
//eslint no - console: "error"
function myFunc(a) {
    if (a < 50 && a >= 20) {
        return true;
    }
    return false;
}
console.log(myFunc(35));

const fn = (a) => a < 50 && a >= 20 ? true : false;
console.log(fn(25));

function numberChange(a, b) {

    a = a + b;
    b = a - b;
    a = a - b;
    return a, b;

}
console.log(numberChange(4, 3));