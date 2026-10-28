let tieneAgua = true;
let encendido= false;
let temperatura = 0;

if (tieneAgua) {
    encendido = true;
    console.log('La pava está encendida');
} else {
    console.log("No tiene agua, por lo que no puede encender.");
    encendido = false;
}

while (encendido && temperatura <= 100) {
    console.log('Calentando agua... la temperatura es de:', temperatura, 'grados');
    temperatura += 25;
}

if (temperatura >= 100) {
    console.log('La temperatura de la pava ha llegado al máximo, la pava se apagará');
    encendido = false;
    console.log('Ahora tienes agua caliente a 100 grados');
}
