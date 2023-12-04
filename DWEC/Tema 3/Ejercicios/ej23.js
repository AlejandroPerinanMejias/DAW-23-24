function palabrasComunes() {
    let frase1 = document.getElementById("frase1").value.split(" ");
    let frase2 = document.getElementById("frase2").value.split(" ");
    let palabrasComunes = [];
    for (var i=0; i<frase1.length; i++) {
        for (var z=0; z<frase2.length; z++) {
            if (frase1[i]==frase2[z] && !palabrasComunes.includes(frase1[i])) {
                palabrasComunes.push(frase1[i]);
            }
        }
    }
    palabrasComunes.sort();
    for (var i=0; i<palabrasComunes.length; i++) {
        console.log(i+1 + ": " + palabrasComunes[i]);
    }
}