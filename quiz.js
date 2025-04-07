const questions = [
    {
      question: "1. To convert km/h into m/s we multiply by ",
      answer: ["5/18", "18/5", "3/7", "7/3"],
      correct: "5/18"
    },
    {
      question: "2. A body when projected up goes to height 'h' in time 't' and then returns back at the point of projection. The incoreect statement is:",
      answer: ["The displacement is zero", "The average velocity is 2h/t", "The final speed is same as the initial speed", "Acceleration is constant"],
      correct: "The average velocity is 2h/t"
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
