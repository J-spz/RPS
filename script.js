function getHumanChoice() {
    choice = prompt("Rock, Paper, Scissor?")
    console.log("player has chosen " + choice);
    return choice
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        console.log("computer has chosen Rock");
        return "Rock";
    } else if (choice === 2) {
        console.log("computer has chosen Paper");
        return "Paper";
    } else {
        console.log("computer has chosen Scissors");
        return "Scissors";
    }
}

function playRound(human, computer) {
    if (human === computer) return "tie";

    if (
        (human === "Rock" && computer === "Scissors") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissors" && computer === "Paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const human = getHumanChoice();
        const computer = getComputerChoice();

        const result = playRound(human, computer);

        if (result === "win") humanScore++;
        else if (result === "lose") computerScore++;

        console.log(`Round ${i + 1}: ${result}`);
    }

    console.log(`Final Score: Human ${humanScore}, Computer ${computerScore}`);
}    

playGame();