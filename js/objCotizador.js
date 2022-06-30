class CotizadorSeguroDeHogar {
    constructor(jsonZV, jsonTV) {
        this.arrayTipoDestino = jsonZV
        this.arrayTipoPartida = jsonTV
    }
    valorDePoliza(m2i, factorZona, factorVivienda) {
        let valorPolizaFinal = parseFloat(this.costoM2) * parseInt(m2i) * parseFloat(factorZona) * parseFloat(factorVivienda)
            return valorPolizaFinal
    }
}