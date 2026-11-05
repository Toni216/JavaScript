let array = [ 2, 5, 7, 15, -5, -100, 55 ];
numPositivos = 0;

function cuantosPositivos(arr) {
    for (const positivo of arr) {
        if ( positivo >= 0 ) {
            numPositivos += 1;
        }
    }
    return numPositivos;
}

let resultado = cuantosPositivos(array);
console.log(resultado);