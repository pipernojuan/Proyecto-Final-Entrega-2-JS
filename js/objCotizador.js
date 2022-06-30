class CotizadorVuelos {
    constructor(jsonTD, jsonTP, costoPorPersona) {
        this.arrayTipoDestino = jsonTD
        this.arrayTipoPartida = jsonTP
        this.arrayPersona = costoPorPersona
    }
    valorDeVuelo(m2i, factorZona, factorVivienda) {
        let valorPolizaFinal = parseFloat(this.costoM2) * parseInt(m2i) * parseFloat(factorZona) * parseFloat(factorVivienda)
            return valorPolizaFinal
    }
}