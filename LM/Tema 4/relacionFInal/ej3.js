function check() {
    let jugador1 = document.getElementById("jugador1").value;
    let jugador2 = document.getElementById("jugador2").value;
    let jugador3 = document.getElementById("jugador3").value;

    if (jugador1 == "" || jugador2 == "" || jugador3 == "") {
        alert("Debes rellenar todos los campos");
    }
    else alert("Correcto");
}