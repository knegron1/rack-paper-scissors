// declare variables for game

let computerChoice;
let userChoice;


// function which random selects the choice for the computer player in the game
function getComputerChoice() {
    // randomly generate a number
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

// functions which gets the human player's choice
function getHumanChoice() {
    // prompt the player for their choice, and log that choice into a variable
    let choice = prompt("Enter rock, paper, or scissors.");
    // pass that variable to a global scope
    return userChoice = choice;
}



console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

console.log(getHumanChoice());