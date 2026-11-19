const precios = [ 100, 200, 300, 400, 500 ];

const total = precios.reduce((acc, el) => {
    return acc + el;
}, 0);

const promedio = total / precios.length;
console.log(promedio);