let descargas = 250000;
let soportaUltimaVersion = false;
let insignia;
let puntosVisibilidad;

if (descargas >= 100000) {
    insignia = 'oro';
    puntosVisibilidad = 100;
} else if (descargas >= 10000) {
    insignia = 'plata';
    puntosVisibilidad = 50;
} else if (descargas >= 1000) {
    insignia = 'bronce';
    puntosVisibilidad = 20;
} else {
    insignia = null;
    puntosVisibilidad = null;
}

if (soportaUltimaVersion && insignia !== 'oro' && insignia !== null) {
    puntosVisibilidad *= 1.5;
}

if (insignia !== null && puntosVisibilidad !== null) {
    console.log('Insignia:', insignia);
    console.log('Puntos de visibilidad:', puntosVisibilidad);
} else {
    console.log('Este mod aún no tiene insignia.');
}