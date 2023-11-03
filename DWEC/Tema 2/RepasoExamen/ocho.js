function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var IMC = (peso/(altura*altura));
    var resultado;

    if (IMC<18.5) {
        resultado = "IMC bajo";
    }
    else if (IMC<24.9) {
        resultado = "IMC normal";
    }
    else{
        resultado = "IMC alto";
    }
    alert(resultado);
}

