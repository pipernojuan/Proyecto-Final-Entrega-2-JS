selectTipoPartida.innerHTML = cargoPartida()
selectTipoDestino.innerHTML = cargoDestino()

btnCotizar.addEventListener("click", ()=> cotizarSeguroVivienda() )

btnRefrescar.addEventListener("click", ()=> location.reload() )