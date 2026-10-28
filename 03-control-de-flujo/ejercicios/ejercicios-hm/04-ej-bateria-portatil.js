let dispositivo = "macbook";
let potencia;
switch (dispositivo) {
    case 'movil':
        potencia = 25;
        break;
    case 'macbook':
        potencia = 65;
        break;
    case 'lampara':
        potencia = 5;
    default:
        potencia = 0;
        console.log("Dispositivo no reconocido. No se suministra energía.");
        break;
}

if (potencia > 0) {
    console.log("La batería suministra", potencia, "watts al", dispositivo);
}
