// 2 variables to keep track of scores, initialized to 0 to immediately define their type
let playerScore = 0;
let computerScore = 0;

// 2 variables to store player and cpu choices
let playerChoice;
let computerChoice;

// get references to html elements
const playerDisplayPoints = document.getElementById("playerPoints");    // player points
const cpuDisplayPoints = document.getElementById("cpuPoints") ;         // cpu points
const resultText = document.getElementById("resultText");               // paragraph to announce results
const battleSymbols = document.getElementById("battle-symbols");        // area to put/remove "weapon" images
const stickmanArea = document.getElementById("battle-stickmen");        // stickman area
// collection of elements to be hidden after victoryImage or defeat
const toHide = document.getElementsByClassName("to-hide");

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
//------------------------------------------------------------------------------------------

// define playRound()
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
    // can merge with above "if" code for better formatting
    // each block creates and appends the corresponding "weapon" image
    if (playerChoice === "rock" ) {                         // player chose ROCK
        const img = document.createElement("img");
        img.src = "img/Rock.png"
        img.className = "battle-icon to-hide"
        battleSymbols.appendChild(img);

        if (computerChoice === "rock") {
            const img = document.createElement("img");
            img.src = "img/Rock.png"
            img.className = "battle-icon-cpu to-hide"
            battleSymbols.appendChild(img);
        } else if (computerChoice === "paper") {
            const img = document.createElement("img");
            img.src = "img/Paper.png"
            img.className = "battle-icon-cpu to-hide"
            battleSymbols.appendChild(img);
        } else if (computerChoice === "scissors") {
            const img = document.createElement("img");
            img.src = "img/Scissors.png"
            img.className = "battle-icon-cpu to-hide"
            battleSymbols.appendChild(img);
        }
    }
    
    if (playerChoice === "paper" ) {                        // player chose PAPER
        const img = document.createElement("img");
        img.src = "img/Paper.png"
        img.className = "battle-icon to-hide"
        battleSymbols.appendChild(img);
 
        if (computerChoice === "rock") {
            const img = document.createElement("img");
            img.src = "img/Rock.png"
            img.className = "battle-icon-cpu to-hide"
            battleSymbols.appendChild(img);
        } else if (computerChoice === "paper") {
            const img = document.createElement("img");
            img.src = "img/Paper.png"
            img.className = "battle-icon-cpu to-hide"
            battleSymbols.appendChild(img);
        } else if (computerChoice === "scissors") {
            const img = document.createElement("img");
            img.src = "img/Scissors.png"
            img.className = "battle-icon-cpu to-hide"
            battleSymbols.appendChild(img);
        }
    }
    
    if (playerChoice === "scissors" ) {                     // player chose SCISSORS
        const img = document.createElement("img");
        img.src = "img/Scissors.png"
        img.className = "battle-icon to-hide"
        battleSymbols.appendChild(img);

        if (computerChoice === "rock") {
            const img = document.createElement("img");
            img.src = "img/Rock.png"
            img.className = "battle-icon-cpu to-hide"
            battleSymbols.appendChild(img);
        } else if (computerChoice === "paper") {
            const img = document.createElement("img");
            img.src = "img/Paper.png"
            img.className = "battle-icon-cpu to-hide"
            battleSymbols.appendChild(img);
        } else if (computerChoice === "scissors") {
            const img = document.createElement("img");
            img.src = "img/Scissors.png"
            img.className = "battle-icon-cpu to-hide"
            battleSymbols.appendChild(img);
        }
    }
    
    //score visual changes
    playerDisplayPoints.textContent = playerScore;
    cpuDisplayPoints.textContent = computerScore;

    // score check to trigger endGame().
    if( playerScore == 5 || computerScore == 5 ) {
        endGame();
    }

}

//------------------------------------------------------------------------------------------

// define getComputerChoice()
function getComputerChoice() {
    // random integer 1, 2 or 3
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

//------------------------------------------------------------------------------------------

// define endgame(); triggered when any score is 5
function endGame() {
    // hide elements with "to-hide" class
    Array.from(toHide).forEach(element => {
        element.setAttribute("hidden", true);
    });

    if ( playerScore > computerScore ) {                    // player is winner
        resultText.textContent = "YOU WON THE MATCH!";
        // create winner image and append
        const victoryImage = document.createElement("img");
        victoryImage.src = "img/plWin.png";
        victoryImage.className = "imgResult";
        battleSymbols.appendChild(victoryImage);
    } else {                                                // cpu is winner
        resultText.textContent = "YOU LOST THE MATCH!";
        // creater loser image and append
        const lossImage = document.createElement("img");
        lossImage.src = "img/cpuWin.png";
        lossImage.className = "imgResult";
        battleSymbols.appendChild(lossImage);
    }

    // create and append reset button to start new game
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "New Game";
    // gave same formatting for simplicity
    resetBtn.className = "btn";
    stickmanArea.appendChild(resetBtn);
    // reset button function on "click"
    resetBtn.addEventListener("click", (e) => {
        // remove victoryImage/lossImage and 2 previously hidden "weapon" images
        while (battleSymbols.firstChild) {
            battleSymbols.removeChild(battleSymbols.firstChild);
        }    
        // empty result text
        resultText.textContent = '';
        // remove "hidden" status from other elements
        Array.from(toHide).forEach(element => {
            element.removeAttribute("hidden");
        })
        // reset score
        playerScore = 0;
        computerScore = 0;
        playerDisplayPoints.textContent = playerScore;
        cpuDisplayPoints.textContent = computerScore;

        //remove itself so it can be used only once per match
        stickmanArea.removeChild(resetBtn);
    });
}

