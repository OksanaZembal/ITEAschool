// function Car() {
//     let enabled = false;
//     this.enableEngine = function() {
//         enabled = true;
//         console.log('The engine is enabled!!!');
//     }
//     this.disableEngine = function() {
//         enabled = false;
//         console.log('The engine is disabled!!!');
//     }
// }

// function Audi(model) {
//     Car.call(this);
//     this.model = model;
// }
// const q5 = new Audi('Q5');
// console.log(q5);
// q5.enableEngine();


// function getRegards(greet) {
//     function getContent(user) {
//         return greet + user;
//     }
//     return getContent;

// }
// const greet = getRegards("Hello" + ' ');

// console.log(greet("Alex"));
// console.log(greet("Maxx"));
// console.log(greet("Jax"));