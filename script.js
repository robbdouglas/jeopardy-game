class Question {
  constructor(category, points, question, answers, correctAnswer) {
    this.category = category;
    this.points = points;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.used = false;
  }
}

let playerCount;
let currentPlayerIndex = 0;
let players = [];

let timer;

let questions = [
  new Question(
    "Harry Potter",
    100,
    "Who is the headmaster of Hogwarts until the end of the 6th book?",
    ["Dumbledore", "Snape", "Voldemort", "Hagrid"],
    "Dumbledore"
  ),
  new Question(
    "Harry Potter",
    200,
    "Who is the headmaster of Hogwarts until the end of the 6th book?",
    ["Dumbledore", "Snape", "Voldemort", "Hagrid"],
    "Dumbledore"
  ),
  new Question(
    "Harry Potter",
    300,
    "Who is the headmaster of Hogwarts until the end of the 6th book?",
    ["Dumbledore", "Snape", "Voldemort", "Hagrid"],
    "Dumbledore"
  ),
  new Question(
    "Harry Potter",
    400,
    "Who is the headmaster of Hogwarts until the end of the 6th book?",
    ["Dumbledore", "Snape", "Voldemort", "Hagrid"],
    "Dumbledore"
  ),
  new Question(
    "Harry Potter",
    500,
    "Who is the headmaster of Hogwarts until the end of the 6th book?",
    ["Dumbledore", "Snape", "Voldemort", "Hagrid"],
    "Dumbledore"
  ),
  new Question(
    "Music",
    100,
    "Who is the lead singer of the band 'Queen'?",
    ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "Freddie Mercury"
  ),
  new Question(
    "Music",
    200,
    "Who is the lead singer of the band 'Queen'?",
    ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "Freddie Mercury"
  ),
  new Question(
    "Music",
    300,
    "Who is the lead singer of the band 'Queen'?",
    ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "Freddie Mercury"
  ),
  new Question(
    "Music",
    400,
    "Who is the lead singer of the band 'Queen'?",
    ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "Freddie Mercury"
  ),
  new Question(
    "Music",
    500,
    "Who is the lead singer of the band 'Queen'?",
    ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "Freddie Mercury"
  ),
  new Question(
    "Web Development",
    100,
    "What does HTML stand for?",
    [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Makeup Language",
    ],
    "Hyper Text Markup Language"
  ),
  new Question(
    "Web Development",
    200,
    "What does HTML stand for?",
    [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Makeup Language",
    ],
    "Hyper Text Markup Language"
  ),
  new Question(
    "Web Development",
    300,
    "What does HTML stand for?",
    [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Makeup Language",
    ],
    "Hyper Text Markup Language"
  ),
  new Question(
    "Web Development",
    400,
    "What does HTML stand for?",
    [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Makeup Language",
    ],
    "Hyper Text Markup Language"
  ),
  new Question(
    "Web Development",
    500,
    "What does HTML stand for?",
    [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Makeup Language",
    ],
    "Hyper Text Markup Language"
  ),
  new Question(
    "Idioms",
    100,
    "What does the idiom 'to be over the moon' mean?",
    [
      "to be very happy",
      "to be very sad",
      "to be very angry",
      "to be very tired",
    ],
    "to be very happy"
  ),
  new Question(
    "Idioms",
    200,
    "What does the idiom 'to be over the moon' mean?",
    [
      "to be very happy",
      "to be very sad",
      "to be very angry",
      "to be very tired",
    ],
    "to be very happy"
  ),
  new Question(
    "Idioms",
    300,
    "What does the idiom 'to be over the moon' mean?",
    [
      "to be very happy",
      "to be very sad",
      "to be very angry",
      "to be very tired",
    ],
    "to be very happy"
  ),
  new Question(
    "Idioms",
    400,
    "What does the idiom 'to be over the moon' mean?",
    [
      "to be very happy",
      "to be very sad",
      "to be very angry",
      "to be very tired",
    ],
    "to be very happy"
  ),
  new Question(
    "Idioms",
    500,
    "What does the idiom 'to be over the moon' mean?",
    [
      "to be very happy",
      "to be very sad",
      "to be very angry",
      "to be very tired",
    ],
    "to be very happy"
  ),
  new Question(
    "Video Games",
    100,
    "Which game is the best-selling video game of all time?",
    ["Minecraft", "Tetris", "GTA V", "Wii Sports"],
    "Minecraft"
  ),
  new Question(
    "Video Games",
    200,
    "Which game is the best-selling video game of all time?",
    ["Minecraft", "Tetris", "GTA V", "Wii Sports"],
    "Minecraft"
  ),
  new Question(
    "Video Games",
    300,
    "Which game is the best-selling video game of all time?",
    ["Minecraft", "Tetris", "GTA V", "Wii Sports"],
    "Minecraft"
  ),
  new Question(
    "Video Games",
    400,
    "Which game is the best-selling video game of all time?",
    ["Minecraft", "Tetris", "GTA V", "Wii Sports"],
    "Minecraft"
  ),
  new Question(
    "Video Games",
    500,
    "Which game is the best-selling video game of all time?",
    ["Minecraft", "Tetris", "GTA V", "Wii Sports"],
    "Minecraft"
  ),
];

