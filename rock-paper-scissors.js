humanScore = 0;
computerScore = 0;

// Returns a random choice of rock, paper or scissors as a string
function getComputerChoice() {
    const MAX = 2;
    let randomInt = 0;
    let computerChoice = ""; 


    randomInt = Math.round(Math.random() * MAX); // Chooses a number from 0 to MAX, and rounds to nearest integer

    switch (randomInt) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
    }

    console.log ("Computer choice: " + computerChoice);
    return computerChoice;
}

// Prompt that asks user to type in rock, paper or scissors
function getHumanChoice() {
    humanChoice = prompt("Choose by inputing \"Rock\" \"Paper\" or \"Scissors\"");
    console.log("Human choice: " + humanChoice)
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie!");
    } else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        console.log ("Computer wins!");
    } else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        console.log ("Human wins!");
    } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        console.log ("Computer wins!");
    } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        console.log ("Human wins!");
    } else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        console.log ("Computer wins!");
    } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
        console.log ("Human wins!");
    } else {
        console.log ("Input error!");
    }
    return 0;
}

function playRoundTest () {
    playRound(getHumanChoice(), getComputerChoice());
}