const statusDisplay = document.querySelector(".game--status");
let gameActive = true;
let roundWon = false;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const divs = [
  document.getElementById("0"),
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("4"),
  document.getElementById("5"),
  document.getElementById("6"),
  document.getElementById("7"),
  document.getElementById("8"),
];
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayed(clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  divs[clickedCellIndex].innerHTML = currentPlayer;
}

function minmax() {
  /*  V1 selecting & printing O at random position/// NO INTELLIGENCE
            let o;
            while(gameState[o] !== "") o = Math.floor(Math.random() * 10);
            gameState[o]="O";
            divs[o].innerHTML = "O";
            */
  let ctr = 0;
  for (let i = 0; i < 7; i++) {
    let a = winningConditions[i][0];
    let b = winningConditions[i][1];
    let c = winningConditions[i][2];
    if (gameState[a] == "X" && gameState[b] == "X") {
      if (gameState[c] == "") {
        set(c);
        break;
      }
    }
    if (gameState[a] == "X" && gameState[b] == "O") {
      if (gameState[c] == "") {
        set(c);
        break;
      }
    }
    if (gameState[a] == "O" && gameState[b] == "X") {
      if (gameState[c] == "") {
        set(c);
        break;
      }
    }
    if (gameState[a] == "O" && gameState[b] == "O") {
      if (gameState[c] == "") {
        set(c);
        break;
      }
    }
    if (gameState[b] == "X" && gameState[c] == "X") {
      if (gameState[a] == "") {
        set(a);
        break;
      }
    }
    if (gameState[b] == "X" && gameState[c] == "O") {
      if (gameState[a] == "") {
        set(a);
        break;
      }
    }
    if (gameState[b] == "O" && gameState[c] == "X") {
      if (gameState[a] == "") {
        set(a);
        break;
      }
    }
    if (gameState[b] == "O" && gameState[c] == "O") {
      if (gameState[a] == "") {
        set(a);
        break;
      }
    }
    if (gameState[c] == "X" && gameState[a] == "X") {
      if (gameState[b] == "") {
        set(b);
        break;
      }
    }
    if (gameState[c] == "X" && gameState[a] == "O") {
      if (gameState[b] == "") {
        set(b);
        break;
      }
    }
    if (gameState[c] == "O" && gameState[a] == "X") {
      if (gameState[b] == "") {
        set(b);
        break;
      }
    }
    if (gameState[c] == "O" && gameState[a] == "O") {
      if (gameState[b] == "") {
        set(b);
        break;
      }
    }
    if (gameState[a] == "X" && gameState[b] == "" && gameState[c] == "") {
      setR();
      break;
    }
    if (gameState[a] == "O" && gameState[b] == "" && gameState[c] == "") {
      setR();
      break;
    }
    if (gameState[b] == "X" && gameState[a] == "" && gameState[c] == "") {
      setR();
      break;
    }
    if (gameState[b] == "O" && gameState[a] == "" && gameState[c] == "") {
      setR();
      break;
    }
    if (gameState[c] == "X" && gameState[b] == "" && gameState[a] == "") {
      setR();
      break;
    }
    if (gameState[c] == "O" && gameState[b] == "" && gameState[a] == "") {
      setR();
      break;
    }
  }
}

function set(o) {
  gameState[o] = "O";
  divs[o].innerHTML = "O";
}

function setR() {
  let o;
  while (gameState[o] !== "") o = Math.floor(Math.random() * 10);
  gameState[o] = "O";
  divs[o].innerHTML = "O";
}

function handleResultValidation(p) {
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") continue;
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    currentPlayer = p;
    console.log(currentPlayer);
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );
  if (gameState[clickedCellIndex] !== "" || !gameActive) return;
  handleCellPlayed(clickedCellIndex);
  handleResultValidation("X");
  minmax();
  if (!roundWon) handleResultValidation("O");
}

function handleRestartGame() {
  gameActive = true;
  currentPlayer = "X";
  roundWon = false;
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
}

document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));
document
  .querySelector(".game--restart")
  .addEventListener("click", handleRestartGame);
