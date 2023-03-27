/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function sum(a, b) {
    return a + b;
}

function calc(a, b, callback) {
    return callback(a, b);
}

console.log("la suma de: 2 + 2 es: " + calc(2, 2, sum));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
setTimeout(function () {
    console.log("Hola, JavaScript");
}, 5000);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function greetting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greetting, 2000, 'Montse');

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function execCallback(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}