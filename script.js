let humanScore = 0;
let computerScore = 0;

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
        return "Scissor";
    }
    

}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore += 1;
        console.log ("Player Wins" + "Player score = " + humanScore + "Computer Score = " + computerScore)
    } else if(humanChoice === "Rock" && computerChoice === "Scissor") {
        humanScore += 1;
        console.log ("Player Wins" + "Player score = " + humanScore + "Computer Score = " + computerScore)
    } else if(humanChoice === "Scissor" && computerChoice === "Paper") {
        humanScore += 1;
        console.log ("Player Wins" + "Player score = " + humanScore + "Computer Score = " + computerScore)
    } else if(humanChoice === "Scissor" && computerChoice === "Rock") {
        computerScore += 1;
        console.log ("Computer Wins" + "Player score = " + humanScore + "Computer Score = " + computerScore)
    } else if(humanChoice === "Paper" && computerChoice === "Scissor"){
        computerScore += 1;
        console.log ("Computer Wins" + "Player score = " + humanScore + "Computer Score = " + computerScore)
     } else if(humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore += 1;
        console.log ("Computer Wins" + "Player score = " + humanScore + "Computer Score = " + computerScore)
      } else {
        console.log ("tie" + "Player score = " + humanScore + "Computer Score = " + computerScore)
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

