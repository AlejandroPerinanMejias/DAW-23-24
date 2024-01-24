function ordena_limites(ini, fin) {
    if (ini > fin) {
        let aux = ini;
        ini = fin;
        fin = aux;
    } else alert("Todo correcto");
}

ordena_limites(10, 5);