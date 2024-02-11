// generating the number values
let randomNumber = parseInt(Math.random() * 100 + 1);

//selecting the selectors
const submit = document.querySelector("#subt");
const uesrInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

// declaring variables
let prevGuess = [];
let numGuess = 1;
let playGame = true;

// checking if you can play the game or not
if (playGame) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const guess = parseInt(uesrInput.value);
    // our number will be entered 
    // validate guess will validate our number 
    validateGuess(guess);
  });
}

//declaring functions
function validateGuess(guess) {
  // checking the guess values and passing the message
  if(isNaN(guess)){
    alert("Please Enter The Valid Number");
  }else if(guess < 1){
    alert("Please Enter The Valid Number Greater Then 1");
  }else if(guess > 100){
    alert("Please Enter The Valid Number Less Then 100");
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game Over. Random Number Was ${randomNumber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  // guess value message same as validate
if(guess === randomNumber){
    displayMessage(`You Guessed It Right`)
    endGame()
}else if(guess < randomNumber){
    displayMessage(`Number is Toooooo Low`)
}else if(guess > randomNumber){
    displayMessage(`Number is Toooooo High`)
}
}

function displayGuess(guess) {
  // cleans value
  //   guess updates
  uesrInput.value = ""
  guessSlot.innerHTML += `${guess}   `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  // display the message on website
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  // for ending the game
  uesrInput.value = ""
  uesrInput.setAttribute("disabled","")
  p.classList.add("button")
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  // for new game
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener("click", (event)=>{
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = []
      numGuess = 1
      guessSlot.innerHTML = ""
      remaining.innerHTML = `${11 - numGuess}`
      uesrInput.removeAttribute("disabled")
      startOver.removeChild(p)
      playGame = true
  })
}
