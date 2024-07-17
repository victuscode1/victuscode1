var selectedTopic;
var score = 0;
var questionNumber = 1;
var wRong = 0;
var attemPt = 0;
var totalTimeTaken = 0; // Variable to track total time taken

// Taking username from the input
function submitUsername() {
    var userName = document.getElementById("username").value;
    console.log("Username entered:", userName);
    document.getElementById('resultName').textContent = userName;
}

// Function to start the quiz with the selected topic
function startQuiz(topic) {
    document.querySelector('.container-H').style.display = 'none';
    document.querySelector('.container-Q').style.display = 'block';
    document.getElementById('toPic-Name').textContent = 'Quiz Topic: ' + topic;
    console.log("Hello");

    selectedTopic = topic;

    var quizTime = 100;
    var timerInterval = setInterval(function () {
        quizTime--;
        totalTimeTaken++;
        document.getElementById('totalTimeTaken').textContent = totalTimeTaken;
        document.getElementById('wrongAnswers').textContent = wRong;

        document.getElementById('timeR').textContent = 'Time Remaining: ' + quizTime + 's';
        if (quizTime <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);

    var selectedQuestions = questions[topic];
    currentQuestionIndex = 0;
    displayQuestion(selectedQuestions[currentQuestionIndex]);
}

// Function to submit the quiz
function submitQuiz() {
    alert("Quiz submitted successfully!");

    document.querySelector('.container-Q').style.display = 'none';
    document.getElementById('resultPage').style.display = 'block';
    document.getElementById('resultTimeTaken').textContent = totalTimeTaken; // Display total time taken
}

// Function to display a question on the quiz interface
function displayQuestion(question) {
    document.getElementById('quesTion').textContent = questionNumber + ". " + question.question;
    document.getElementById('oP1').textContent = "A) " + question.options[0];
    document.getElementById('oP2').textContent = "B) " + question.options[1];
    document.getElementById('oP3').textContent = "C) " + question.options[2];
    document.getElementById('oP4').textContent = "D) " + question.options[3];
    document.getElementById('qNo').textContent = "Q" + questionNumber;
}

// Function to check the answer selected by the user
function checkAnswer(selectedOption) {
    var selectedAnswer = selectedOption.textContent.trim().slice(3);
    var correctAnswer = questions[selectedTopic][currentQuestionIndex].correctAnswer;
    attemPt++;
    document.getElementById('attempted').textContent = attemPt;

    if (selectedAnswer === correctAnswer) {
        score++;
        document.getElementById("scoRe").textContent = "SCORE: " + score;
        document.getElementById("correctAnswers").textContent = score;
        document.getElementById("scorePercentage").textContent = score * 10;
    } else {
        wRong++;
    }

    loadNextQuestion();
}

// Function to load the next question
function loadNextQuestion() {
    questionNumber++;
    var selectedQuestions = questions[selectedTopic];
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        var nextQuestion = selectedQuestions[currentQuestionIndex];
        displayQuestion(nextQuestion);
    } else {
        alert("You have completed all the questions!");
        submitQuiz();
    }
}

// Example questions object with Pipes and Cisterns, Probability categories, Ages and Profit
const questions = {
    "Pipes and Cisterns": [
            {
            question: "A pipe can fill a tank in 6 hours. After half the tank is filled, three more similar pipes are opened. What is the total time taken to fill the tank completely if all the pipes are opened together?",
            options: ["9 hours", "6 hours", "4 hours", "3 hours"],
            correctAnswer: "3 hours"
            },
            {
            question: "Pipe A can fill a tank in 8 hours, while Pipe B can fill the same tank in 10 hours. If both pipes are opened together, how long will it take to fill the tank?",
            options: ["4 hours", "6 hours", "8 hours", "12 hours"],
            correctAnswer: "4 hours"
            },
            {
            question: "Two pipes can fill a tank in 12 hours and 15 hours respectively. If both pipes are opened simultaneously, how long will it take to fill the tank?",
            options: ["6 hours", "7 hours", "8 hours", "10 hours"],
            correctAnswer: "6 hours"
            },
            {
            question: "Pipe A can fill a tank in 10 hours, while Pipe B can empty the same tank in 15 hours. If both pipes are opened together, how long will it take to fill the tank?",
            options: ["6 hours", "7.5 hours", "8 hours", "9 hours"],
            correctAnswer: "6 hours"
            },
            {
            question: "Pipe A can fill a tank in 8 hours and Pipe B can empty the same tank in 12 hours. If both pipes are opened together, in how many hours will the tank be filled?",
            options: ["16 hours", "18 hours", "20 hours", "24 hours"],
            correctAnswer: "24 hours"
            },
            {
            question: "Pipe A can fill a tank in 12 hours and Pipe B can fill the same tank in 15 hours. If both pipes are opened together and Pipe B is closed after 3 hours, how long will it take for Pipe A to fill the tank?",
            options: ["6 hours", "7 hours", "8 hours", "9 hours"],
            correctAnswer: "7 hours"
            },
            {
            question: "A pipe can fill a tank in 6 hours. After half the tank is filled, three more similar pipes are opened. What is the total time taken to fill the tank completely if all the pipes are opened together?",
            options: ["9 hours", "6 hours", "4 hours", "3 hours"],
            correctAnswer: "3 hours"
            },
            {
            question: "Pipe A can fill a tank in 5 hours, while Pipe B can empty the tank in 8 hours. If both pipes are opened together, how long will it take to fill the tank?",
            options: ["12 hours", "15 hours", "18 hours", "20 hours"],
            correctAnswer: "20 hours"
            },
            {
            question: "Pipe A can fill a tank in 4 hours, while Pipe B can empty it in 6 hours. If both pipes are opened together, how long will it take to fill the tank?",
            options: ["8 hours", "12 hours", "16 hours", "24 hours"],
            correctAnswer: "12 hours"
            },
            {
            question: "Pipe A can fill a tank in 15 hours, while Pipe B can fill it in 20 hours. If both pipes are opened together and after 4 hours, Pipe B is closed, how long will it take for Pipe A to fill the tank?",
            options: ["8 hours", "10 hours", "12 hours", "16 hours"],
            correctAnswer: "8 hours"
            }
       
    ],
    "Probability": [
            {
            question: "What is the probability of rolling a prime number on a fair six-sided die?",
            options: ["1/2", "1/3", "1/4", "1/6"],
            correctAnswer: "1/3"
            },
            {
            question: "What is the probability of flipping a fair coin and getting heads?",
            options: ["1/2", "1/3", "1/4", "1/6"],
            correctAnswer: "1/2"
            },
            {
            question: "If you draw a card from a standard deck of 52 playing cards, what is the probability of drawing a heart?",
            options: ["1/2", "1/3", "1/4", "1/5"],
            correctAnswer: "1/4"
            },
            {
            question: "If you roll a fair six-sided die twice, what is the probability of getting two even numbers?",
            options: ["1/4", "1/3", "1/2", "1/6"],
            correctAnswer: "1/4"
            }, 
            {
            question: "In a bag, there are 4 red balls, 3 green balls, and 2 blue balls. If you randomly pick one ball from the bag, what is the probability of picking a red ball?",
            options: ["2/9", "1/3", "1/4", "4/9"],
            correctAnswer: "2/9"
            },
            {
            question: "A jar contains 20 marbles, of which 4 are black, 6 are blue, and 10 are white. If you pick one marble at random from the jar, what is the probability of picking a black or blue marble?",
            options: ["1/2", "1/3", "5/10", "4/20"],
            correctAnswer: "1/2"
            }, 
            {
            question: "If you roll two fair six-sided dice, what is the probability of getting a sum of 7?",
            options: ["1/6", "1/4", "1/3", "1/2"],
            correctAnswer: "1/6"
            }, 
            {
            question: "A bag contains 5 red balls, 3 green balls, and 2 blue balls. If you randomly pick two balls from the bag without replacement, what is the probability of picking one red ball and one blue ball?",
            options: ["1/6", "1/4", "1/3", "1/2"],
            correctAnswer: "1/6"
            },
            {
            question: "If you toss a fair coin three times, what is the probability of getting exactly two heads?",
            options: ["1/4", "1/2", "1/8", "1/3"],
            correctAnswer: "1/4"
            },
            {
            question: "A box contains 6 red balls, 4 blue balls, and 2 green balls. If you randomly pick two balls from the box without replacement, what is the probability of picking one red ball and one blue ball?",
            options: ["2/33", "1/3", "1/4", "4/15"],
            correctAnswer: "4/15"
            }
    ],
    
    "Ages": [
            {
            question: "A father's age is three times his son's age. If the sum of their ages is 48, what is the age of the son?",
            options: ["12 years", "16 years", "18 years", "20 years"],
            correctAnswer: "12 years"
            },
            {
            question: "10 years ago, a mother was 4 times as old as her daughter. In 10 years, the mother will be twice as old as her daughter. How old is the daughter now?",
            options: ["5 years", "10 years", "15 years", "20 years"],
            correctAnswer: "10 years"
            },
            {
            question: "The age of a man is four times the age of his daughter. 20 years from now, the age of the man will be twice the age of his daughter. How old is the daughter now?",
            options: ["10 years", "15 years", "20 years", "25 years"],
            correctAnswer: "10 years"
            },
            {
            question: "The sum of the ages of a father and his son is 45 years. Five years ago, the father was 3 times as old as his son. Find their present ages.",
            options: ["20 years and 25 years", "30 years and 15 years", "35 years and 10 years", "40 years and 5 years"],
            correctAnswer: "30 years and 15 years"
            },
            {
            question: "10 years ago, a man was thrice as old as his son. 10 years later, the man will be twice as old as his son. How old is the son now?",
            options: ["15 years", "20 years", "25 years", "30 years"],
            correctAnswer: "20 years"
            },
            {
            question: "A girl is 20 years younger than her brother. After 4 years, her brother's age will be twice her age. What is the age of the girl now?",
            options: ["10 years", "14 years", "18 years", "22 years"],
            correctAnswer: "14 years"
            },
            {
            question: "The present ages of A and B are in the ratio 3:2. If A is 6 years older than B, what are their present ages?",
            options: ["18 years and 12 years", "15 years and 10 years", "12 years and 8 years", "9 years and 6 years"],
            correctAnswer: "18 years and 12 years"
            },
            {
            question: "The sum of the ages of a father and his son is 36 years. If the father's age is 4 times the age of his son, what is the age of the son?",
            options: ["6 years", "8 years", "9 years", "12 years"],
            correctAnswer: "9 years"
            },
            {
            question: "A man's age is 5 times his son's age. If the difference in their ages is 24 years, find their ages.",
            options: ["30 years and 6 years", "35 years and 7 years", "40 years and 8 years", "45 years and 9 years"],
            correctAnswer: "30 years and 6 years"
            },
            {
            question: "A woman's age is three times her daughter's age. If the woman is 42 years old now, how old will she be when her age is double that of her daughter's?",
            options: ["45 years", "48 years", "50 years", "54 years"],
            correctAnswer: "48 years"
            }
            
            
    ],
    "Profit": [
            {
            question: "What is the selling price if the cost price of an item is Rs. 500 and the profit percentage is 20%?",
            options: ["600rs", "555 rs", "5034rs", "900rs"],
            correctAnswer: "600rs"
            },
            
            {
            question: "If the selling price of an item is Rs. 750 and the profit percentage is 25%, what is the cost price?",
            options: ["500rs", "600rs", "625rs", "700rs"],
            correctAnswer: "600rs"
            },
            
            {
            question: "A man sells an article at a loss of 10%. If the selling price is Rs. 450, what is the cost price?",
            options: ["500rs", "550rs", "600rs", "700rs"],
            correctAnswer: "500rs"
            },
            
            {
            question: "If the cost price of an item is Rs. 800 and the selling price is Rs. 640, what is the loss percentage?",
            options: ["10%", "15%", "20%", "25%"],
            correctAnswer: "20%"
            },
            
            {
            question: "A shopkeeper sells an item for Rs. 720, making a profit of 20%. What is the cost price?",
            options: ["500rs", "600rs", "640rs", "700rs"],
            correctAnswer: "600rs"
            },
            
            {
            question: "If the cost price of an item is Rs. 1200 and the selling price is Rs. 960, what is the loss percentage?",
            options: ["10%", "15%", "20%", "25%"],
            correctAnswer: "20%"
            },
            
            {
            question: "A trader sells two articles, one at a profit of 20% and the other at a loss of 10%. If the selling price of both articles is Rs. 1200, what is the overall profit or loss?",
            options: ["40rs profit", "60rs profit", "80rs loss", "100rs loss"],
            correctAnswer: "40rs profit"
            },
            
            {
            question: "If the cost price of an item is Rs. 600 and the selling price is Rs. 540, what is the loss percentage?",
            options: ["5%", "10%", "15%", "20%"],
            correctAnswer: "10%"
            },
            
            {
            question: "A person sells an article for Rs. 144, making a profit of 20%. What is the cost price?",
            options: ["100rs", "120rs", "140rs", "160rs"],
            correctAnswer: "120rs"
            },
            
            {
            question: "If the cost price of an item is Rs. 400 and the selling price is Rs. 480, what is the profit percentage?",
            options: ["10%", "15%", "20%", "25%"],
            correctAnswer: "20%"
            }    
            
    ],
};             

// Variable to track the current question index
var currentQuestionIndex = -1; // Initialize to -1 to start with the first question



function goToHome(){
   
    document.getElementById('resultPage').style.display = 'none'; //hide result page
   document.querySelector('.container-H').style.display = 'block'; // Show home page
}
















