let players = [
    peri = {
        "ID" : 1,
        "name" : "Alejandro Perinan",
    }
];

function addPlayer() {
    let playerName = document.getElementById("playerName").value;
    let playerLevel = document.getElementById("level").value;
    let player = {
        "ID" : players.length + 1,
        "name" : playerName,
        "initialLevelPoints" : playerLevel
    }
    players.push(player);
}

function addPoints() {
    let playerName = document.getElementById("playerName").value;
    let flag = true;
    for (let i = 0; i < players.length; i++) {
        if (players[i]["name"] == playerName) {
            
        };
    }
    let points = document.getElementById("points").value;

}