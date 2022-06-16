let player
let computersChoice

function start() {
    player = prompt("choose your option", "rock");
    document.getElementById("first").innerHTML = "Your option is: " + player;   
}

function computer() {
    let random = Math.floor(Math.random()*3+1);
    if (random === 1) {
    computersChoice = "rock";
    }
    if (random === 2) {
        computersChoice = "paper";
    }
    if (random === 3) {
        computersChoice = "scissors";
    }
    document.getElementById("computerA").innerHTML = "Computers choice is: " + computersChoice;

    getResult()
}

function getResult () {
    if ( player === computersChoice) {
        document.getElementById("result").innerHTML = "Its a tie";
    }
    if ( player === "rock" && computersChoice === "paper") {
        document.getElementById("result").innerHTML = "Computer Won";
    }
    if ( player === "rock" && computersChoice === "scissors") {
        document.getElementById("result").innerHTML = "Player Won";
    }
}