let rounds = 0;
const MAXROUNDS = 10;
setRoundDisplay(0, MAXROUNDS);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const newGameBtn = document.getElementById("new-game-btn");
const computerScoreElem = document.getElementById("computer-score");
const humanScoreElem = document.getElementById("human-score");
const displayComputerChoice = document.getElementById("display-computer-choice")
const displayHumanChoice = document.getElementById("display-human-choice")
const info = document.getElementById("info-text");

let computerScore="0";
let humanScore="0";

rockBtn.disabled = true;
paperBtn.disabled = true;
scissorsBtn.disabled = true;

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

// Plays a single round of rock paper scissors with the computer
// Use play game to play several rounds
function playGame(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        console.log("Tie!");
        displayHumanChoice.innerText = capitalizeFirstLetter(humanChoice);
        displayComputerChoice.innerText = capitalizeFirstLetter(computerChoice);
        info.innerText = "Tie!"
    } else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        console.log ("Computer wins!");
        info.innerText = "Computer wins!"
        displayHumanChoice.innerText = "Rock";
        displayComputerChoice.innerText = "Paper";
        computerScoreElem.innerText = ++computerScore;
    } else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        console.log ("Human wins!");
        info.innerText = "Human wins!";
        displayHumanChoice.innerText = "Rock";
        displayComputerChoice.innerText = "Scissors";
        humanScoreElem.innerText = ++humanScore;
    } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        console.log ("Computer wins!");
        info.innerText = "Computer wins!";
        displayHumanChoice.innerText = "Paper";
        displayComputerChoice.innerText = "Scissors";
        computerScoreElem.innerText = ++computerScore;
    } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        console.log ("Human wins!");
        info.innerText ="Human wins!";
        displayHumanChoice.innerText = "Paper";
        displayComputerChoice.innerText = "Rock";
        humanScoreElem.innerText = ++humanScore;
    } else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        console.log ("Computer wins!");
        info.innerText = "Computer wins!";
        displayHumanChoice.innerText = "Scissors";
        displayComputerChoice.innerText = "Rock";
        computerScoreElem.innerText = ++computerScore;
    } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
        console.log ("Human wins!");
        info.innerText = "Human wins!";
        displayHumanChoice.innerText = "Scissors";
        displayComputerChoice.innerText = "Paper";
        humanScoreElem.innerText = ++humanScore;
    } else {
        console.log ("Input error!");
    }
    rounds++;

    setRoundDisplay(rounds,MAXROUNDS);

    // Copied from the internet
    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
    
    // Ends games 
    if (rounds == MAXROUNDS) {
        // Disable the buttons for playing
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        newGameBtn.disabled = false;

        rounds = 0;
    }
    return 0;
}

function resetScore() {
    computerScoreElem.innerText = 0;
    computerScore = 0;
    humanScoreElem.innerText = 0;
    humanScore = 0;
}


function setRoundDisplay(rounds, MAXROUNDS) {
    const numberOfRounds = document.getElementById("number-of-rounds");
    numberOfRounds.innerText = `${rounds}/${MAXROUNDS}`
}

function newGame() {
    // Enables the buttons and disables newgame
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    newGameBtn.disabled = true;

    info.innerText = "Placeholder";
    displayHumanChoice.innerText = "None";
    displayComputerChoice.innerText = "None";

    resetScore();
    setRoundDisplay(0,MAXROUNDS);
}


// Events
newGameBtn.addEventListener("click", newGame)

const btnGroup = document.querySelector(".game-controls");

btnGroup.addEventListener("click", e => {
    console.log(e.target);
    let targetText = e.target.textContent; // Assigning to variable is easier and prevents the system from finding the variable several times
    let humanBtnChoice = "";

    switch(targetText) {
        case 'Rock':
            console.log("Rock");
            humanBtnChoice = targetText;
            playGame(humanBtnChoice, getComputerChoice());
            break;
        case 'Paper':
            console.log("Paper");
            humanBtnChoice = targetText;
            playGame(humanBtnChoice, getComputerChoice());
        break;     
        case 'Scissors':
            console.log("Scissors");
            humanBtnChoice = targetText;
            playGame(humanBtnChoice, getComputerChoice());
        break;       
    }
})


