function start() {
    let player = prompt("choose your option", "rock");
    document.getElementById("first").innerHTML = "Your option is: " + player;   
}
let computersChoice

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
}

