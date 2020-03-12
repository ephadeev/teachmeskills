"use strict";
function Car(brand, model, type, cc) {
    var _brand = brand;
    var _model = model;
    var _type = type;
    var _cc = cc;

    this.getBrand = function () {
        return _brand;
    };
    this.getModel = function () {
        return _model;
    };
    this.getType = function () {
        return _type;
    };
    this.getCc = function () {
        return _cc;
    };

    this.setBrand = function (value) {
        if (_brand) {
            return;
        }
        _brand = value;
    };
    this.setModel = function (value) {
        if (_model) {
            return;
        }
        _model = value;
    };
    this.setType = function (value) {
        if (_type) {
            return;
        }
        _type = value;
    };
    this.setCC = function (value) {
        if (_cc) {
            return;
        }
        _cc = value;
    }
}

var car1 = new Car(`brand1`, `model1`, `type1`, 1001);
var car2 = new Car(`brand2`, `model2`, `type2`, 2001);
var car3 = new Car(`brand3`, `model3`, `type3`, 3001);
var car4 = new Car(`brand4`, `model4`, `type4`, 4001);
var car5 = new Car(`brand5`, `model5`, `type5`, 5001);

var cars = [car1, car2, car3, car4, car5];

function returnString() {
    return `${this.getBrand()} ${this.getModel()} is ${this.getType()} and can do wroom-wroom with ${this.getCc()}cc`;
}

function logPowerfulCar(arr) {
    arr.forEach(function (car) {
        if (car.getCc() > 3000) {
            console.log(returnString.call(car));
        }
    })
}
logPowerfulCar(cars);