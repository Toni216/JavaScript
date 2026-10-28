let contenedor = true;
let numTazas = 2    ;
const tiempoXTaza = 30;

if (contenedor && numTazas > 0) {
    console.log('Iniciando el proceso');

    tiempoTotal = numTazas * tiempoXTaza;

    console.log('Son', numTazas, 'tazas',', tardarán', tiempoTotal, 'segundos');
} else if (contenedor) {
    console.log('No se puede encender el contenedor.');
} else {
    console.log('No se ha seleccionado un número de tazas.');
}