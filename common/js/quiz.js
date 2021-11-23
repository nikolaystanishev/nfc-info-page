const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

let questions = [
  {
    question: "Какво е NFC?",
    choiceA: "Метод на безжичен трансфер на данни.",
    choiceB: "Метод на жичен трансфер на данни.",
    choiceC: "Метод на отложен във времето трансфер на данни.",
    correct: "A"
  }, {
    question: "Какво е максималното разстояние за възможна комуникация при NFC?",
    choiceA: "10mm",
    choiceB: "10m",
    choiceC: "10cm",
    correct: "C"
  }, {
    question: "Кои са двете основни части на NFC?",
    choiceA: "NFC етикети пишещи данни към четци, NFC четци съдържащи данни",
    choiceB: "NFC етикети съдържащи данни, NFC четци четящи данни от етикетите",
    choiceC: "NFC етикети четящи данни от четците, NFC четци съдържащи данни",
    correct: "B"
  }, {
    question: "Кои са двата режима на трансфер предлагани от NFC?",
    choiceA: "Етикетен и Четящ",
    choiceB: "Четене и Писане",
    choiceC: "Пасивен и Активен",
    correct: "C"
  }, {
    question: "Колко от устройствата в пасивен режим на трансфер да данни трябва да са захранени?",
    choiceA: "0",
    choiceB: "1",
    choiceC: "2",
    correct: "B"
  }, {
    question: "Колко от устройствата в активен режим на трансфер да данни трябва да са захранени?",
    choiceA: "0",
    choiceB: "1",
    choiceC: "2",
    correct: "C"
  }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
}

function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    score++;
    answerIsCorrect();
  } else {
    answerIsWrong();
  }

  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    scoreRender();
  }
}

function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#04AA6D";
}

function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#AA0441";
}

function scoreRender() {
  scoreDiv.style.display = "block";
  const scorePerCent = Math.round(100 * score / questions.length);

  if (scorePerCent < 50) {
    scoreDiv.style.backgroundColor = "#AA0441"
  } else {
    scoreDiv.style.backgroundColor = "#04AA6D"
  }

  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}