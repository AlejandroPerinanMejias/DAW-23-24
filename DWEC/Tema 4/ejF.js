let monederos = [];

class Monedero {
    nombre; //Propiedades
    b5;
    b10;
    b20;
    constructor (nombre, b5, b10, b20) {    //Constructor
        this.nombre = nombre;
        this.b5 = b5;
        this.b10 = b10;
        this.b20 = b20;
    }
    getNombre() {   //Getters
        return this.nombre;
    }
    getb5() {
        return this.b5;
    }
    getb10() {
        return this.b10;
    }
    getb20() {
        return this.b20;
    }
    getTotal() {    //Devuelve la cantidad total de dinero que hay en un monedero
        return (this.b5*5)+(this.b10*10)+(this.b20*20);
    }
    setNombre (nombre) {    //Setters
        this.nombre = nombre;
    }
    setb5 (b5) {
        this.b5 = b5;
    }
    setb10 (b10) {
        this.b10 = b10;
    }
    setb20 (b20) {
        this.b20 = b20;
    }
    static mostDinero() { //Metodo que devuelve el monedero con más dinero
        let granMonedero = m1;

        if (m1.getTotal() == m2.getTotal() == m3.getTotal() == m4.getTotal() == m5.getTotal() == m6.getTotal() == m7.getTotal()) {
            granMonedero = "Cualquiera"
        }
        
        for (let i = 0; i < monederos.length; i++) {
            if (monederos[i].getTotal() > granMonedero.getTotal()) {
                granMonedero = monederos[i];
            }
        }
        return granMonedero;
    }
}

let m1 = new Monedero("Monedero 1", 0, 0, 2);   //Creación de monederos
let m2 = new Monedero("Monedero 2", 0, 4, 0);
let m3 = new Monedero("Monedero 3", 8, 1, 0);
let m4 = new Monedero("Monedero 4", 2, 0, 1);
let m5 = new Monedero("Monedero 5", 0, 2, 1);
let m6 = new Monedero("Monedero 6", 2, 2, 0);
let m7 = new Monedero("Monedero 7", 0, 3, 0);

monederos.push(m1, m2, m3, m4, m5, m6, m7);

function mostMoney() {
    let granMonedero = Monedero.mostDinero();
    document.getElementById("output").innerHTML = `La cartera con más dinero es ${granMonedero["nombre"]}`;
}