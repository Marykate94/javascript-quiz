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


  var questionEl = document.querySelector("#question");
  var optionListEl = document.querySelector("#option-list");
  var questionResultEl = document.querySelector("#question-result");
  var timerEl = document.querySelector("#timer");
  
  var questionIndex = 0;
  var correctCount = 0;
  
  var time = 60;
  var intervalId;

  // create start button
  var button =
  document.createElement("button");
  button.innerHTML = "Start Quiz";

  var body = document.getElementsByTagName("body")
  [0];
  body.appendChild(button);

  button.addEventListener ("click", startGame);

  // create start game function 
  function startGame() {
    // call update time
    intervalId = setInterval(updateTime, 1000);
    timerEl.textContent = time;
    // updateTime();
    renderQuestion();

  };

  
  function endQuiz() {
    clearInterval(intervalId);
    var body = document.body;
    body.innerHTML = "Game over, You scored " + correctCount;
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
    
    // intervalId = setInterval(updateTime, 1000);
    
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
//   var startButton = "start-button";

//   function startQuiz() {

//   }

//   renderQuestion();
//   startButton.addEventListener("click", startQuiz);
  optionListEl.addEventListener("click", checkAnswer);
