/*eslint-disable no-console */
//eslint no - console: "error"
//prototypes
const firstUser = {
    age: 26
};

const secondUser = {
    bornDate: 1993
};
const user = {
    name: 'alex'
};

user.__proto__ = firstUser;
firstUser.__proto__ = secondUser;
for (let key in user) {
    console.log('user.' + key + ':' + user[key]);
}