function calcularVentas(articulosVendidos, precios) {
    let ventas = 0;
    for (let i = 0; i < articulosVendidos.length; i++) {
        ventas += articulosVendidos[i]*precios[i];
    }
    return ventas;
}

let articulosVendidos = [4,5,6,3,4];
let precios = [12,8,6,2,7];

document.write(`Ventas totales: ${calcularVentas(articulosVendidos, precios)}€`);