const questions = [
    {
      question: "1. Which is the smallest country in the world?",
      answer: ["Vatican City", "Bhutan", "Nepal", "Shri Lanka"],
      correct: "Vatican City"
    },
    {
      question: "2. Which is the largest desert in the world?",
      answer: ["Kalahari", "Gobi", "Sahara", "Antartica"],
      correct: "Sahara"
    },
    {
      question : "3. Which is the smallest continent in the world?",
      answer : ["Asia" ,"Australia", "Arctic", "Africa"],
      correct : "Australia"
    },
    {
      question : "4. Which is the largest state in the India?",
      answer : ["Goa", "Rajasthan", "Uttar Pradesh", "Bihar"],
      correct : "Rajasthan"
    }
];
let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-container");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.innerText = `Score: ${score}`;
  nextButton.style.display = "none";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;
  currentQuestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer;
    button.addEventListener("click", () => selectAnswer(button, answer, currentQuestion.correct));
    answerButton.appendChild(button);
  });
}
function resetState() {
  nextButton.style.display = "none";
  answerButton.innerHTML = "";
}
function selectAnswer(button, answer, correctAnswer) {
  const allButtons = answerButton.querySelectorAll("button");
  if (answer === correctAnswer) {
    button.classList.add("correct");
    score++;
    scoreElement.innerText = `Score: ${score}`;
  } else {
    button.classList.add("wrong");
    allButtons.forEach(btn => {
      if (btn.innerHTML === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }
  allButtons.forEach(btn => btn.disabled = true);
  nextButton.style.display = "block";
}
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();  
  } else {
    questionElement.innerHTML = "<b>Quiz Completed!</b>";
    answerButton.innerHTML = "";
    nextButton.style.display = "none";
  }
});
startQuiz();