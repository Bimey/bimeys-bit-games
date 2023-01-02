// Complete
const redlight = document.getElementById("redlight")
const yellowlight = document.getElementById("yellowlight")
const greenlight = document.getElementById("greenlight")
const start = document.getElementById("on")
const stop = document.getElementById("off")
let auto = false

redlight.addEventListener("click", function() {
  redlight.style.backgroundColor = "red"
  yellowlight.style.backgroundColor = "white"
  greenlight.style.backgroundColor = "white"
})

yellowlight.addEventListener("click", function() {
  redlight.style.backgroundColor = "white"
  yellowlight.style.backgroundColor = "yellow"
  greenlight.style.backgroundColor = "white"
})

greenlight.addEventListener("click", function() {
  redlight.style.backgroundColor = "white"
  yellowlight.style.backgroundColor = "white"
  greenlight.style.backgroundColor = "green"
})

function autoChange() {
  console.log("running")
  if (redlight.style.backgroundColor = "red") {
      yellowlight.style.backgroundColor = "white"
      greenlight.style.backgroundColor = "green"
      redlight.style.backgroundColor = "white"
  } else if (greenlight.style.backgroundColor = "green") {
      yellowlight.style.backgroundColor = "yellow"
      greenlight.style.backgroundColor = "white"
      redlight.style.backgroundColor = "white"
  } else if (yellowlight.style.backgroundColor = "yellow") {
      yellowlight.style.backgroundColor = "white"
      greenlight.style.backgroundColor = "white"
      redlight.style.backgroundColor = "red"
  } 
}
