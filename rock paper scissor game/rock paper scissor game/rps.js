// Variables to keep track of scores and rounds
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 10;

// Function to generate computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner of a single round
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

// Function to update the score display
function updateScore() {
    document.getElementById('score').innerText = `Player: ${playerScore} 
     Computer: ${computerScore} 
     Rounds: ${roundsPlayed}/${maxRounds}`;
}

// Function to check if the game has ended
function checkGameEnd() {
    if (roundsPlayed >= maxRounds) {
        if (playerScore > computerScore) {
            alert("Game Over! You win the game!");
           
        } else if (playerScore < computerScore) {
            alert("Game Over! You lose the game!");
        } else {
            alert("Game Over! It's a tie!");
        }
        // Reset the game automatically after showing the result
        resetGame();
    }
}

// Event listeners for player choices
document.getElementById('rock').addEventListener('click', function() {
    if (roundsPlayed < maxRounds) {
        alert(playRound('rock'));
        roundsPlayed++;
        updateScore();
        checkGameEnd();
    }
});

document.getElementById('paper').addEventListener('click', function() {
    if (roundsPlayed < maxRounds) {
        alert(playRound('paper'));
        roundsPlayed++;
        updateScore();
        checkGameEnd();
    }
});

document.getElementById('scissor').addEventListener('click', function() {
    if (roundsPlayed < maxRounds) {
        alert(playRound('scissor'));
        roundsPlayed++;
        updateScore();
        checkGameEnd();
    }
});

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    updateScore();
}

// Event listener for reset button
document.getElementById('reset').addEventListener('click', resetGame);

