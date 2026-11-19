function invertir(array) {
    const arrayInvertido = [];
    for (let numero of array) {
        arrayInvertido.unshift(numero)
    }
    array.splice(0, array.length, arrayInvertido)
    return array;
}

const numeros = [1, 2, 3, 4, 5]
invertir(numeros);
console.log(numeros);
