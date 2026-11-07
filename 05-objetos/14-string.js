const saludo = "Hola Mundo!";

const despedida = new String("Chao mundo :(");
console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf("Mu"));
console.log(saludo.indexOf("aeiou"));
console.log(saludo.includes(" Mundo"));
let nuevoSaludo = saludo.replace("Mundo","Rajoy");
console.log(nuevoSaludo, saludo);
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());

console.log(saludo.substring(0, 4));

const espacios = "    Rajoy     hola!     ";
console.log(espacios.trim());