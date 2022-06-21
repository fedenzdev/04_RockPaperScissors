let player
let computersChoice

// Player's Selection
document.getElementById("playersBtn").addEventListener('click', start);
function start() {
    document.getElementById("first").innerHTML = "Your option is: "
}

// Computer's Selection
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

/* <h2>JavaScript addEventListener()</h2>
<p>This example uses the addEventListener() method to attach a click event to a button.</p>
<button id="myBtn">Try it</button>
<p id="demo"></p>
<script>
document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script> */

