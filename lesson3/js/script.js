/*eslint-disable no-console */
//eslint no - console: "error"
// const noBinding = {
//     person: 'Ng-speedster',
//     showText() {

//         setTimeout(this.printInfo.bind(noBinding), 2000)
//     },
//     printInfo() {
//         document.write(`Hello ${this.person}`);
//     }
// }
// noBinding.showText();

// let fruits = [{ name: 'lemon', color: 'yellow' },
//     { name: 'banana', color: 'yellow' },
//     { name: 'pineapple', color: 'yellow' }
// ];

// function printFruitInfo() {
//     document.write(Fruit name: $ { this.name }, with color: $ { this.color });
//     document.write('<hr>');
// };

// for (let i = 0; i < fruits.length; i++) {

//     printFruitInfo.call(fruits[i], fruits[i].name, fruits[i].color);
//     console.log(fruits[i].name);
// }

let fruits = [{
        name: "Lemon",
        color: "Yellow"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Pineapple",
        color: "Brown"
    }
];

function printFruitInfo() {
    document.write(`Fruit name: ${this.name}, has color: ${this.color} `);
    document.write('<hr>');
}

for (let i = 0; i < fruits.length; i++) {

    printFruitInfo.call(fruits[i], fruits[i].name, fruits[i].color);
}