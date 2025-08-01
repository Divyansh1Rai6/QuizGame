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
      question : "3. Unit of retardation is:",
      answer : ["m/s", "m/s^2", "m", "ms^2"],
      correct : "m/s^2"
    },
    {
      question : "4. The velocity of a body starting from rest is directly proportional to time. Which is uniform?",
        answer : ["velocity only", "Acceleration only", "Both velocity and acceleration", "neither velocity nor acceleration"],
      correct : "Acceleration only"
    },
    {
        question : "5. For uniformly accelerated motion, the velocity-time graph is:",
        answer : ["A straight line parallel to the time axis", "A straight line perpendicular to the time axis", "A straight line inclined to the time axis", "A curve"],
        correct : "A straight line inclined to the time axis"
    },
    {
        question : "6. A body is dropped from top of tower. The quantity which remains constant is:",
        answer : ["Displacement", "Speed", "Velocity", "Acceleration"],
        correct : "Acceleration"
    },
    {
        question : "7. A bullet initially moving with a velocity 20 m/s strikes a target and comes to rest after penetrating a distance 10 cm in the target. The retardation caused by the target is:",
        answer : ["2000 m/s^2", "2550 m/s^2", "3000 m/s^2", "4500 m/s^2"],
        correct : "2000 m/s^2"
    },
    {
        question : "8. Slope of displacement v/s time graph is:",
        answer : ["Distance", "Displacement", "Acceleration", "Velocity"],
        correct : "Velocity"
    },
    {
        question : "9. The shortest path travelled by any object is:",
        answer : ["Distance", "Displacement", "Velocity", "Acceleration"],
        correct : "Displacement"
    },
    {
        question : "10. Acceleration is :",
        answer : ["Rate of change of velocity", "Difference between final velocity and initial velocity with respect to time taken", "Both a and b", "None of these"],
        correct : "Difference between final velocity and initial velocity with respect to time taken"
    },
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
let totalTime = 60;
let globalTimeInterval;
function startGlobalTimer() {
    globalTimeInterval = setInterval (() => {
        totalTime--;
        document.getElementById("global-time").textContent = totalTime;
         if (totalTime <= 10) {
        document.getElementById("global-time").style.color = "red";
            }
        if (totalTime <= 0) {
            clearInterval(globalTimeInterval);
            alert("Time's up for quiz!");
            showResult();
        }
    }, 1000);
}
window.onload = () => {
    showQuestion(currentQuestionIndex);
    startGlobalTimer();
};
function showResult() {
    clearInterval(globalTimerInterval);
    document.querySelector(".quiz-container").innerHTML = `<h2>Quiz Completed!</h2>;`;
}
