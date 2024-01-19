let colors = [];

for (let i = 0; i < 10; i++) {
    let R = parseInt(Math.random() * 256);
    let G = parseInt(Math.random() * 256);
    let B = parseInt(Math.random() * 256);

    let color = [R, G, B];
    colors.push(color);
}

for (let i = 0; i < 1001; i++) {
    let n = parseInt(Math.random() * 11);
    let div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = `rgb(${colors[n]})`;
    document.body.appendChild(div);
}