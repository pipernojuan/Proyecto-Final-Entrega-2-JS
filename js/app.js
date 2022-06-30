selectTipoPartida.innerHTML = cargoPartida()
selectTipoDestino.innerHTML = cargoDestino()

btnCotizar.addEventListener("click", ()=> cotizarVuelo() )

btnRefrescar.addEventListener("click", ()=> location.reload() )

localStorage.setItem (cargoPartida, cargoPartida, cotizarVuelo)