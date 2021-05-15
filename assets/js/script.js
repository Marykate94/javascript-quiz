var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        question:
            "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
];


//add ability to save initials and score
// set array for saving initials into local storage
var scores = []
var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
var contentEl = document.querySelector("#button-div");

var questionIndex = 0;
var correctCount = 0;

var time = 60;
var intervalId;
var myobj = document.getElementById("intro");

// create a function to suppress other parts from showing. ex: start quiz button once clicked is suppressed
 // create start button
// var para = document.createElement("P");               // Create a <p> element
// para.innerText = "This is a paragraph";               // Insert text
// document.body.appendChild(para);                      // Append <p> to <body>

// var button =
//     document.createElement("button");
// button.innerHTML = "Start Quiz";

// var body = document.getElementsByTagName("body")
// [0];
// body.appendChild(button);

// button.addEventListener("click", startGame);

// create start game function 
// function startGame() {
//     myobj.remove();
//     // remove button after clicked 
//     button.remove();
//     // call update time
//     timerEl.textContent = time;
//     // updateTime();
//     renderQuestion();


// };
function startQuiz() {
    //h2
    h2 = document.createElement("h2");
    h2.textContent = "Welcome";
    h2.classList.add("title-content");
    contentEl.appendChild(h2);
    // p
    p = document.createElement("p");
    p.textContent = "hello there";
    p.classList.add("title-content");
    contentEl.appendChild(p);
    //button
    button = document.createElement("button");
    button.textContent = "Start Game";
    button.setAttribute("id", "start-button");
    contentEl.appendChild(button);

    button.addEventListener("click", renderQuestion);
}

function endQuiz() {
    clearInterval(intervalId);
    var body = document.body;
    body.innerHTML = "Game over, You scored " + correctCount;

    // add local storage and connect to var score array
    // add input for initials -- textInput command 
}

function updateTime() {
    // if (time == 0) {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
    return;
}

function renderQuestion() {
    button.remove();
    h2.remove();
    p.remove();

    intervalId = setInterval(updateTime, 1000);

    questionEl.textContent = questions[questionIndex].question;

    optionListEl.innerHTML = "";
    questionResultEl.innerHTML = "";

    var choices = questions[questionIndex].choices;
    var choicesLenth = choices.length;

    for (var i = 0; i < choicesLenth; i++) {
        var questionListItem = document.createElement("li");
        questionListItem.textContent = choices[i];
        optionListEl.append(questionListItem);
    }
}

function nextQuestion() {
    questionIndex++;
    if (questionIndex === questions.length) {
        time = 0;
    }
    renderQuestion();
}


function checkAnswer(event) {
    clearInterval(intervalId);
    if (event.target.matches("li")) {
        var answer = event.target.textContent;
        if (answer === questions[questionIndex].answer) {
            questionResultEl.textContent = "Correct";
            correctCount++;
        } else {
            questionResultEl.textContent = "Incorrect";
            time = time - 2;
            timerEl.textContent = time;
        }
    }
    setTimeout(nextQuestion, 2000);
}
// create a local storage that connects to score = [] to save scores
startQuiz();
//   renderQuestion();
//   startButton.addEventListener("click", startQuiz);
optionListEl.addEventListener("click", checkAnswer);
