// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

// Step 3: Write the logic to get the human choice
// Your game will be played by a human player. You will write a function that takes the user choice returns it.

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// Test what your function returns by using console.log.



// Step 4: Declare the players score variables
// Your game will keep track of the players score. You will write variables to keep track of the players score.

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

// Step 5: Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanSelection parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.


// Step 6: Write the logic to play the entire game
// Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.
// Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
// Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return "rock";
    }
    else if (choice === 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

// function getHumanChoice() {
//     let answer = parseInt(prompt("Choose 0 for rock, 1 for paper and 2 for scissors"));
//     if (answer === 0){
//         return "rock";
//     }
//     else if (answer === 1){
//         return "paper";
//     }
//     else {
//         return "scissors";
//     }
// }


//function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

//Create the div for displaying score
const scoreDiv = document.createElement("div");
document.body.appendChild(scoreDiv); 
//give the results div the ID "results"
scoreDiv.setAttribute("id", "score");

//Create the Human score paragraph
const humanScoreP = document.createElement("p");
scoreDiv.appendChild(humanScoreP);
humanScoreP.setAttribute("class", "humanScoreP");
humanScoreP.textContent =  "Human Score: " + humanScore;

function setHumanScore(){
    humanScoreP.textContent = "Human Score: " + humanScore;}
    setHumanScore();

//Create the Computer score paragraph

const computerScoreP = document.createElement("p");
scoreDiv.appendChild(computerScoreP);
computerScoreP.setAttribute("class", "computerScoreP");

function setComputerScore(){
computerScoreP.textContent = "Computer Score: " + computerScore;}
setComputerScore();

//Create the div for displaying results
const resultsDiv = document.createElement("div");
document.body.appendChild(resultsDiv); 
//give the results div the ID "results"
resultsDiv.setAttribute("id", "results");


function addResults(outcome){
    const resultsP = document.createElement("p");
    resultsDiv.appendChild(resultsP);
    resultsP.setAttribute("class", "resultsP");
    resultsP.textContent = outcome;
}

    function playRound(humanChoice, computerChoice){

        console.log("Your choice: " + humanChoice);
        console.log("Computer choice: " + computerChoice);

        if (humanScore === 5){
            return resultsDiv.textContent = "YOU WIN! Your score: " + humanScore + "| Computer Score: "+computerScore;
        } else if (computerScore === 5) {
            return resultsDiv.textContent = "Sorry, you lose. Your score: " + humanScore + "| Computer Score: "+computerScore;
        } else {

        // human losesdocument.body.appendChild(resultsDiv); 
            //give the results div the ID "results"
            resultsDiv.setAttribute("id", "results");
        if (humanChoice === "rock" && computerChoice === "paper"){
                computerScore ++;
                setComputerScore();
                return addResults(`You chose: ${humanChoice} and the computer chose: ${computerChoice}. You lose, paper beats rock.`);
            } else if (humanChoice === "scissors" && computerChoice === "rock"){
                computerScore ++;
                setComputerScore();
                return addResults(`You chose: ${humanChoice} and the computer chose: ${computerChoice}. You lose, rock beats scissors.`);
            } else if (humanChoice === "paper" && computerChoice === "scissors"){
                computerScore ++;return
                setComputerScore();
                return addResults(`You chose: ${humanChoice} and the computer chose: ${computerChoice}. You lose, scissors beats paper.`);
            }
            
        // computer loses
            
            else  if (computerChoice === "rock" && humanChoice === "paper"){
                humanScore ++;
                setHumanScore();
                return addResults(`You chose: ${humanChoice} and the computer chose: ${computerChoice}. You win, paper beats rock.`);
            } else if (computerChoice === "scissors" && humanChoice === "rock"){
                humanScore ++;
                setHumanScore();
                return addResults(`You chose: ${humanChoice} and the computer chose: ${computerChoice}. You win, rock beats scissors.`);
            } else if (computerChoice === "paper" && humanChoice === "scissors"){
                humanScore ++;
                setHumanScore();
                return addResults(`You chose: ${humanChoice} and the computer chose: ${computerChoice}. You win, scissors beats paper.`);
            } else return addResults(`You chose: ${humanChoice} and the computer chose: ${computerChoice}. It's a draw!`);
        }}

        // for (let i = 0; i <5; i++) {
        //     let humanSelection = getHumanChoice();
        //     let computerSelection = getComputerChoice();
        //     playRound(humanSelection, computerSelection);
        //     console.log('Human Score:' + humanScore);
        //     console.log('Computer Score:' + computerScore);    
        // }
    //console.log("Final Score - You: " + humanScore + " Computer: " +computerScore);
//}

// For now, remove the logic that plays exactly five rounds.

//playGame();

// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

// //Add an event listener 
// to the buttons that call your playRound function with the correct 
// playerSelection every time a button is clicked. (you can keep the 
// console.logs for this step)

const rock = document.querySelector("#rock");
rock.onclick = () => playRound("rock", getComputerChoice());
const paper = document.querySelector("#paper");
paper.onclick = () => playRound("paper", getComputerChoice());
const scissors = document.querySelector("#scissors");
scissors.onclick = () =>   playRound("scissors", getComputerChoice());

// Add a div for displaying results and change all of your console.logs 
// into DOM methods.

// Display the running score, and announce a winner of the game 
// once one player reaches 5 points. -->