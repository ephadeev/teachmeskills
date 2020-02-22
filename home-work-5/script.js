"use strict";
var clients = [
    {name: "John", balance: 300, age: 21, alcoholName: "gin", alcoholCount: 2},
    {name: "Emma", balance: 220, age: 18, alcoholName: "brandy", alcoholCount: 1},
    {name: "Olivia", balance: 115, age: 17, alcoholName: "ale", alcoholCount: 2},
    {name: "Mia", balance: 87, age: 16, alcoholName: "liqueur", alcoholCount: 1},
    {name: "Riley", balance: 800, age: 28, alcoholName: "tequila", alcoholCount: 2},
    {name: "William", balance: 13, age: 27, alcoholName: "liqueur", alcoholCount: 1},
    {name: "Matthew", balance: 25, age: 31, alcoholName: "beer", alcoholCount: 2},
    {name: "Liam", balance: 2, age: 19, alcoholName: "beer", alcoholCount: 1},
    {name: "Noah", balance: 1000, age: 29, alcoholName: "rum", alcoholCount: 2},
    {name: "Logan", balance: 115, age: 28, alcoholName: "beer", alcoholCount: 1}
];

var Alcohol = {
    brandy: 5.40,
    gin: 3.10,
    ale: 2.13,
    liqueur: 1.99,
    champagne: 100.24,
    beer: 10.23,
    rum: 24.11,
    tequila: 13.10,
};

var isAdult = function (age) {
    return (age >= 18);
};

var getAlcoholsPrice = function (alcoName) {
    return Alcohol[`${alcoName}`];
};

var multiplication = function (a, b) {
    return a * b;
};

var isPayable = function (a, b) {
    return (a >= b);
};

function init(arr) {
    arr.forEach(function (client) {
        let fullOrderPrice = multiplication(getAlcoholsPrice(`${client.alcoholName}`), client.alcoholCount);
        if (isAdult(client.age) === true && isPayable(client.balance, fullOrderPrice) === true) {
            client.balance -= fullOrderPrice;
            console.log(`${client.name}, вот ваш заказ: ${client.alcoholName} в количестве ${client.alcoholCount} шт. С вас ${fullOrderPrice} рублей`);
        } else if (isAdult(client.age) === false && isPayable(client.balance, fullOrderPrice)) {
            console.log(`${client.name}, возвращайтесь, когда будете совершеннолетним`);
        } else {
            console.log(`${client.name}, у вас недостаточно средств`);
        }
    })
}
init(clients);