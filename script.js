// 2 variables to keep track of scores, initialized to 0 to define their type
let playerScore = 0;
let computerScore = 0;

// 2 variables to store player and cpu choices
let playerChoice;
let computerChoice;

// get references to html elements
const playerDisplayPoints = document.getElementById("playerPoints");    // player points
const cpuDisplayPoints = document.getElementById("cpuPoints") ;         // cpu points
const resultText = document.getElementById("resultText");               // paragraph to announce results
const battleSymbols = document.getElementById("battle-symbols");

// get references to player buttons
const plRock = document.getElementById("btnPlRock");
const plPaper = document.getElementById("btnPlPaper");
const plScissors = document.getElementById("btnPlScissors");

// clicking on a button starts the process: run getComputerChoice() and run playRound() with the chosen attribute.
plRock.addEventListener("click", (e) => {
    getComputerChoice();
    playRound("rock", computerChoice);
});

plPaper.addEventListener("click", (e) => {
    getComputerChoice();
    playRound("paper", computerChoice);
});

plScissors.addEventListener("click", (e) => {
    getComputerChoice();
    playRound("scissors", computerChoice);
});


// define playRound
function playRound(playerChoice, computerChoice) {

    // remove previous battle icons in the middle, if existing
    while (battleSymbols.firstChild) {
        battleSymbols.removeChild(battleSymbols.firstChild);
    }

    // if statements to declare round winner and actions in the page
    if ( playerChoice === computerChoice ) {
        resultText.textContent = 'Computer and Player chose the same weapon, it\'s a DRAW!';
    
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore++;
        resultText.textContent =  'Computer chose Scissors, YOU WIN! Rock beats Scissors.';
    
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        resultText.textContent =  'Computer chose Paper, YOU LOSE! Paper beats Rock.';
    
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        resultText.textContent =  'Computer chose Scissors, YOU LOSE! Scissors beats Paper.';
    
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore++;
        resultText.textContent =  'Computer chose Rock, YOU WIN! Paper beats Rock.';
    
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        resultText.textContent =  'Computer chose Rock, YOU LOSE! Rock beats Scissors.';
    
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        resultText.textContent =  'Computer chose Paper, YOU WIN! Scissors beats Paper.';
    }

    // if statements to create battle icons
    if (playerChoice === "rock" ) {                         // ROCK situation
        const img = document.createElement("img");
        img.src = "img/Rock.png"
        img.className = "battle-icon"
        battleSymbols.appendChild(img);

        if (computerChoice === "rock") {
            const img = document.createElement("img");
            img.src = "img/Rock.png"
            img.className = "battle-icon-cpu"
            battleSymbols.appendChild(img);
        } else if (computerChoice === "paper") {
            const img = document.createElement("img");
            img.src = "img/Paper.png"
            img.className = "battle-icon-cpu"
            battleSymbols.appendChild(img);
        } else if (computerChoice === "scissors") {
            const img = document.createElement("img");
            img.src = "img/Scissors.png"
            img.className = "battle-icon-cpu"
            battleSymbols.appendChild(img);
        }
    }
    
    if (playerChoice === "paper" ) {                        // PAPER situation
        const img = document.createElement("img");
        img.src = "img/Paper.png"
        img.className = "battle-icon"
        battleSymbols.appendChild(img);
 
        if (computerChoice === "rock") {
            const img = document.createElement("img");
            img.src = "img/Rock.png"
            img.className = "battle-icon-cpu"
            battleSymbols.appendChild(img);
        } else if (computerChoice === "paper") {
            const img = document.createElement("img");
            img.src = "img/Paper.png"
            img.className = "battle-icon-cpu"
            battleSymbols.appendChild(img);
        } else if (computerChoice === "scissors") {
            const img = document.createElement("img");
            img.src = "img/Scissors.png"
            img.className = "battle-icon-cpu"
            battleSymbols.appendChild(img);
        }
    }
    
    if (playerChoice === "scissors" ) {                     // SCISSORS situation
        const img = document.createElement("img");
        img.src = "img/Scissors.png"
        img.className = "battle-icon"
        battleSymbols.appendChild(img);

        if (computerChoice === "rock") {
            const img = document.createElement("img");
            img.src = "img/Rock.png"
            img.className = "battle-icon-cpu"
            battleSymbols.appendChild(img);
        } else if (computerChoice === "paper") {
            const img = document.createElement("img");
            img.src = "img/Paper.png"
            img.className = "battle-icon-cpu"
            battleSymbols.appendChild(img);
        } else if (computerChoice === "scissors") {
            const img = document.createElement("img");
            img.src = "img/Scissors.png"
            img.className = "battle-icon-cpu"
            battleSymbols.appendChild(img);
        }
    }
    
    //score visual changes
    playerDisplayPoints.textContent = playerScore;
    cpuDisplayPoints.textContent = computerScore;
}


// define getComputerChoice
function getComputerChoice() {
    // random integer 1 2 or 3
    const randomN = Math.floor(Math.random() * 3) + 1;
    // link 1 to rock, 2 to paper, 3 to scissors
    if (randomN == 1) {
        computerChoice = 'rock';
    } else if (randomN == 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice
}