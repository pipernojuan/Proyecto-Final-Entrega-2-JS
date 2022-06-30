const cotizador = new CotizadorSeguroDeHogar(zonaVivienda, tipoVivienda, costoSeguroM2)

const cargoZonaDeResidencia = ()=> {
    let optionTD
    zonaVivienda.forEach(element => {
    optionTD += `<option value="${element.factor}">${element.area}</option>`
});
return optionTD
}

const cargoTiposDeVivienda = ()=> {
    let optionTV
        tipoVivienda.forEach(element => {
            optionTV += `<option value="${element.factor}">${element.tipo}</option>`
        });
        return optionTV
}

const cotizarSeguroVivienda = ()=> {
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