/*eslint-disable no-console */
//eslint no - console: "error"
//prototypes
// const human = {
//     greet: "Hello world"
// };
// const user = {
//     age: 21,
//     name: 'oksana'
// };
// user._proto__ = human;
// for (let key in user) {
//     console.log()
//     if (user.hasOwnProperty(key)) {
//         console.log(key);
//     }

// }
let fruits = {
    apple: 3,
    lemon: 0,
    bananas: 5,
    pineaple: 0
};
let vegetables = {
    patato: 2,
    tomato: 1,
    carrot: 0
};
// Object.setPrototypeOf(vegetables, fruits);
// let sortFruits = {};

// for (key in vegetables) {
//     // console.log(key);
//     if (vegetables[key] != 0) {
//         sortFruits[key] = vegetables[key];
//     }
// }
// console.log(sortFruits);

//конструктор
// function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.sayHello = function() {
//         console.log("Hello" + this.name + " " + this.surname);

//     }
// }
// const oksi = new Person("Oksana", "Zembal");

// oksi.sayHello();
// console.log(oksi.sayHello());

// конструктор калькулятора

function calcSum() {

    this.addNum = function(a, b) {
        return a + b;
    }
}
const calc = new calcSum();
console.log(calc.addNum(1, 9));