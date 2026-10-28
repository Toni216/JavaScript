let estaBaneado = true;
let diasSeguidos = 40;
let esVip = true;
let diamantes;

if (diasSeguidos >= 30) {
    diamantes = 10;
} else if (diasSeguidos >= 7) {
    diamantes = 5;
} else if (diasSeguidos >= 1) {
    diamantes = 2;
} else {
    diamantes = 0;
}

if (diamantes > 0 && esVip) {
    diamantes *= 2;
}

if (!estaBaneado && diamantes > 0) {
    console.log('Has recibido', diamantes, 'diamantes');
} else if (!estaBaneado && diamantes === 0) {
    console.log('Contectate mañana para empezar tu racha.');
} else {
    console.log('Acceso denegado.');
}

if (diasSeguidos % 7 === 0 && diasSeguidos > 0) {
    console.log('¡Semana completada!');
}