const usuarios = [
    { id: 1, name: 'Rajoy' },
    { id: 2, name: 'Feliz' },
];

// const resultado = usuarios.indexOf({ id: 1, name: 'Rajoy' });

// const resultado = usuarios.find(function(usuario) {
//     return usuario.id === 1;
// });

const resultado = usuarios.findIndex(usuario =>
     usuario.name === 'Rajoy');
console.log(resultado)