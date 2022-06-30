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
    if (valorVuelo.value !== "") {
        let pers = personas.value
        let tipoDest = selectTipoDestino.value
        let tipoPart = selectTipoPartida.value
        let valorFinalDelVuelo = cotizador.valorDeVuelo(pers, tipoDest, tipoPart)
            valorFinalDelVuelo = valorFinalDelVuelo.toFixed(2)
            valorVuelo.innerText = valorFinalDelVuelo
            
    } else {
        alert("Complete todos los datos solicitados.")
    }
}