let gems = 0;
let currency = "points";
let score = 0;
let time = "day";
let positionL = Math.floor(Math.random() * 900);

let positionT = Math.floor(Math.random() * 1000);

let positionL2 = Math.floor(Math.random() * 900);

let positionT2 = Math.floor(Math.random() * 1000);

console.log(`L:${positionL} T:${positionT}`);

let secret = document.querySelector("#bob2");

let secret2 = document.querySelector("#bob1");

let circle = document.querySelector("#circle");

function display(msg) {
  let displayArea = document.querySelector("#display");
  displayArea.textContent = msg;
}

function display2(msg2) {
  let displayArea2 = document.querySelector("#display2");
  displayArea2.textContent = msg2;
}

function display3(msg3) {
  let displayArea3 = document.querySelector("#display3");
  displayArea3.textContent = msg3;
}

function coinMove() {
  console.log("click");
  circle.style.left = `${positionL}px`;
  circle.style.top = `${positionT}px`;

  positionL = Math.floor(Math.random() * 900);
  positionT = Math.floor(Math.random() * 1000);
  score++;
  display(`${currency}: ${score}`);
}

function coinMove2() {
  gems++;
  display2(`gems: ${gems}`);
  console.log("click2");
  circle2.style.left = `${positionL2}px`;
  circle2.style.top = `${positionT2}px`;

  positionL2 = Math.floor(Math.random() * 900);
  positionT2 = Math.floor(Math.random() * 1000);
  score += 2;
  display(`${currency}: ${score}`);
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

function currencyChange() {
  if (currency == "points") {
    currency = "coins";
  } else {
    currency = "points";
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

secret2.addEventListener("click", function () {
  currencyChange();
});

