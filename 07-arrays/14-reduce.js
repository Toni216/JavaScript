const numeros = [1, 2, 3, 4, 5, 6];

// const suma = numeros.reduce((acc, el) => {
//     return acc + el;
// }, 0)

// console.log(suma)

// const anidado = [[1, 2], 3, [4, 5]];

// const plano = anidado
//     .reduce((acc, el) => acc.concat(el), []);

// console.log(plano)

const usuarios = [
    { edad: 17, nombre: 'Toni' },
    { edad: 13, nombre: 'Paco' },
    { edad: 25, nombre: 'Manu' },
    { edad: 32, nombre: 'Ivan' },
];

const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {})

console.log(indexado)