let products = [];

function addNewProduct() {
    let productName = document.getElementById("productName").value;
    let productCategory = document.getElementById("productCategory").value;
    let productPrice = document.getElementById("productPrice").value;
    let productStock = document.getElementById("productStock").value;
    let productID = document.getElementById("productID").value;
    let productDate = document.getElementById("productDate").value;
    let product = {
        "name" : productName,
        "category" : productCategory,
        "price" : productPrice,
        "stock" : productStock,
        "ID" : productID,
        "date" : productDate,
        "solds" : 0
        
    };
    products.push(product);
}

function modifyProduct() {
    let productName = document.getElementById("productName").value;
    let productCategory = document.getElementById("productCategory").value;
    let productPrice = document.getElementById("productPrice").value;
    let productStock = document.getElementById("productStock").value;
    let productID = document.getElementById("productID").value;
    let productDate = document.getElementById("productDate").value;
    for (let i = 0; i < products.length; i++) {
        if (products[i]["name"] == productName) {
            products[i]["category"] = productCategory;
            products[i]["price"] = productPrice;
            products[i]["stock"] = productStock;
            products[i]["ID"] = productID;
            products[i]["date"] = productDate;
        };
    }
}

function checkProduct() {
    let productName = document.getElementById("productName").value;

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

function checkStock() {
    let productName = document.getElementById("productName").value;

    for (let i = 0; i < products.length; i++) {
        if (products[i]["name"] == productName) {
            document.getElementById("outputStock").innerHTML = `Stock disponible de ${products[i]["name"]}: ${products[i]["stock"]}`;
        };
    }
}

function sell() {
    let productName = document.getElementById("productName").value;

    for (let i = 0; i < products.length; i++) {
        if (products[i]["name"] == productName) {
            products[i]["solds"]++;
            products[i]["stock"]--;
        };
    }
}

function stockInform() {
    let mostSellProduct = products[0];
    let minorStockProduct = products[0];

    for (let i = 0; i < products.length; i++) {
        if (products[i]["solds"] > mostSellProduct) {
            mostSellProduct = products[i];
        };
        if (products[i]["stock"] < minorStockProduct) {
            minorStockProduct = products[i];
        };
    }

    document.getElementById("outputInform").innerHTML = `El producto mas vendido es: ${mostSellProduct["name"]}\nEl producto con menos stock es ${minorStockProduct["name"]}`;
}