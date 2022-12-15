let card0 = 
document.getElementById("card0")
let card1 = 
document.getElementById("card1")
let card2 = 
document.getElementById("card2")
let card3 = 
document.getElementById("card3")
let card4 = 
document.getElementById("card4")
let card5 = 
document.getElementById("card5")
let card6 = 
document.getElementById("card6")
let card7 = 
document.getElementById("card7")
let card8 = 
document.getElementById("card8")
let card9 = 
document.getElementById("card9")

let display = 
document.getElementById("display")
let display2 = 
document.getElementById("display2")

let playAgain = 
document.getElementById("playAgain")

let stop = false

const fortune1 = "You will die on your birthday"
const fortune2 = "You will grow into a coward"
const fortune3 = "You will be the savior of your friends and family"
const fortune4 = "You will be robbed of your most prized posseion"
const fortune5 = "Kindess will be your doom"
const fortune6 = "You will become a bad influence to your children"
const fortune7 = "Your worst fears will come true"
const fortune8 = "You will become rich but infamous"
const fortune9 = "You will be jailed for a crime you did not commit"
const fortune10 = "The rest of your life will be relaxed and joyous"

console.log(stop)

function playagain() {
  playAgain.style.visibility = "visible"
  stop = true
  playAgain.addEventListener("click", function() {
    stop = false
    playAgain.style.visibility = "hidden"
  })
}

if(!stop) {
card0.addEventListener("click", function() {
  display.innerHTML = "And Your Fortune Is..."
  display2.innerHTML = `${fortune1}`
  playagain()
})}

if (!stop) {
card1.addEventListener("click", function() {
  display.innerHTML = "And Your Fortune Is..."
  display2.innerHTML = `${fortune2}`
  playagain()
})}

if (!stop) {
card2.addEventListener("click", function() {
  display.innerHTML = "And Your Fortune Is..."
  display2.innerHTML = `${fortune3}`
  playagain()
  })}

if (!stop) {
card3.addEventListener("click", function() {
  display.innerHTML = "And Your Fortune Is..."
  display2.innerHTML = `${fortune4}`
  playagain()
})}

if (!stop) {
card4.addEventListener("click", function() {
  display.innerHTML = "And Your Fortune Is..."
  display2.innerHTML = `${fortune5}`
  playagain()
})}

if (!stop) {
card5.addEventListener("click", function() {
  display.innerHTML = "And Your Fortune Is..."
  display2.innerHTML = `${fortune6}`
  playagain()
})}

if (!stop) {
card6.addEventListener("click", function() {
  display.innerHTML = "And Your Fortune Is..."
  display2.innerHTML = `${fortune7}`
  playagain()
})}

if (!stop) {
card7.addEventListener("click", function() {
  display.innerHTML = "And Your Fortune Is..."
  display2.innerHTML = `${fortune8}`
  playagain()
})}

if (!stop) {
card8.addEventListener("click", function() {
  display.innerHTML = "And Your Fortune Is..."
  display2.innerHTML = `${fortune9}`
  playagain()
})}

if (!stop) {
card9.addEventListener("click", function() {
  display.innerHTML = "And Your Fortune Is..."
  display2.innerHTML = `${fortune10}`
  playagain()
})}

console.log(stop)
