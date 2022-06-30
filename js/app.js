selectZonaVivienda.innerHTML = cargoZonaDeResidencia()
selectTipoVivienda.innerHTML = cargoTiposDeVivienda()

btnCotizar.addEventListener("click", ()=> cotizarSeguroVivienda() )

btnRefrescar.addEventListener("click", ()=> location.reload() )