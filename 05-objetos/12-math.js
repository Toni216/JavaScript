console.log(
    Math.PI,
    Math.abs(-15),
    Math.round(20.5),
    Math.round(20.4),
    Math.floor(17.9),
    Math.ceil(17.1),
    Math.pow(2, 3),
    Math.sqrt(9),
);

console.log(Math.random());

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandom(1,10));

