function Evento(nombre, duracion, boletosDisponibles) {
    this.nombre = nombre;
    this.duracion = duracion;
    let _boletosDisponibles = boletosDisponibles;
    const boletosRegistrados = [];

    this.registrarBoleto = function(boleto) {
        const indice = _boletosDisponibles.indexOf(boleto);
            if(indice !== -1) {
                const registrar = _boletosDisponibles.splice(indice, 1)
                boletosRegistrados.push(boleto);
                console.log(`Boleto registrado: ${boleto}`);
            } else if (boletosRegistrados.includes(boleto)) {
                console.log(`Este boleto ya ha sido registrado.`)
            } else {
                console.log('Boleto inválido o inexistente')
            }
    }

    this.regresarBoleto = function(boleto) {
        const indice = boletosRegistrados.indexOf(boleto);
        if (indice === -1) {
            console.log(`Este boleto no está registrado.`)
        } else {
            const regresar = boletosRegistrados.splice(indice, 1);
            console.log(`Boleto regresado: ${boleto}`);
            _boletosDisponibles.push(boleto)
        }
    }

    this.mostrarInformacion = function() {
        console.log(`El ${nombre} tiene una duración de ${duracion} horas.
Las entradas disponibles son las nº:${_boletosDisponibles} y las registradas las nº ${boletosRegistrados}`);
        console.log(" ")
    }

}

const concierto = new Evento("Concierto de Paul McCartney", 3, [1, 2, 3, 4, 5]);

concierto.mostrarInformacion();

// Registrar boletos
concierto.registrarBoleto(2); // Boleto registrado: 2 
concierto.registrarBoleto(3); // Boleto registrado: 3 
concierto.registrarBoleto(2); // Este boleto ya ha sido registrado. 
concierto.registrarBoleto(6); // Boleto inválido o inexistente.

// Mostrar información después de registrar boletos 
concierto.mostrarInformacion(); 
// Regresar un boleto registrado 
concierto.regresarBoleto(2); // Boleto regresado: 2 
// // Mostrar información después de regresar un boleto 
concierto.mostrarInformacion(); 
// // Intentar regresar un boleto no registrado 
concierto.regresarBoleto(6); // Este boleto no está registrado.