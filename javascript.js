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


//function which outputs what the human choice and computer choice was
function printChoices() {
    return console.log(`You chose ${userChoice} and the computer chose ${computerChoice}.`);
}

// function which plays one round of rock, paper, scissors, and increments the total score
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
        console.log("You lose! Scissors beats paper.");
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        ++computerScore;
        console.log("You lose! Rock beats scissors.");
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        console.log("You win! Scissors beats paper.");
    }
    else {
        console.log("Tie! The score doesn't change.");
    }
}

// functions which gets the human player's choice
   const buttons = document.querySelectorAll("button");

   buttons.forEach((button) => {
    button.addEventListener("click", () => {
        userChoice = button.id;
        getComputerChoice();
        printChoices();
        playRound(userChoice, computerChoice);
    })
   })



// // function play game, which implements 5 rounds of the game, and announces the winner
// function playGame() {
//     for (n = 1; n < 6; n++) {
//         getHumanChoice();
//         getComputerChoice();
//         printChoices();
//         playRound(userChoice, computerChoice);
//         console.log(`Round ${n} completed. The current score is human: ${humanScore} and computer: ${computerScore}`);
//     }
//     if (humanScore > computerScore) {
//         console.log("You win! Congratulations");
//     }
//     else {
//         console.log("You lose! Better luck next time.");
//     }
// }

// playGame();