const arr1 = [10, 5, 8]
const arr2 = [2, 7, 3]

// const combinado = [...arr1, ...arr2];
// const ordenado = [...combinado];

// ordenado.sort()

// console.log(ordenado)

function combinarYOrdenar(arr, arr2) {
    let combinado = [...arr, ...arr2];
    return combinado.sort((a, b) => a - b);
}

const resultado = combinarYOrdenar(arr1, arr2);
console.log(resultado);