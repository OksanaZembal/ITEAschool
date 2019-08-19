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
}
console.log(numberChange(4, 3));

//fibo numbers
function fibo(n) {
    let a = 1;
    let b = 1;
    let sum, maxSum;
    for (let i = 3; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;
        maxSum = sum + b;
    }
    return maxSum;
}
console.log(fibo(5));