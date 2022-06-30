selectTipoPartida.innerHTML = cargoZonaDeResidencia()
selectTipoDestino.innerHTML = cargoTiposDeVivienda()

btnCotizar.addEventListener("click", ()=> cotizarSeguroVivienda() )

btnRefrescar.addEventListener("click", ()=> location.reload() )