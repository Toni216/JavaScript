/**
 * Crear array de longitud N, y que sus elementos sean
 * numeros de 1 hasta N
 */
let longitud = 7;
function crearArray(n) {
    let collection = [];
    for (let i = 1; i <= longitud; i++) {
        collection.push(i);
    }
    return collection;
}

let resultado = crearArray(longitud);

console.log(resultado);
