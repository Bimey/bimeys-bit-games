const display = document.querySelector("#display")
const button = document.querySelector("#button")
const guess = document.querySelector("#guess")
const guessButton = document.querySelector("#guess-button")

let num = 0
guessButton.style.display = "none"
let answerChecked = [];

let i = answerChecked.length + 1

checkAnswer = function(){
  console.log(num)
  let guessNum = parseInt(guess.value)
  console.log(guessNum)
  answerChecked.push(guessNum);
  if (guessNum > num) {
    display.innerHTML = `My number is lower. Previous guesses: ${answerChecked}. ${i} Guesses made`
  }
  if (guessNum < num) {
    display.innerHTML = `My number is higher`
  }
  
  if (num === guessNum) {
    display.innerHTML = `You won! The Number was ${num}!`
    button.textContent = "Play Again?"
    button.style.display = "block"
    guessButton.style.display = "none"
  } 
  else {
    if (answerChecked.length >= 17){
    display.innerHTML = `You ran out of guess's.You lose. The Number was ${num}.`
    button.textContent = "Play Again?"
    button.style.display = "block"
    guessButton.style.display = "none"
    }
    if (answerChecked.lenth <= 17){
    if(guessNum <= num){
      display.innerHTML = `Sorry,the number is higher guess again!<br/>Numbers Guessed: ${answerChecked.join(', ')}`
    }
    } 
    if (answerChecked.lenth <= 17){
    if(guessNum >= num){
      display.innerHTML = `Sorry,the number is lower guess again!<br/>Numbers Guessed: ${answerChecked.join(', ')}`
    }
    }
    guess.focus();
    guess.value = '';
  }
}

playGame = function() {
  answerChecked = []
  num = Math.floor(Math.random() * 10000 ) + 1
  button.style.display = "none"
  guessButton.style.display = "inline-block"
  display.innerHTML = "I've got a Number!<br/>Type your guess in the box and click 'Guess'."
  guessButton.addEventListener("click", checkAnswer)
  guess.focus()
}

button.addEventListener("click", playGame)
