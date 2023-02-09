var url_string = window.location;
var url = new URL(url_string);
var uid = url.searchParams.get("id");

const ops = [
  document.getElementById("o1"),
  document.getElementById("o2"),
  document.getElementById("o3"),
  document.getElementById("o4"),
];
const q = document.getElementById("q");
const toTime = document.getElementById("toTime");
const qTime = document.getElementById("qTime");
const operators = ["+", "-", "*", "/"];
const difficultyS = document.getElementById("difficulty");
let data = document.getElementById("data");
let difficulty;
let ans;
let qn;
let score = 0;
let perTimeLoop;
let ansState = false;
let bt;
let s = 1;
let selectedTime;
let smallTime = 0;
const t = [60000, 300000, 600000];

function setTimeDisplay() {
  clearInterval(bt);
  selectedTime = document.getElementById("t").value;
  if (selectedTime == 1) toTime.innerHTML = t[0] / 1000 + "s";
  if (selectedTime == 5) toTime.innerHTML = t[1] / 1000 + "s";
  if (selectedTime == 10) toTime.innerHTML = t[2] / 1000 + "s";
  difficulty = difficultyS.value;
  if (difficulty == "Easy") qTime.innerHTML = "10s";
  if (difficulty == "Medium") qTime.innerHTML = "20s";
  if (difficulty == "Hard") qTime.innerHTML = "30s";
  q.innerHTML = "Question is here";
  ops.forEach((i) => {
    i.innerHTML = "-";
  });
}

function start() {
  let bigTimeInt = 1,
    s1 = 1;
  selectedTime = document.getElementById("t").value;
  if (selectedTime == 1) {
    bigTimeInt = t[0];
  }
  if (selectedTime == 5) {
    bigTimeInt = t[1];
  }
  if (selectedTime == 10) {
    bigTimeInt = t[2];
  }
  let bigT = bigTimeInt / 1000;
  toTime.innerHTML = bigT + "s";
  createQ();
  bt = setInterval(() => {
    //console.log(bigT+" "+s1+" "+s);
    toTime.innerHTML = bigT - s1 + "s";
    qTime.innerHTML = smallTime - s + "s";
    if (s1 > bigTimeInt / 1000) {
      //if game is over by whole time out
      gameOver("TimeUp");
      clearInterval(bt);
    }
    if (s > smallTime || (s < 0 && ansState == false)) {
      gameOver("GameOver");
      s = 0;
      clearInterval(bt);
    }
    s1++;
    s++;
  }, 1000);
}

function createQ() {
  difficulty = difficultyS.value;
  if (difficulty == "Easy") easyQ();
  if (difficulty == "Medium") mediumQ();
  if (difficulty == "Hard") hardQ();
}

function easyQ() {
  //(Math.random() * (max - min + 1) + min)
  smallTime = 10;
  let a = Math.floor(Math.random() * (0 - 5 + 1) + 5),
    b = Math.floor(Math.random() * (0 - 5 + 1) + 5),
    c1 = operators[Math.floor(Math.random() * 4)],
    c2 = operators[Math.floor(Math.random() * 4)],
    c = Math.floor(Math.random() * (0 - 5 + 1) + 5);
  minmaxDes(a, b, c, c1, c2);
}

function mediumQ() {
  smallTime = 20;
  let a = Math.floor(Math.random() * (0 - 30 + 1) + 30),
    b = Math.floor(Math.random() * (0 - 30 + 1) + 30),
    c1 = operators[Math.floor(Math.random() * 4)],
    c2 = operators[Math.floor(Math.random() * 4)],
    c = Math.floor(Math.random() * (0 - 30 + 1) + 30);
  minmaxDes(a, b, c, c1, c2);
}

function hardQ() {
  smallTime = 30;
  let a = Math.floor(Math.random() * (0 - 50 + 1) + 50),
    b = Math.floor(Math.random() * (0 - 50 + 1) + 50),
    c1 = operators[Math.floor(Math.random() * 4)],
    c2 = operators[Math.floor(Math.random() * 4)],
    c = Math.floor(Math.random() * (0 - 50 + 1) + 50);
  minmaxDes(a, b, c, c1, c2);
}

function check(a) {
  if (a == ans) {
    score += 10;
    s = 1;
    createQ();
    ansState = true;
  } else {
    gameOver("GameOver");
    ansState = false;
  }
}

function gameOver(a) {
  data.value =
    uid +
    "-" +
    difficulty +
    "-" +
    document.getElementById("t").value +
    "-" +
    score;
  document.getElementById("scoreForm").submit();
  clearInterval(bt);
  window.alert(a + "\nYour score: " + score);
  q.innerHTML = "Question is here";
  ops.forEach((i) => {
    i.innerHTML = "-";
  });
  toTime.innerHTML = "s";
  qTime.innerHTML = "s";
  score = 0;
}

function minmaxDes(a1, a2, a3, o1, o2) {
  let que = a1 + o1 + a2 + o2 + a3;
  ans = parseFloat(eval(que)).toFixed(2);
  ansOp = [0, 0, 0, 0];
  let index = Math.floor(Math.random() * 4);
  for (let i = 0; i < 4; i++)
    if (i != index)
      ops[i].innerHTML = parseFloat(Math.floor(Math.random() * ans)).toFixed(2);
  ops[index].innerHTML = ans;
  q.innerHTML = que;
}
