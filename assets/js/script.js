// Starting Variables
let userScore = "0";
let compScore = "0";
let draws = "0"
let userChoice;
let compChoice;
let result;

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let lizard = document.getElementById("lizard")
let spock = document.getElementById("spock")


// Game options
const gameOptions = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * Update scores on the html
 */
function updateScore(){
    document.getElementById("player-wins").textContent = userScore;
    document.getElementById("player-losses").textContent = compScore;
    document.getElementById("draws").textContent = draws;

}

// Remove Console.Log() after testing
/**
 * Updates variable userChoice when the user selects their move 
 */
function handleUserChoice(choice) {
    userChoice = choice;
    getComputerChocie();
    gameWinner()
    updateScore()
    gameResult()
    updateGameResult()
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
        draws++;
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
        result = "ShelBot wins!";
        compScore++;
    }
    console.log(result);
}

function gameResult() {
    const gameResultDisplay = document.getElementById("display-result");
    gameResultDisplay.innerHTML = "";
    
    //Add game results div and text
    const gameResultDiv = document.createElement("div");
    gameResultDiv.id = "display-game-result";
    const displayGameResult = document.createElement("h2");
    displayGameResult.textContent = `${result}`;
    gameResultDisplay.appendChild(gameResultDiv);
    gameResultDiv.appendChild(displayGameResult);
    console.log("gameResult() was called")
}

function updateGameResult() {
    //Clear game results container
    const gameResultContainer = document.getElementById("game-result");
    gameResultContainer.innerHTML = "";

    //Add user results div and text
    const userChoiceDiv = document.createElement("div");
    userChoiceDiv.id = "user-choice";
    const userChoiceHeading = document.createElement("h2");
    // ${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}` attribution to 
    userChoiceHeading.textContent = `You: ${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}`;
    gameResultContainer.appendChild(userChoiceDiv);
    userChoiceDiv.appendChild(userChoiceHeading);
    
    // Add User choice image
    const userChoiceImg = document.createElement("img");
    userChoiceImg.id = "user-img";
    userChoiceImg.alt = "Image of users choice";
    userChoiceImg.src = `assets/images/${userChoice}.webp`;
    userChoiceDiv.appendChild(userChoiceImg);
    

    //Add comp results div and text
    const compChoiceDiv = document.createElement("div");
    compChoiceDiv.id = "comp-choice";
    const compChoiceHeading = document.createElement("h2");
    // ${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}` attribution to 
    compChoiceHeading.textContent = `ShelBot: ${compChoice.charAt(0).toUpperCase()}${compChoice.slice(1)}`;
    gameResultContainer.appendChild(compChoiceDiv);
    compChoiceDiv.appendChild(compChoiceHeading);

    // Add comp choice image
    const compChoiceImg = document.createElement("img");
    compChoiceImg.id = "comp-img";
    compChoiceImg.alt = "Image of computers choice";
    compChoiceImg.src = `assets/images/${compChoice}.webp`;
    compChoiceDiv.appendChild(compChoiceImg);
    
}

function resetGame(){
    userScore = "0";
    compScore = "0";
    document.getElementById("player-wins").textContent = "0";
    document.getElementById("player-losses").textContent = "0";
    document.getElementById("draws").textContent = "0";
    const gameResultContainer = document.getElementById("game-result");
    gameResultContainer.innerHTML = "";

}

// Event listeners
rock.addEventListener("click", function() {
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