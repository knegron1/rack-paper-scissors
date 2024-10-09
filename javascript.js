// declare variables for game

let computerChoice;
let userChoice;


// function which random selects the choice for the computer player in the game
function getComputerChoice() {
    // randomly selects a number
    let choice = Math.random();
    
    // compare that number to fairly choose the result
    if (choice < 0.33) {
        return computerChoice = "rock";
    }
    else if (choice > 0.33 && choice < 0.67) {
        return computerChoice = "paper";
    }
    else {
        return computerChoice = "scissors";
    }
}





console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());