function rectangle(base, h) {
    let rectangle = document.getElementById("rectangle");
    rectangle.innerHTML = `${"#".repeat(base)}<br>`;
    for (let i = 0; i < h-2; i++) {
        rectangle.innerHTML += `#${" ".repeat(base-2)}#<br>`;
    }
    rectangle.innerHTML += `${"#".repeat(base)}`;
}

rectangle(10, 5);