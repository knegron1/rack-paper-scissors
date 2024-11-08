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
    return `You chose ${userChoice} and the computer chose ${computerChoice}. `;
}

// function which plays one round of rock, paper, scissors, and increments the total score
function playRound(userChoice, computerChoice) {
    if (userChoice === "rock" && computerChoice === "paper") {
        ++computerScore;
        return "You lose! Paper beats rock.";
    }
    else if (userChoice === "rock" && computerChoice === "scissors") {
        ++humanScore;
        return "You win! Rock beats scissors.";
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        ++humanScore;
        return "You win! Paper beats rock.";
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        ++computerScore;
        return "You lose! Scissors beats paper.";
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        ++computerScore;
        return "You lose! Rock beats scissors.";
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        return "You win! Scissors beats paper.";
    }
    else {
        return "Tie! The score doesn't change.";
    }
}

// function which outputs what the overall score is
function totalScore() {

}

// querySelect buttons and empty paragraph from HTML
   const buttons = document.querySelectorAll("button");
   const result = document.querySelector("p");

   // event listener for each button click which initiates the game of rock paper scissors
   buttons.forEach((button) => {
    button.addEventListener("click", () => {
        userChoice = button.id;
        getComputerChoice();
        result.textContent = printChoices() + playRound(userChoice, computerChoice);
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