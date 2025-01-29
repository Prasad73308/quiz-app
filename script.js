const quizData = [
    { question: "What is the capital of Telangana?", options: ["Vizag", "Vijayawada", "Tirupati", "Hyderabad"], answer: "Hyderabad" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "What is 2+2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "Who is GOAT of cricket?", options: ["Dhoni", "Virat", "Sachin", "AB Devilers"], answer: "Virat" }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    
    questionEl.innerText = quizData[currentQuestion].question;
    optionsEl.innerHTML = "";
    
    quizData[currentQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("score-value").innerText = `${score} / ${quizData.length}`;
    document.getElementById("restart").style.display = "block";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("question").style.display = "block";
    document.getElementById("options").style.display = "block";
    document.getElementById("score").style.display = "none";
    document.getElementById("restart").style.display = "none";
    loadQuestion();
}
loadQuestion();