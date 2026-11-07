const ahora = new Date();
// console.log(ahora);

const fecha = new Date('December 11 1986 14:15'); // Mes Dia Año
console.log(fecha);

const fecha2 = new Date(1326, 11, 25, 14, 15);
const fecha3 = new Date(1326, 11, 25, 14+15, 15);
console.log(fecha3);

console.log(fecha3.toDateString())
console.log(fecha3.toISOString()) // FORMATO BUENO SIIII
console.log(fecha3.toTimeString())

fecha3.setFullYear(2001);
console.log(fecha3);
