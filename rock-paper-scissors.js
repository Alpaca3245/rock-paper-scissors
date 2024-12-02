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

// Plays a single round of rock paper scissors with the computer
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

function playGame() {
    const maxRounds = 5; // Number of rounds

    for (let i = 0; i < maxRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection)
        console.log("----------------------------");
    }
}

// Buttons events
const btnGroup = document.querySelector(".btnGroup");

btnGroup.addEventListener("click", e => {
    console.log(e.target);
    let targetText = e.target.textContent; // Assigning to variable is easier and prevents the system from finding the variable several times

    switch(targetText) {
        case 'Rock':
            console.log("Rock");
            break;
        case 'Paper':
            console.log("Paper");
        break;     
        case 'Scissors':
            console.log("Scissors");
        break;       
    }
})


