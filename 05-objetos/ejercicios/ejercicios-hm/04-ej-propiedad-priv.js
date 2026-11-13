function boletos(nombreEvento, duracion, boletosDisponibles) {
    this.nombreEvento = nombreEvento;
    this.duracion = duracion;

    this.mostrarInfo = function() {
        console.log(`El evento ${this.nombreEvento} dura ${this.duracion} minutos y quedan ${boletosDisponibles} boletos`);
    }

    this.comprarBoleto = function(cantidad) {
        if (cantidad > boletosDisponibles) {
            console.log("No quedan tantos boletos a la venta");
        } else if (cantidad > 5) {
            console.log("Solo se pueden comprar 5 boletos seguidos.")
        } else {
            boletosDisponibles -= cantidad;
            console.log(`Has comprado ${cantidad} boleto(s)`);
        }
    }


    this.cancelarBoleto = function(cantidad) {
        if (cantidad > 0) {
            boletosDisponibles += cantidad;
        }
    }
}

const eventoRajoy = new boletos("Rajoy", 60, 50);

eventoRajoy.mostrarInfo();
eventoRajoy.comprarBoleto(3);
eventoRajoy.mostrarInfo();
eventoRajoy.boletosDisponibles = 100;
eventoRajoy.cancelarBoleto(1);
eventoRajoy.mostrarInfo();