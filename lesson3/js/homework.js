/*eslint-disable no-console */
//eslint no - console: "error"
let fruits = [{
        name: 'lemon',
        color: 'yellow'
    },
    {
        name: 'kiwi',
        color: 'green'
    },
    {
        name: 'cherry',
        color: 'red'
    }
];

function printFruitInfo() {
    document.write(`Fruit name: ${this.name}, with color: ${this.color}`);
    document.write('<hr>');
}

for (let i = 0; i < fruits.length; i++) {

    printFruitInfo.apply(fruits[i], [fruits[i].name, fruits[i].color]);
}