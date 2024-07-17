// Array of quiz questions (you can replace it with your actual questions)
const questions = [
    { question: "Question 1?", options: ["Option 1", "Option 2", "Option 3", "Option 4"], answer: 0 },
    { question: "Question 2?", options: ["Option 1", "Option 2", "Option 3", "Option 4"], answer: 1 },
    // Add more questions here
];

let currentQuestionIndex = 0;
let userScore = 0;
let startTime, endTime;

// Function to start the quiz
function startQuiz() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
    loadQuestion();
    startTime = new Date();
}

// Function to load the current question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("questionNumber").textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById("questionText").textContent = currentQuestion.question;
    currentQuestion.options.forEach((option, index) => {
        document.getElementById(`option${index + 1}`).textContent = option;
    });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const selectedAnswerIndex = parseInt(selectedOption.id.slice(-1)) - 1;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswerIndex === currentQuestion.answer) {
        userScore++;
    }
}

// Function to load the next question
function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
    endTime = new Date();
    const totalTimeTaken = (endTime - startTime) / 1000; // in seconds
    const totalQuestions = questions.length;
    const attempted = currentQuestionIndex + 1;
    const correctAnswers = userScore;
    const wrongAnswers = attempted - correctAnswers;
    const scorePercentage = (userScore / totalQuestions) * 100;
    
    document.getElementById("resultName").textContent = document.getElementById("userName").value;
    document.getElementById("totalTimeTaken").textContent = totalTimeTaken + " seconds";
    document.getElementById("totalQuestions").textContent = totalQuestions;
    document.getElementById("attempted").textContent = attempted;
    document.getElementById("correctAnswers").textContent = correctAnswers;
    document.getElementById("wrongAnswers").textContent = wrongAnswers;
    document.getElementById("scorePercentage").textContent = scorePercentage.toFixed(2);
}

// Function to go back to home page
function goToHome() {
    document.getElementById("resultPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";
    currentQuestionIndex = 0;
    userScore = 0;
}
