class CotizadorSeguroDeHogar {
    constructor(jsonZV, jsonTV, costoSeguroM2) {
        this.arrayZonaVivienda = jsonZV
        this.arrayTipoVivienda = jsonTV
        this.costoM2 = costoSeguroM2
    }
    valorDePoliza(m2i, factorZona, factorVivienda) {
        let valorPolizaFinal = parseFloat(this.costoM2) * parseInt(m2i) * parseFloat(factorZona) * parseFloat(factorVivienda)
            return valorPolizaFinal
    }
}