document.addEventListener("DOMContentLoaded", function() {
    const posibilidades = ["piedra", "papel", "tijera"];

    const jugadorElementos = document.querySelectorAll("#jugador img");
    const maquinaElemento = document.querySelector("#maquina img");
    const botonJugar = document.querySelector("button");
    const botonYa = document.querySelector("h2 button");
    const botonReset = document.querySelector("div button");
    const nombreInput = document.querySelector("input[name='nombre']");
    const partidasInput = document.querySelector("input[name='partidas']");
    const totalSpan = document.querySelector("#total");
    const actualSpan = document.querySelector("#actual");
    const historialUl = document.querySelector("#historial");

    let nombreJugador = "";
    let totalPartidas = 0;
    let partidasJugadas = 0;

    botonJugar.addEventListener("click", function() {
        const nombre = nombreInput.value.trim();
        const partidas = parseInt(partidasInput.value);

        jugadorElementos[0].src = "img/papelJugador.png";
        jugadorElementos[1].src = "img/piedraJugador.png";
        jugadorElementos[2].src = "img/tijeraJugador.png";

        if (nombre.length < 4 || !isNaN(nombre.charAt(0)) || partidas <= 0) {
            nombreInput.classList.add("fondoRojo");
            partidasInput.classList.add("fondoRojo");
            return;
        }

        nombreJugador = nombre;
        totalPartidas = partidas;

        nombreInput.disabled = true;
        partidasInput.disabled = true;
        totalSpan.textContent = totalPartidas;

        nombreInput.classList.remove("fondoRojo");
        partidasInput.classList.remove("fondoRojo");
    });

    jugadorElementos.forEach(function(elemento) {
        elemento.addEventListener("click", function() {
            jugadorElementos.forEach(function(elem) {
                elem.classList.remove("seleccionado");
                elem.classList.add("noSeleccionado");
            });

            elemento.classList.add("seleccionado");
        });
    });

    botonYa.addEventListener("click", function() {
        if (nombreJugador === "" || totalPartidas === 0) return;

        const seleccionJugador = document.querySelector("#jugador img.seleccionado").getAttribute("src").split("/").pop().split("Jugador")[0];
        const seleccionMaquina = posibilidades[Math.floor(Math.random() * posibilidades.length)];

        console.log(seleccionJugador);
        console.log(seleccionMaquina);


        maquinaElemento.src = `img/${seleccionMaquina}Ordenador.png`;
        
        partidasJugadas++;
        actualSpan.textContent = partidasJugadas;

        let resultado = "";
        if (seleccionJugador === seleccionMaquina) {
            resultado = "Empate";
        } else if (
            (seleccionJugador === "piedra" && seleccionMaquina === "tijera") ||
            (seleccionJugador === "papel" && seleccionMaquina === "piedra") ||
            (seleccionJugador === "tijera" && seleccionMaquina === "papel")
        ) {
            resultado = `Gana ${nombreJugador}`;
        } else {
            resultado = "Gana la máquina";
        }

        const li = document.createElement("li");
        li.textContent = resultado;
        historialUl.appendChild(li);

        if (partidasJugadas === totalPartidas) {
            alert("Fin del juego");
        }
    });

    botonReset.addEventListener("click", function() {
        nombreJugador = "";
        totalPartidas = 0;
        partidasJugadas = 0;

        nombreInput.value = "";
        partidasInput.value = "";
        nombreInput.disabled = false;
        partidasInput.disabled = false;
        totalSpan.textContent = "0";
        actualSpan.textContent = "0";
        maquinaElemento.src = "img/defecto.png";
        historialUl.innerHTML = "";

        alert("Nueva partida");
    });
});