const opponentChoiceDisplay = document.getElementById("opponentChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let opponentChoice


function GenOpponentChoice () {
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    console.log(randomNumber)
    if (randomNumber === 1) {
        opponentChoice = "rock"
    }
    if (randomNumber === 2) {
        opponentChoice = "paper"
    }
    if (randomNumber === 3) {
        opponentChoice = "scissors"
    }
    opponentChoiceDisplay.innerHTML = opponentChoice
}

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   GenOpponentChoice()
   whoWon()
}))

function whoWon() {
    if(userChoice === "rock" && opponentChoice === "paper") {
        resultDisplay.innerHTML = "You Lose"
    }
    else if(userChoice === "rock" && opponentChoice === "scissors") {
        resultDisplay.innerHTML = "You Win!!"
    }
    else if(userChoice === "rock" && opponentChoice === "rock") {
        resultDisplay.innerHTML = "It's a Draw!"
    }
    else if(userChoice === "paper" && opponentChoice === "rock") {
        resultDisplay.innerHTML = "You Win!!"
    }
    else if(userChoice === "paper" && opponentChoice === "scissors") {
        resultDisplay.innerHTML = "You Lose"
    }
    else if(userChoice === "paper" && opponentChoice === "paper") {
        resultDisplay.innerHTML = "It's a Draw!"
    }
    else if(userChoice === "scissors" && opponentChoice === "paper") {
        resultDisplay.innerHTML = "You Win!!"
    }
    else if(userChoice === "scissors" && opponentChoice === "rock") {
        resultDisplay.innerHTML = "You Lose"
    }
    else {
        resultDisplay.innerHTML = "It's a Draw!"
    }
}