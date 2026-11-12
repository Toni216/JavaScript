function Usuario(nombre, apellido, fechaNacimiento, direccion, edad, paisNacimiento, suscripcion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
    this.edad = edad;
    this.paisNacimiento = paisNacimiento;
    this.suscripcion = suscripcion;
}

const usuario1 = new Usuario(
    "Chanchito",
    "Feliz",
    '10 de abril de 1992',
    "Av. Siempre Viva 742",
    31,
    "México",
    true
);

if ("suscripcion" in usuario1) {
    usuario1.suscripcion = !usuario1.suscripcion;
}

if ("direccion" in usuario1) {
    delete usuario1.direccion;
}

console.log(usuario1);
