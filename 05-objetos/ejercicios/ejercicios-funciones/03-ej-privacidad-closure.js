function Mod(nombre, descargas) {
    this.nombre = nombre;

    this.registrarDescargas = function(n) {
        if (n <= 0 || n > 1000) {
            console.log("No se permiten dichos valores");
            return;
        }
        descargas += n;
    }

    this.verDescargas = function() {
        return descargas;
    };
}

const mod1 = new Mod("hola", 20)
console.log(mod1.verDescargas()); // 20
mod1.registrarDescargas(123);
console.log(mod1.verDescargas()); // 143
mod1.registrarDescargas(1000000); // "Valor no permitido (de 1 a 1000)"

mod1.descargas = 999999;
console.log(mod1.descargas); // se ha creado una nueva propiedad xd
console.log(mod1.verDescargas());

 // nada X undefined