// 1.
var handler = function (i) {
    return function() {
        console.log(i);
    }
};

for (var i = 0; i < 5; i++) {
    setTimeout(handler(i), i * 1000);
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