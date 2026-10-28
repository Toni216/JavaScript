let tieneCuenta = true;
let puntajeCredito = 700;
let tasaInteres;

if (puntajeCredito >= 750) {
    tasaInteres = 10;
} else if (puntajeCredito >= 700) {
    tasaInteres = 15;
}else if (puntajeCredito >= 650) {
    tasaInteres = 20;
} else {
    tasaInteres = null;
    console.log('No podemos ofrecerle un crédito.');
}

if (puntajeCredito !== null && tieneCuenta && tasaInteres >= 15) {
    tasaInteres *= 0.9;
}

if (tasaInteres !== null) {
    console.log('Préstamo aprobado.');
    console.log('La tasa de interés es del ', tasaInteres, '%');
}