// Sadly this will not be used in the beta update 0.1
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num = Math.floor(Math.random() * 10);
console.log("hi i'm bob")
rl.on("line", (line) => {
    if (line === "hi" || line === "hello") {
        console.log("hello")
    }
    if (line === "i'm happy") {
        console.log("I'm glad")
    }
    if (line === "i'm sad") {
        console.log("Ohhhh...")
    }
    if (line === "i'm angry") {
        console.log("Try to calm down")
    }
    if (line === "what's your name" || "who are you") {
        console.log("i'm bob")
    }
    if (line === "how are you" || "how's your day been") {
        console.log("good!")
    }
    if (line === "what's your favorite color") {
        console.log("green")
    }
    if (line === "what's your favorite sport") {
        console.log("baseball")
    }
    if (line === "what's your favorite game") {
        console.log("monopoly")
    }
    if (line === "what's your favorite subject") {
        console.log("writing")
    }
    if (line === "let's play a game" || "let's play" || "i'm bored" || "I want to play a game") {
        console.log("Guess my number it's from 1-10")
        num = Math.floor(Math.random() * 10);
        if (line === num) {
            num = Math.floor(Math.random() * 10);
            console.log("you guessed my number!")
        }
    }
    if (line === "!") {
        console.log("?")
    }
    if (line === "?") {
        console.log("!")
    }
})