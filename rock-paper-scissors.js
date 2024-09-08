function getComputerChoice() {
    const MAX = 2;
    let randomInt = 0;
    let outcome = ""; 


    randomInt = Math.round(Math.random() * MAX);

    switch (randomInt) {
        case 0:
            outcome = "rock";
        case 1:
            outcome = "paper";
        case 2:
            outcome = "scissors";
    }
    
    return outcome;
}