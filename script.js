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
    "Movies",
    100,
    "Who is the director of the movie 'Titanic'?",
    [
      "James Cameron",
      "Steven Spielberg",
      "Quentin Tarantino",
      "Martin Scorsese",
    ],
    "James Cameron"
  ),
  new Question(
    "Movies",
    200,
    "Who is the director of the movie 'Titanic'?",
    [
      "James Cameron",
      "Steven Spielberg",
      "Quentin Tarantino",
      "Martin Scorsese",
    ],
    "James Cameron"
  ),
  new Question(
    "Movies",
    300,
    "Who is the director of the movie 'Titanic'?",
    [
      "James Cameron",
      "Steven Spielberg",
      "Quentin Tarantino",
      "Martin Scorsese",
    ],
    "James Cameron"
  ),
  new Question(
    "Movies",
    400,
    "Who is the director of the movie 'Titanic'?",
    [
      "James Cameron",
      "Steven Spielberg",
      "Quentin Tarantino",
      "Martin Scorsese",
    ],
    "James Cameron"
  ),
  new Question(
    "Movies",
    500,
    "Who is the director of the movie 'Titanic'?",
    [
      "James Cameron",
      "Steven Spielberg",
      "Quentin Tarantino",
      "Martin Scorsese",
    ],
    "James Cameron"
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
    "Geography",
    100,
    "What is the capital of Germany?",
    ["Berlin", "Hamburg", "Munich", "Frankfurt"],
    "Berlin"
  ),
  new Question(
    "Geography",
    200,
    "What is the capital of Germany?",
    ["Berlin", "Hamburg", "Munich", "Frankfurt"],
    "Berlin"
  ),
  new Question(
    "Geography",
    300,
    "What is the capital of Germany?",
    ["Berlin", "Hamburg", "Munich", "Frankfurt"],
    "Berlin"
  ),
  new Question(
    "Geography",
    400,
    "What is the capital of Germany?",
    ["Berlin", "Hamburg", "Munich", "Frankfurt"],
    "Berlin"
  ),
  new Question(
    "Geography",
    500,
    "What is the capital of Germany?",
    ["Berlin", "Hamburg", "Munich", "Frankfurt"],
    "Berlin"
  ),
];

function createPlayerInputs() {
  playerCount = document.getElementById("player-count").value;

  let startScreen = document.getElementById("start-screen");
  startScreen.innerHTML = `<h1>JEOPARDY</h1><p>Nice! We play with ${playerCount} players! Please enter your names!</p>`;

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

// set player count to 1 as default
playerCountSelect.value = "1";

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

  // Eindeutige Kategorien extrahieren
  let uniqueCategories = Array.from(new Set(questions.map((q) => q.category)));

  // Kategorien erstellen
  let categoriesRow = document.createElement("div");
  categoriesRow.classList.add("categories-row");
  for (let i = 0; i < uniqueCategories.length; i++) {
    let categoryCell = document.createElement("div");
    categoryCell.classList.add("category-cell");
    categoryCell.textContent = uniqueCategories[i];
    categoriesRow.appendChild(categoryCell);
  }
  gameBoard.appendChild(categoriesRow);

  // Fragen und Punkte erstellen
  for (let i = 0; i < 5; i++) {
    let questionRow = document.createElement("div");
    questionRow.classList.add("question-row");
    for (let j = 0; j < uniqueCategories.length; j++) {
      let questionIndex = j * 5 + i;
      let questionCell = document.createElement("div");
      questionCell.classList.add("question-cell");
      questionCell.innerHTML = `
                    <div>${questions[questionIndex].points}</div>
                    <button onclick="displayAnswers(${questionIndex})">Show question</button>
                `;
      questionRow.appendChild(questionCell);
    }
    gameBoard.appendChild(questionRow);
  }

  // Anzeige des aktuellen Spielers
  let currentPlayerInfo = document.createElement("div");
  currentPlayerInfo.classList.add("player-info");
  currentPlayerInfo.innerHTML = `<p>It's your turn, <span style="color: red">${players[currentPlayerIndex].name}</span>! Please choose your question!</p>`;
  gameBoard.appendChild(currentPlayerInfo);

  displayPlayerInfo();
}

function displayAnswers(questionIndex) {
  if (questions[questionIndex].used) {
    alert("Diese Frage wurde bereits gespielt!");
    return;
  }

  let gameBoard = document.getElementById("game-board");
  gameBoard.style.display = "none";

  let questionCard = document.createElement("div");
  questionCard.classList.add("question-card");

  let questionText = document.createElement("div");
  questionText.innerHTML = `<p>${questions[questionIndex].question}</p>`;

  let answerOptions = document.createElement("div");
  answerOptions.style.display = "none";

  questions[questionIndex].answers.forEach((answer, index) => {
    let answerButton = document.createElement("button");
    answerButton.textContent = answer;
    answerButton.onclick = function () {
      checkAnswer(questionIndex, index);
    };
    answerOptions.appendChild(answerButton);
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
  };

  let messageBox = document.createElement("div");
  messageBox.classList.add("message-box", "transparent-bg");
  messageBox.style.display = "none"; // Hide message box initially

  document.body.appendChild(messageBox);
  document.body.appendChild(continueButton);

  function checkAnswer(questionIndex, selectedAnswerIndex) {
    let selectedAnswer = questions[questionIndex].answers[selectedAnswerIndex];
    let isCorrect = selectedAnswer === questions[questionIndex].correctAnswer;

    let pointsEarned = isCorrect ? questions[questionIndex].points : 0;
    players[currentPlayerIndex].points += pointsEarned;

    messageBox.innerHTML = isCorrect
      ? `<p>Correct! You just earned ${pointsEarned} points. You have a score of ${players[currentPlayerIndex].points} points now.</p>`
      : `<p>Wrong answer! The correct answer would have been ${questions[questionIndex].correctAnswer}.</p>`;

    messageBox.style.display = "block"; // Show message box
    continueButton.style.display = "block";

    questions[questionIndex].used = true;

    currentPlayerIndex = (currentPlayerIndex + 1) % playerCount;

    if (questions.some((q) => !q.used)) {
      renderGameBoard();
    } else {
      endGame();
    }

    displayPlayerInfo();
  }

  // Show answer options
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

  // Lösche vorhandene Player-Info-Elemente, bevor neue hinzugefügt werden
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