function createPlayerInputs() {
  playerCount = document.getElementById("player-count").value;

  let startScreen = document.getElementById("start-screen");
  startScreen.innerHTML = `<h1>JEOPARDY</h1><p>Nice! ${
    playerCount > 1
      ? "We play with " + playerCount + " players! Please enter your names!"
      : "You're playing alone! What's your name?"
  } </p>`;

  let playerNamesDiv = document.createElement("div");
  playerNamesDiv.id = "player-names";
  startScreen.appendChild(playerNamesDiv);

  for (let i = 0; i < playerCount; i++) {
    let playerNameInput = document.createElement("input");
    playerNameInput.type = "text";
    playerNameInput.placeholder = `Player ${i + 1} name`;
    playerNameInput.id = `player-name-${i + 1}`;
    playerNamesDiv.appendChild(playerNameInput);
  }

  let startButton = document.createElement("button");
  startButton.textContent = "START GAME";
  startButton.onclick = startGame;
  playerNamesDiv.appendChild(startButton);
}

function startGame() {
  players = [];

  for (let i = 0; i < playerCount; i++) {
    let playerName = document.getElementById(`player-name-${i + 1}`).value;
    players.push({ name: playerName, points: 0 });
  }

  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-board").style.display = "block";

  renderGameBoard();
}

function renderGameBoard() {
  let gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = "";

  // extract unique categories
  let uniqueCategories = Array.from(new Set(questions.map((q) => q.category)));

  // create category row
  let categoriesRow = document.createElement("div");
  categoriesRow.classList.add("categories-row");
  for (let i = 0; i < uniqueCategories.length; i++) {
    let categoryCell = document.createElement("div");
    categoryCell.classList.add("category-cell");
    categoryCell.textContent = uniqueCategories[i];
    categoriesRow.appendChild(categoryCell);
  }
  gameBoard.appendChild(categoriesRow);

  // create question and points rows
  for (let i = 0; i < 5; i++) {
    let questionRow = document.createElement("div");
    questionRow.classList.add("question-row");
    for (let j = 0; j < uniqueCategories.length; j++) {
      let questionIndex = j * 5 + i;
      let questionCell = document.createElement("div");
      questionCell.classList.add("question-cell");

      if (questions[questionIndex].used) {
        // Set grey background and display "already played" message in red
        questionCell.classList.add("already-played");
        questionCell.innerHTML = `<div style="color:red">Already played</div>`;
      } else {
        // Display points and button
        questionCell.innerHTML = `
          <div>${questions[questionIndex].points}</div>
          <button onclick="displayAnswers(${questionIndex}, this)">Show question</button>
        `;
      }

      questionRow.appendChild(questionCell);
    }
    gameBoard.appendChild(questionRow);
  }

  // current player info
  let currentPlayerInfo = document.createElement("div");
  currentPlayerInfo.classList.add("player-info");
  currentPlayerInfo.innerHTML = `<p>It's your turn, <span style="color: red">${players[currentPlayerIndex].name}</span>! Please choose your question!</p>`;
  gameBoard.appendChild(currentPlayerInfo);

  displayPlayerInfo();
}

// Timer

