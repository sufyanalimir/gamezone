var url_string = window.location;
var url = new URL(url_string);
var uid = url.searchParams.get("id");

const x = 800,
  y = 500,
  r = 10;
let sc = document.getElementById("score");
let cv = document.getElementById("cv");
let scor = document.getElementById("sco");
let form = document.getElementById("fasttap");

cv.height = y;
cv.width = x;
let ctx = cv.getContext("2d");
let dx, dy;
ctx.beginPath();
ctx.rect(0, 0, x, y);
ctx.stroke();
let score = 0;
let gameOver = false;
let time = 1;
let timeMax = document.getElementById("tr");
let tr;

function newGame() {
  tr = timeMax.value;
  document.getElementById("newGame").innerHTML = "New Game";
  score = 0;
  start();
  sc.innerHTML = "Score: " + score;
}

function createAdraw() {
  ctx.beginPath();
  ctx.clearRect(0, 0, x, y);
  dx = Math.floor(Math.random() * (x - r - r + 1) + r);
  dy = Math.floor(Math.random() * (y - r - r + 1) + r);
  ctx.beginPath();
  ctx.arc(dx, dy, r, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawGameOver() {
  window.alert("GameOver\nScore:" + score);
  gameOver = true;
  scor.value = uid + "-" + score + "-" + timeMax.value;
  form.submit();
  score = 0;
  time = 1;
}

cv.addEventListener("mousedown", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  if (x > dx - r && x < dx + r && y > dy - r && y < dy + r) {
    score++;
    createAdraw();
  } else {
    drawGameOver();
  }
  sc.innerHTML = "Score: " + score;
});

function start() {
  createAdraw();
  var minmax = setInterval(() => {
    if (time == tr) {
      clearInterval(minmax);
      drawGameOver();
    } else {
      time++;
    }
  }, 1000);
}
