/* =========================================
   QUIZ QUESTIONS
   EXACTLY 20 QUESTIONS
========================================= */

const questions = [

    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language is mainly used to style web pages?",
        answers: [
            "HTML",
            "Python",
            "CSS",
            "Java"
        ],
        correct: 2
    },

    {
        question: "Which language is used to make a webpage interactive?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correct: 2
    },

    {
        question: "Which HTML tag creates the largest heading?",
        answers: [
            "<h6>",
            "<h3>",
            "<heading>",
            "<h1>"
        ],
        correct: 3
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correct: 1
    },

    {
        question: "Which CSS property changes the text color?",
        answers: [
            "font-color",
            "text-color",
            "color",
            "background"
        ],
        correct: 2
    },

    {
        question: "Which symbol starts a single-line comment in JavaScript?",
        answers: [
            "//",
            "/*",
            "#",
            "<!--"
        ],
        correct: 0
    },

    {
        question: "Which keyword declares a constant in JavaScript?",
        answers: [
            "var",
            "let",
            "constant",
            "const"
        ],
        correct: 3
    },

    {
        question: "Which operator checks strict equality in JavaScript?",
        answers: [
            "==",
            "=",
            "===",
            "!="
        ],
        correct: 2
    },

    {
        question: "Which HTML tag is used to display an image?",
        answers: [
            "<image>",
            "<img>",
            "<picture>",
            "<src>"
        ],
        correct: 1
    },

    {
        question: "Which CSS property changes the background color?",
        answers: [
            "background-color",
            "color",
            "bg-color",
            "background-style"
        ],
        correct: 0
    },

    {
        question: "Which command prints a message in the JavaScript console?",
        answers: [
            "print()",
            "console.log()",
            "display()",
            "write()"
        ],
        correct: 1
    },

    {
        question: "Which HTML element is used to create a paragraph?",
        answers: [
            "<text>",
            "<paragraph>",
            "<p>",
            "<para>"
        ],
        correct: 2
    },

    {
        question: "Which CSS property controls the size of text?",
        answers: [
            "text-size",
            "font-size",
            "size",
            "font"
        ],
        correct: 1
    },

    {
        question: "Which keyword can be used to declare a variable in JavaScript?",
        answers: [
            "var",
            "variable",
            "create",
            "newvar"
        ],
        correct: 0
    },

    {
        question: "What does CSS stand for?",
        answers: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        correct: 1
    },

    {
        question: "Which method converts JSON text into a JavaScript object?",
        answers: [
            "JSON.convert()",
            "JSON.parse()",
            "JSON.object()",
            "JSON.change()"
        ],
        correct: 1
    },

    {
        question: "Which HTML tag creates a line break?",
        answers: [
            "<break>",
            "<lb>",
            "<br>",
            "<line>"
        ],
        correct: 2
    },

    {
        question: "Which CSS property makes text bold?",
        answers: [
            "font-weight",
            "text-bold",
            "font-style",
            "bold"
        ],
        correct: 0
    },

    {
        question: "Which JavaScript function displays a popup message?",
        answers: [
            "message()",
            "popup()",
            "alert()",
            "show()"
        ],
        correct: 2
    }

];


/* =========================================
   VARIABLES
========================================= */

let currentQuestion = 0;
let score = 0;
let answered = false;

let correctAnswers = 0;
let wrongAnswers = 0;
let unanswered = 0;

let timeLeft = 15;
let timer;


/* =========================================
   ELEMENTS
========================================= */

const homeScreen =
    document.getElementById("home-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const playerName =
    document.getElementById("player-name");

const displayName =
    document.getElementById("display-name");

const resultName =
    document.getElementById("result-name");

const startBtn =
    document.getElementById("start-btn");

const nextBtn =
    document.getElementById("next-btn");

const restartBtn =
    document.getElementById("restart-btn");

const homeBtn =
    document.getElementById("home-btn");

const questionNumber =
    document.getElementById("question-number");

const question =
    document.getElementById("question");

const answers =
    document.getElementById("answers");

const scoreDisplay =
    document.getElementById("score");

const timerDisplay =
    document.getElementById("timer");

const timerRing =
    document.getElementById("timer-ring");

const progress =
    document.getElementById("progress");

const progressText =
    document.getElementById("progress-text");

const finalScore =
    document.getElementById("final-score");

const percentage =
    document.getElementById("percentage");

const resultMessage =
    document.getElementById("result-message");

const correctCount =
    document.getElementById("correct-count");

const wrongCount =
    document.getElementById("wrong-count");

const unansweredCount =
    document.getElementById("unanswered-count");

const bestScore =
    document.getElementById("best-score");


/* =========================================
   LOAD BEST SCORE
========================================= */

function loadBestScore() {

    const savedScore =
        localStorage.getItem("quizBestScore");

    if (savedScore !== null) {

        bestScore.textContent =
            `🏆 Best Score: ${savedScore}/20`;

    }

}

loadBestScore();


/* =========================================
   START QUIZ
========================================= */

startBtn.addEventListener("click", startQuiz);

function startQuiz() {

    let name =
        playerName.value.trim();

    if (name === "") {

        name = "Player";

    }

    displayName.textContent = name;

    resultName.textContent = name;


    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    unanswered = 0;


    scoreDisplay.textContent = "0";


    homeScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");


    showQuestion();

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    clearInterval(timer);

    answered = false;

    nextBtn.classList.add("hidden");


    const current =
        questions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    question.textContent =
        current.question;


    const progressValue =
        ((currentQuestion + 1) / questions.length) * 100;


    progress.style.width =
        progressValue + "%";


    progressText.textContent =
        Math.round(progressValue) + "%";


    answers.innerHTML = "";


    current.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer-btn";

            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => selectAnswer(index, button)
            );


            answers.appendChild(button);

        }
    );


    startTimer();

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    timeLeft = 15;

    updateTimer();


    timer =
        setInterval(() => {

            timeLeft--;

            updateTimer();


            if (timeLeft <= 0) {

                clearInterval(timer);

                timeOut();

            }

        }, 1000);

}