function displayAnswers(questionIndex) {
  let gameBoard = document.getElementById("game-board");
  gameBoard.style.display = "none";

  let questionCard = document.createElement("div");
  questionCard.classList.add("question-card");

  let questionText = document.createElement("div");
  questionText.innerHTML = `<p>${questions[questionIndex].question}</p>`;

  let answerOptions = document.createElement("div");
  answerOptions.classList.add("answer-options");

  // Buchstaben A, B, C, D
  const answerLetters = ["A", "B", "C", "D"];

  questions[questionIndex].answers.forEach((answer, index) => {
    let answerButton = document.createElement("button");
    answerButton.innerHTML = `<span style="font-weight:bold">${answerLetters[index]}:</span> ${answer}`;
    answerButton.classList.add("answer-button"); // Füge Klasse für Styling hinzu
    answerButton.onclick = function () {
      checkAnswer(questionIndex, index);
    };
    answerOptions.appendChild(answerButton);

    // Füge nach jedem zweiten Button einen Zeilenumbruch und Abstand hinzu
    if ((index + 1) % 2 === 0) {
      answerOptions.appendChild(document.createElement("br"));
      answerOptions.appendChild(document.createElement("br")); // Zusätzlicher Zeilenumbruch für Abstand
    } else if (index < questions[questionIndex].answers.length - 1) {
      // Füge horizontalen Abstand zwischen den Buttons hinzu
      let space = document.createElement("span");
      space.textContent = "   "; // Anpassbarer Abstand
      answerOptions.appendChild(space);
    }
  });

  questionCard.appendChild(questionText);
  questionCard.appendChild(answerOptions);
  document.body.appendChild(questionCard);

  let continueButton = document.createElement("button");
  continueButton.textContent = "Continue";
  continueButton.style.display = "none";
  continueButton.onclick = function () {
    document.body.removeChild(questionCard);
    document.body.removeChild(messageBox);
    gameBoard.style.display = "block";
    continueButton.style.display = "none";

    // Aktiviere alle Antwortbuttons wieder
    document.querySelectorAll(".answer-button").forEach((button) => {
      button.disabled = false;
    });
  };

  let messageBox = document.createElement("div");
  messageBox.classList.add("message-box", "transparent-bg");
  messageBox.style.display = "none"; // Verstecke Nachrichtenbox initial

  document.body.appendChild(messageBox);
  document.body.appendChild(continueButton);

  function checkAnswer(questionIndex, selectedAnswerIndex) {
    let selectedAnswer = questions[questionIndex].answers[selectedAnswerIndex];
    let isCorrect = selectedAnswer === questions[questionIndex].correctAnswer;

    let pointsEarned = isCorrect ? questions[questionIndex].points : 0;
    players[currentPlayerIndex].points += pointsEarned;

    messageBox.innerHTML = isCorrect
      ? `<p>Correct! You just earned ${pointsEarned} points. You have a score of ${players[currentPlayerIndex].points} points now.</p>`
      : `<p>Wrong answer! The correct answer would have been <span style="font-weight:bold">${questions[questionIndex].correctAnswer}</span>.</p>`;

    messageBox.style.display = "block"; // Zeige Nachrichtenbox
    continueButton.style.display = "block";

    // Deaktiviere alle Antwortbuttons
    document.querySelectorAll(".answer-button").forEach((button) => {
      button.disabled = true;
    });

    questions[questionIndex].used = true;

    currentPlayerIndex = (currentPlayerIndex + 1) % playerCount;

    if (questions.some((q) => !q.used)) {
      renderGameBoard();
    } else {
      endGame();
    }

    displayPlayerInfo();
  }

  // Zeige Antwortmöglichkeiten
  answerOptions.style.display = "block";
}

function displayPlayerInfo() {
  let gameBoard = document.getElementById("game-board");
  let playerScores = document.createElement("div");
  playerScores.classList.add("player-scores");

  for (let i = 0; i < playerCount; i++) {
    let playerScore = document.createElement("div");
    playerScore.classList.add("player-score");
    playerScore.innerHTML = `${players[i].name}: ${players[i].points} points`;
    playerScores.appendChild(playerScore);
  }

  // Remove existing player scores if there are any and append new ones
  let existingPlayerScores = document.getElementsByClassName("player-scores");
  if (existingPlayerScores.length > 0) {
    gameBoard.removeChild(existingPlayerScores[0]);
  }

  gameBoard.appendChild(playerScores);
}

function endGame() {
  let winner = players.reduce((prev, current) =>
    prev.points > current.points ? prev : current
  );
  alert(
    `The game is over! ${winner.name} is the winner with ${winner.points} points! Make some noise! 🎉🎉🎉`
  );
}
