function operacionesMatematicas(num1, num2, num3) {
    var uno = num1+num2+num3;
    var dos = uno-num3;
    var tres;
    if (dos>0) {
        tres = dos;
    }
    else {
        tres = dos * (-1);
    }
    var cuatro = Math.round(tres);
    var cinco = Math.trunc(cuatro);
    var seis;
    if (cinco<10) {
        seis = 10;
    }
    else {
        seis = cinco;
    }
    var siete;
    if (cinco<100) {
        seis = cinco;
    }
    else {
        seis = 100;
    }
    var ocho = 1 + "";

    console.log(uno);
    console.log(dos);
    console.log(tres);
    console.log(cuatro);
    console.log(cinco);
    console.log(seis);
    console.log(siete);
    console.log(ocho);
}