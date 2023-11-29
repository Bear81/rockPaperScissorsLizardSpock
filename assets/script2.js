// Starting Variables
let userScore = 0;
let compScore = 0;
let draws = 0;
let userChoice;
let compChoice;
let result;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

// Game options
const gameOptions = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * Update scores on the html
 */
function updateScore() {
    const playerWins = document.getElementById("player-wins");
    const playerLosses = document.getElementById("player-losses");
    const drawsElement = document.getElementById("draws");
    playerWins.textContent = userScore;
    playerLosses.textContent = compScore;
    drawsElement.textContent = draws;
}

// Function to open the popup
function openRulesPopup() {
    const popup = document.getElementById("rules-popup");
    popup.style.display = "flex";
}

// Function to close the popup
function closeRulesPopup() {
    const popup = document.getElementById("rules-popup");
    popup.style.display = "none";
}

/**
 * Updates variable userChoice when the user selects their move 
 */
function handleUserChoice(choice) {
    userChoice = choice;
    getComputerChoice();
    gameWinner();
    updateScore();
    gameResult();
    updateGameResult();
}

/**
 * Generates computer choice randomly
 */
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * gameOptions.length);
    compChoice = gameOptions[randomIndex];
}

/**
 * Logic to determine the winner of each game
 */
function gameWinner() {
    if (userChoice === compChoice) {
        result = "It's a draw";
        draws++;
    } else if (
        (userChoice === "rock" && (compChoice === "scissors" || compChoice === "lizard")) ||
        (userChoice === "paper" && (compChoice === "rock" || compChoice === "spock")) ||
        (userChoice === "scissors" && (compChoice === "paper" || compChoice === "lizard")) ||
        (userChoice === "lizard" && (compChoice === "paper" || compChoice === "spock")) ||
        (userChoice === "spock" && (compChoice === "rock" || compChoice === "scissors"))
    ) {
        result = "You win!";
        userScore++;
    } else {
        result = "ShelBot wins!";
        compScore++;
    }
}

function gameResult() {
    const gameResultDisplay = document.getElementById("display-result");
    gameResultDisplay.innerHTML = "";

    // Add game results div and text
    const gameResultDiv = document.createElement("div");
    gameResultDiv.id = "display-game-result";
    const displayGameResult = document.createElement("h2");
    displayGameResult.textContent = result;
    gameResultDisplay.appendChild(gameResultDiv);
    gameResultDiv.appendChild(displayGameResult);
}

function updateGameResult() {
    // Clear game results container
    const gameResultContainer = document.getElementById("game-result");
    gameResultContainer.innerHTML = "";

    // Add user results div and text
    const userChoiceDiv = document.createElement("div");
    userChoiceDiv.id = "user-choice";
    const userChoiceHeading = document.createElement("h2");
    userChoiceHeading.textContent = `You: ${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}`;
    gameResultContainer.appendChild(userChoiceDiv);
    userChoiceDiv.appendChild(userChoiceHeading);

    // Add User choice image
    const userChoiceImg = document.createElement("img");
    userChoiceImg.id = "user-img";
    userChoiceImg.alt = "Image of user's choice";
    userChoiceImg.src = `assets/images/${userChoice}.webp`;
    userChoiceDiv.appendChild(userChoiceImg);


    // Add comp results div and text
    const compChoiceDiv = document.createElement("div");
    compChoiceDiv.id = "comp-choice";
    const compChoiceHeading = document.createElement("h2");
    compChoiceHeading.textContent = `ShelBot: ${compChoice.charAt(0).toUpperCase()}${compChoice.slice(1)}`;
    gameResultContainer.appendChild(compChoiceDiv);
    compChoiceDiv.appendChild(compChoiceHeading);

    // Add comp choice image
    const compChoiceImg = document.createElement("img");
    compChoiceImg.id = "comp-img";
    compChoiceImg.alt = "Image of computer's choice";
    compChoiceImg.src = `assets/images/${compChoice}.webp`;
    compChoiceDiv.appendChild(compChoiceImg);
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    draws = 0;
    const playerWins = document.getElementById("player-wins");
    const playerLosses = document.getElementById("player-losses");
    const drawsElement = document.getElementById("draws");
    playerWins.textContent = "0";
    playerLosses.textContent = "0";
    drawsElement.textContent = "0";
    const gameResultContainer = document.getElementById("game-result");
    gameResultContainer.innerHTML = "";
}

// Event listeners
rock.addEventListener("click", function () {
    handleUserChoice("rock");
});

paper.addEventListener("click", function () {
    handleUserChoice("paper");
});

scissors.addEventListener("click", function () {
    handleUserChoice("scissors");
});

lizard.addEventListener("click", function () {
    handleUserChoice("lizard");
});

spock.addEventListener("click", function () {
    handleUserChoice("spock");
});