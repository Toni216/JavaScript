function boletos(nombreEvento, duracion, boletosDisponibles) {
    this.nombreEvento = nombreEvento;
    this.duracion = duracion;
    this.boletosDisponibles = boletosDisponibles;

    this.mostrarInfo = function() {
        console.log(`El evento ${this.nombreEvento} dura ${this.duracion} minutos y quedan ${this.boletosDisponibles} boletos`);
    }

    this.comprarBoleto = function(cantidad) {
        if (cantidad > this.boletosDisponibles) {
            console.log("No quedan tantos boletos a la venta");
        } else if (cantidad > 5) {
            console.log("Solo se pueden comprar 5 boletos seguidos.")
        } else {
            this.boletosDisponibles -= cantidad;
            console.log(`Has comprado ${cantidad} boleto(s)`);
        }
    }


    this.cancelarBoleto = function(cantidad) {
        if (cantidad > 0) {
            this.boletosDisponibles += cantidad;
        }
    }
}

const eventoRajoy = new boletos("Rajoy", 60, 10);


eventoRajoy.mostrarInfo();
eventoRajoy.comprarBoleto(3);
eventoRajoy.mostrarInfo();
eventoRajoy.comprarBoleto(6);
eventoRajoy.comprarBoleto(4);
eventoRajoy.comprarBoleto(4);
eventoRajoy.mostrarInfo();
eventoRajoy.comprarBoleto(3);
eventoRajoy.mostrarInfo();