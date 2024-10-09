// declare variables for game

let computerChoice;
let userChoice;
let humanScore = 0;
let computerScore = 0;


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
    // make the variable case insensitive
    userChoice = choice.toLowerCase();
    // pass that variable to a global scope
    return userChoice;
}

function playRound(userChoice, computerChoice) {
    if (userChoice === "rock" && computerChoice === "paper") {
        ++computerScore;
        console.log("You lose! Paper beats rock.");
    }
    else if (userChoice === "rock" && computerChoice === "scissors") {
        ++humanScore;
        console.log("You win! Rock beats scissors.");
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        ++humanScore;
        console.log("You win! Paper beats rock.");
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        ++computerScore;
        console.log("You lose! Scissors beat paper.");
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        ++computerScore;
        console.log("You lose! Rock beats scissors.");
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        console.log("You win! Scissors beat paper.");
    }
    else {
        console.log("Tie! The score doesn't change");
    }
}



console.log(getComputerChoice());

console.log(getHumanChoice());

playRound(userChoice, computerChoice);