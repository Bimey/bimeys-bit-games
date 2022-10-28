const commandBar = document.getElementById("commandBar")
function handleInput(msg) {
  console.log(msg)
  document.body.style.backgroundColor = msg;
}
commandBar.addEventListener("keypress", function (e) {
  if (event.keyCode === 13) {
    handleInput(e.target.value)
    console.log("running")
}
})