/* =========================================
   UPDATE TIMER
========================================= */

function updateTimer() {

    timerDisplay.textContent =
        timeLeft;


    const circumference =
        188.5;


    const offset =
        circumference -
        (timeLeft / 15) * circumference;


    timerRing.style.strokeDashoffset =
        offset;


    if (timeLeft <= 5) {

        timerRing.style.stroke =
            "#e74c3c";

    } else {

        timerRing.style.stroke =
            "#6c63ff";

    }

}


/* =========================================
   TIME OUT
========================================= */

function timeOut() {

    if (answered) return;

    answered = true;

    unanswered++;


    const correctIndex =
        questions[currentQuestion].correct;


    const buttons =
        document.querySelectorAll(".answer-btn");


    buttons.forEach(
        (button, index) => {

            button.disabled = true;

            if (index === correctIndex) {

                button.classList.add("correct");

            }

        }
    );


    nextBtn.classList.remove("hidden");

    setNextButtonText();

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) return;

    answered = true;

    clearInterval(timer);


    const correctIndex =
        questions[currentQuestion].correct;


    const buttons =
        document.querySelectorAll(".answer-btn");


    buttons.forEach(
        (button, index) => {

            button.disabled = true;


            if (index === correctIndex) {

                button.classList.add("correct");

            }

        }
    );


    if (selectedIndex === correctIndex) {

        score++;

        correctAnswers++;

        scoreDisplay.textContent =
            score;

        selectedButton.classList.add(
            "correct"
        );

    } else {

        wrongAnswers++;

        selectedButton.classList.add(
            "wrong"
        );

    }


    nextBtn.classList.remove("hidden");

    setNextButtonText();

}


/* =========================================
   NEXT BUTTON TEXT
========================================= */

function setNextButtonText() {

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextBtn.innerHTML =
            "See Result 🎉";

    } else {

        nextBtn.innerHTML =
            "Next Question <span>→</span>";

    }

}


/* =========================================
   NEXT QUESTION
========================================= */

nextBtn.addEventListener(
    "click",
    nextQuestion
);


function nextQuestion() {

    if (!answered) return;


    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        showQuestion();

    } else {

        showResult();

    }

}


/* =========================================
   SHOW RESULT
========================================= */

function showResult() {

    clearInterval(timer);


    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    finalScore.textContent =
        score;


    const percentageValue =
        Math.round(
            (score / questions.length) * 100
        );


    percentage.textContent =
        percentageValue + "%";


    correctCount.textContent =
        correctAnswers;


    wrongCount.textContent =
        wrongAnswers;


    unansweredCount.textContent =
        unanswered;


    /* Result message */

    if (percentageValue >= 90) {

        resultMessage.textContent =
            "🏆 Outstanding! You have excellent knowledge!";

    }

    else if (percentageValue >= 70) {

        resultMessage.textContent =
            "🌟 Great work! Keep improving your skills!";

    }

    else if (percentageValue >= 50) {

        resultMessage.textContent =
            "👍 Good effort! A little more practice will help.";

    }

    else {

        resultMessage.textContent =
            "💪 Keep learning and try again. You can do it!";

    }


    /* Save best score */

    const oldBest =
        Number(
            localStorage.getItem(
                "quizBestScore"
            )
        ) || 0;


    if (score > oldBest) {

        localStorage.setItem(
            "quizBestScore",
            score
        );

        bestScore.textContent =
            `🏆 Best Score: ${score}/20`;

    }

}


/* =========================================
   PLAY AGAIN
========================================= */

restartBtn.addEventListener(
    "click",
    () => {

        resultScreen.classList.add("hidden");

        quizScreen.classList.remove("hidden");

        currentQuestion = 0;

        score = 0;

        correctAnswers = 0;

        wrongAnswers = 0;

        unanswered = 0;

        scoreDisplay.textContent = "0";

        showQuestion();

    }
);


/* =========================================
   HOME
========================================= */

homeBtn.addEventListener(
    "click",
    () => {

        clearInterval(timer);

        resultScreen.classList.add("hidden");

        quizScreen.classList.add("hidden");

        homeScreen.classList.remove("hidden");

        loadBestScore();

    }
);





