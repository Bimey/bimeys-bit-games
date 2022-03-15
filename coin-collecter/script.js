let score = 0;
let time = "day";
let positionL = Math.floor(Math.random() * 1000);

let positionT = Math.floor(Math.random() * 1000);

let positionL2 = Math.floor(Math.random() * 1000);

let positionT2 = Math.floor(Math.random() * 1000);

console.log(`L:${positionL} T:${positionT}`);

let secret = document.querySelector("#bob2");

let cloud = document.querySelector(".bob");

let circle = document.querySelector("#circle");

function display(msg) {
  let displayArea = document.querySelector("#display");
  displayArea.textContent = msg;
}
function coinMove() {
  console.log("click");
  circle.style.left = `${positionL}px`;
  circle.style.top = `${positionT}px`;

  positionL = Math.floor(Math.random() * 1000);
  positionT = Math.floor(Math.random() * 1000);
  score++;
  display(`score: ${score}`);
}

function coinMove2() {
  console.log("click2");
  circle2.style.left = `${positionL2}px`;
  circle2.style.top = `${positionT2}px`;

  positionL2 = Math.floor(Math.random() * 1000);
  positionT2 = Math.floor(Math.random() * 1000);
  score += 2;
  display(`score: ${score}`);
}

function timeChange() {
  if (time == "day") {
    document.body.style.backgroundColor = "black";
    time = "night";
  } else {
    document.body.style.backgroundColor = "lightblue";
    time = "day";
  }
}

circle.addEventListener("click", function () {
  coinMove();
});

circle2.addEventListener("click", function () {
  coinMove2();
});

secret.addEventListener("click", function () {
  timeChange();
});
