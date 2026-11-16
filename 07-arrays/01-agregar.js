const letras = ['a', 'b'];

// agregar al final del array
letras.push('c', 'd');

// agregar al comienzo del array
letras.unshift('y', 'z');

letras.splice(3, 0, 1, 2)

console.log(letras)