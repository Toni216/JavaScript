const duplicados = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const sinDuplicar = [];

const quitarDuplicados = duplicados => {
    for (const numero of duplicados) {
        if (sinDuplicar.indexOf(numero) === -1) {
            sinDuplicar.push(numero);
        } 
    }
    return sinDuplicar;
}

console.log(quitarDuplicados(duplicados));
console.log()