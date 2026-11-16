// function hola() {
//     return 'hola mundo';
// }

// es anonima, si se quiere referenciarla, se le asigna a una constante o variable.
const hola = mensaje => mensaje + 'Hola mundo';

const hola2 = mensaje => {
    return mensaje + 'Hola mundo';
}
/**
 * Si es algo de varias lineas seria 
 * 
 * const hola = () => {
 * 
 * }
 */

const resultado = hola("saludos");
console.log(resultado)