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

const usuario2 = new Usuario(
    "Chanchito",
    "Triste",
    '25 de junio de 1985',
    "Calle Luna 123",
    38,
    "España",
    true
);

const usuario3 = new Usuario(
    "Felipe",
    "Schurmann",
    '3 de septiembre de 2000',
    "Boulevard del Sol 456",
    "23",
    "Argentina",
    true
);


console.log(usuario1);
console.log(usuario2);
console.log(usuario3);