// Starting Variables
let userScore = "0";
let compScore = "0";
let userChoice;
let compChoice;
let result;

// Game options
const gameOptions = ["rock", "paper", "scissors", "lizard", "spock"]

// Remove Console.Log() after testing
/**
 * Updates variable userChoice when the user selects their move
 * @param {*} choice 
 */
function getUserChoice(choice){
    userChoice = choice;
    getComputerChocie();
    console.log(`User chooses: ${userChoice}`);
}

// Remove Console.Log() after testing

/**
 * Generates computer chocie randomly
 */
function getComputerChocie(){
    const randomIndex = Math.floor(Math.random() * gameOptions.length);
    compChoice = gameOptions[randomIndex];
    console.log(`Computer chooses: ${compChoice}`)
}
