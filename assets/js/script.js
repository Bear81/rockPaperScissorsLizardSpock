// Starting Variables
let userScore = "0";
let compScore = "0";
let userChoice;
let compChoice;
let result;

// Game options
const gameOptions = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * Update scores on the html
 */
function updateScore(){
    document.getElementById("player-score").textContent = userScore;
    document.getElementById("comp-score").textContent = compScore;
}

// Remove Console.Log() after testing
/**
 * Updates variable userChoice when the user selects their move
 * @param {*} choice 
 */
function getUserChoice(choice) {
    userChoice = choice;
    getComputerChocie();
    gameWinner()
    updateScore()
    console.log(`User chooses: ${userChoice}`);
}

// Remove Console.Log() after testing
/**
 * Generates computer chocie randomly
 */
function getComputerChocie() {
    const randomIndex = Math.floor(Math.random() * gameOptions.length);
    compChoice = gameOptions[randomIndex];
    console.log(`Computer chooses: ${compChoice}`);
}

// Remove Console.Log() after testing
/**
 * Logic to determine the winner of each game
 */
function gameWinner() {
    console.log('gameWinner function called');
    if (userChoice === compChoice) {
        result = "It\s a draw";
    }
    else if (
        (userChoice === "rock" && (compChoice === "scissors" || compChoice === "lizard")) ||
        (userChoice === "paper" && (compChoice === "rock" || compChoice === "spock")) ||
        (userChoice === "scissors" && (compChoice === "paper" || compChoice === "lizard")) ||
        (userChoice === "lizard" && (compChoice === "paper" || compChoice === "spock")) ||
        (userChoice === "spock" && (compChoice === "rock" || compChoice === "scissors"))
    ) {
        result = "You win!";
        userScore++;
    } else {
        result = "Computer wins!";
        compScore++;
    }
    console.log(result);
}

// Event listeners


