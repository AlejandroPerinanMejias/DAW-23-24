let players = [
    peri = {
        "name" : "Alejandro Perinan",
        "initialLevelPoints" : 0,
        "mediumLevelPoints" : 0,
        "advancedLevelPoints" : 0,
    }
];

function addNewPlayer() {
    let playerName = document.getElementById("playerName").value;
    let player = {
        "name" : playerName,
        "initialLevelPoints" : 0,
        "mediumLevelPoints" : 0,
        "advancedLevelPoints" : 0,
    };
    players.push(player);
}

function modifyPlayer() {
    let playerName = document.getElementById("playerName").value;
    let points = parseInt(document.getElementById("points").value);
    let level = document.getElementById("level").value;
    for (let i = 0; i < players.length; i++) {
        if (players[i]["name"] == playerName) {
            players[i][level] += points;
        };
    }
}

function addPoints() {
    let playerName = document.getElementById("playerName").value;

    let flag = true;
    for (let i = 0; i < players.length; i++) {
        if (players[i]["name"] == playerName) {
            flag = false;
        };
    }

    if (flag) {
        addNewPlayer();
        modifyPlayer();
    } else modifyPlayer();
    
console.log(players);
}

function showPlayer() {
    let playerName = document.getElementById("showPlayerName").value;
    for (let i = 0; i < players.length; i++) {
        if (players[i]["name"] == playerName) {
            console.log(players);
            document.getElementById("playerStats").innerHTML = `${players[i]["name"]} \nPuntos niveles iniciales: ${players[i]["initialLevelPoints"]} \nPuntos niveles medios: ${players[i]["mediumLevelPoints"]} \nPuntos niveles avanzados: ${players[i]["advancedLevelPoints"]}`;
        };
    }
}