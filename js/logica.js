const cotizador = new CotizadorVuelos (tipoDestino, tipoPartida,costoPorPersona)

const cargoDestino = ()=> {
    let optionTD
    tipoDestino.forEach(element => {
    optionTD += `<option value="${element.factor}">${element.llega}</option>`
});
return optionTD
}

const cargoPartida = ()=> {
    let optionTP
        tipoPartida.forEach(element => {
            optionTP += `<option value="${element.factor}">${element.sale}</option>`
        });
        return optionTP
}

const cotizarVuelo = ()=> {
    if (metros2.value !== "") {
        let mts = metros2.value
        let zonaViv = selectZonaVivienda.value
        let tipoViv = selectTipoVivienda.value
        let valorDeLaCuota = cotizador.valorDePoliza(mts, zonaViv, tipoViv)
            valorDeLaCuota = valorDeLaCuota.toFixed(2)
            valorCuota.innerText = `$ ${valorDeLaCuota}`
    } else {
        alert("Complete todos los datos solicitados.")
    }
}