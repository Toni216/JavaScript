function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave');
        },
    }
}

let user1 = crearUsuario('Nicolas', 'nico@sddsa.io');
let user2 = crearUsuario('Paco', 'chancho@sddsa.io');

console.log(user1);
console.log(user2);
