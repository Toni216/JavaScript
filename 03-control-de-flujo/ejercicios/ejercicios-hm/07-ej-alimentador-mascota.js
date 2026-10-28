let tipoMascota = 'gato';
let peso = 5;
let cantidadComida;

switch (tipoMascota) {
    case 'perro':
        if (peso < 5) {
            cantidadComida = 100;
        } else if (peso < 10) {
            cantidadComida = 200;
        } else if (peso < 20) {
            cantidadComida = 300;
        } else {
            cantidadComida = 400;
        }
        break;
    case 'gato':
        if (peso < 3) {
            cantidadComida = 50;
        } else if (peso < 6) {
            cantidadComida = 100;
        } else {
            cantidadComida = 150;
        }
        break;
    default:
        console.log('Tipo de mascota no válido. Por favor ingrese gato o perro');
}

console.log('El alimentador liberará,', cantidadComida, 'gramos para tu', tipoMascota);