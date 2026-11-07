// { id: 1, recuperarClave: function(){} }
function Usuario() {
    this.id = 1;
    this.recuperarClave = function () { // métodos
        console.log('recuperanco clave...');
    }
}

let usuario = new Usuario();

console.log(usuario);
