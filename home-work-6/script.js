// 1. Написать цикл так, чтобы каждую итерацию выводило в консоль  значение i через секунду
var j = 0;
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(j);
        j++;
    }, 1000);
}

// 2.
var time = 1000;
function f(time) {
    setTimeout(function run() {
        console.log(`я функция которая запустилась спустя ${time} милисекунд`);
        setTimeout(run, time);
        time += 1000;
    }, time);
    time += 1000;
}

f(time);