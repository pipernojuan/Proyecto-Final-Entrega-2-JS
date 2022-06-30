class CotizadorVuelos {
    constructor(jsonTD, jsonTP, costoPorPersona) {
        this.arrayTipoDestino = jsonTD
        this.arrayTipoPartida = jsonTP
        this.persona = costoPorPersona
    }
    valorDeVuelo(pers, factorPartida, factorDestino) {
        let valorVueloFinal = parseFloat(this.persona) * parseInt(pers) * parseFloat(factorPartida) * parseFloat(factorDestino)
        return valorVueloFinal
    }
}