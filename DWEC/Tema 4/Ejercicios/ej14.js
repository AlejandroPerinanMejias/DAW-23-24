let products = [
    
];

function addNewProduct() {
    let productName = document.getElementById("addProductName").value;
    let productPrice = parseInt(document.getElementById("addProductPrice").value);
    let productDiscount = parseInt(document.getElementById("addProductDiscount").value);
    let productCategory = document.getElementById("addProductCategory").value;

    let product = {
        "name" : productName,
        "price" : productPrice,
        "discount" : productDiscount,
        "category" : productCategory
    };

    products.push(product);
}

function modifyProduct() {
    let productName = document.getElementById("addProductName").value;
    let productPrice = parseInt(document.getElementById("addProductPrice").value);
    let productDiscount = parseInt(document.getElementById("addProductDiscount").value);
    let productCategory = document.getElementById("addProductCategory").value;
    
    for (let i = 0; i < products.length; i++) {
        if (products[i]["name"] == productName) {
            products[i]["price"] = productPrice;
            products[i]["discount"] = productDiscount;
            products[i]["category"] = productCategory;
        };
    }
}

function addProduct() {
    let productName = document.getElementById("addProductName").value;
    
    let flag = true;
    for (let i = 0; i < products.length; i++) {
        if (products[i]["name"] == productName) {
            flag = false;
        };
    }

    if (flag) {
        addNewProduct();
        modifyProduct();
    } else modifyProduct();
}

let indice = -1;
function showProducts() {
    indice++;
    if (indice > products.length-1) {
        indice = 0;
    }
    let outputProduct = document.getElementById("showProduct");
    outputProduct.innerHTML = `<strong>${products[indice]["name"]}</strong>\nPrecio: ${products[indice]["price"]}€\nDescuento: ${products[indice]["discount"]}%\nCategoria: ${products[indice]["category"]}\n <strong>Precio con descuento: ${products[indice]["price"] - (products[indice]["price"] * products[indice]["discount"] / 100)}</strong>`;
}