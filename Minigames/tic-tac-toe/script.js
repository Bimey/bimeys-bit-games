let attack = Math.floor(Math.random() * 3 + 1);
let stopClick = false;
console.log(attack);
let turn = 1;
let turnsLeft = false;
let gs = [];
let squares = document.querySelectorAll(".squares");

function display(msg) {
	let displayArea = document.querySelector("#display");
	displayArea.textContent = msg;
}

function display2(msg2) {
	let displayArea2 = document.querySelector("#display2");
	displayArea2.textContent = msg2;
}

function end(winner) {
	if (winner) {
		stopClick = true;
		display(`And the winner is...  ${winner}!!`);
	} else {
		display("Cats Game!!");
	}
}

function checkGame() {
	console.log(gs);
	let winner = false;
	let rows = [
		gs[0] + gs[1] + gs[2],
		gs[3] + gs[4] + gs[5],
		gs[6] + gs[7] + gs[8],
		gs[0] + gs[3] + gs[6],
		gs[1] + gs[4] + gs[7],
		gs[2] + gs[5] + gs[8],
		gs[0] + gs[4] + gs[8],
		gs[2] + gs[4] + gs[6]
	];
	rows.forEach((row) => {
		if (row.length < 15) {
			turnsleft = true;
		}
		if (row == "greengreengreen") {
			winner = "green";
		}
		if (row == "blueblueblue") {
			winner = "blue";
		}
	});
	console.log(winner);
	return winner;
}

function squareClick(div) {
	if (stopClick == true) {
		return;
	}
	let divnum = div.slice(-1);
	console.log(divnum);
	if (gs[divnum]) {
		return;
	}
	let recentSlash = false;
	let recentCombo = false;
	let recentKick = false;
	let recentPunch = false;
	if (attack === 1) {
		display("punch!");
		attack = Math.floor(Math.random() * 3 + 1);

		if ((recentCombo = true)) {
			display2("No Combo");
			recentCombo = false;
		}
		if ((recentKick = true)) {
			display2("Flurry Combo!!");
			recentCombo = true;
		}

		recentPunch = true;
		recentKick = false;
		recentSlash = false;
	}
	if (attack === 2) {
		display("kick!");
		attack = Math.floor(Math.random() * 3 + 1);

		if ((recentCombo = true)) {
			display2("No Combo");
			recentCombo = false;
		}

		if (recentPunch == true) {
			display2("Flurry Combo!!");
			recentCombo = true;
		}
		recentSlash = false;
		recentPunch = false;
		recentKick = true;
	}
	if (attack === 3) {
		display("slash!");
		attack = Math.floor(Math.random() * 3 + 1);
		if (recentCombo == true) {
			display2("No Combo");
			recentCombo = false;
		}
		if (recentSlash == true) {
			display2("Rapid Slash Combo");
			recentCombo == true;
		}
		recentSlash = true;
		recentPunch = false;
		recentKick = false;
	}
	console.log("click " + div);
	if (turn == 1) {
		document.getElementById(div).style.backgroundColor = "green";
		gs[divnum] = "green";
	}
	if (turn == 2) {
		document.getElementById(div).style.backgroundColor = "blue";
		gs[divnum] = "blue";
	}
	turn++;
	if (turn == 3) {
		turn = 1;
	}
	winner = checkGame();
	if (winner) {
		end(winner);
	}
}

squares.forEach((square) => {
	square.addEventListener("click", function () {
		squareClick(square.id);
	});
	gs.push("");
});
