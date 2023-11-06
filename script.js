class Question {
    constructor(category, points, question, answer) {
      this.category = category;
      this.points = points;
      this.question = question;
      this.answer = answer;
      this.used = false;
    }
  }
  
  let playerCount;
  let currentPlayerIndex = 0;
  let players = [];
  
  let questions = [
    new Question(
      "Geographie",
      100,
      "Was ist die Hauptstadt von Frankreich?",
      "Paris"
    ),
    new Question(
      "Geographie",
      200,
      "Was ist die Hauptstadt von Frankreich?",
      "Paris"
    ),
    new Question(
      "Geographie",
      300,
      "Was ist die Hauptstadt von Frankreich?",
      "Paris"
    ),
    new Question(
      "Geographie",
      400,
      "Was ist die Hauptstadt von Frankreich?",
      "Paris"
    ),
    new Question(
      "Geographie",
      500,
      "Was ist die Hauptstadt von Frankreich?",
      "Paris"
    ),
    new Question(
      "Geschichte",
      100,
      "In welchem Jahr wurde die Berliner Mauer errichtet?",
      "1961"
    ),
    new Question(
      "Geschichte",
      200,
      "In welchem Jahr wurde die Berliner Mauer errichtet?",
      "1961"
    ),
    new Question(
      "Geschichte",
      300,
      "In welchem Jahr wurde die Berliner Mauer errichtet?",
      "1961"
    ),
    new Question(
      "Geschichte",
      400,
      "In welchem Jahr wurde die Berliner Mauer errichtet?",
      "1961"
    ),
    new Question(
      "Geschichte",
      500,
      "In welchem Jahr wurde die Berliner Mauer errichtet?",
      "1961"
    ),
    new Question(
      "Sport",
      100,
      "Wie viele Spieler hat eine Fußballmannschaft?",
      "11"
    ),
    new Question(
      "Sport",
      200,
      "Wie viele Spieler hat eine Fußballmannschaft?",
      "11"
    ),
    new Question(
      "Sport",
      300,
      "Wie viele Spieler hat eine Fußballmannschaft?",
      "11"
    ),
    new Question(
      "Sport",
      400,
      "Wie viele Spieler hat eine Fußballmannschaft?",
      "11"
    ),
    new Question(
      "Sport",
      500,
      "Wie viele Spieler hat eine Fußballmannschaft?",
      "11"
    ),
    new Question(
      "Technik",
      100,
      "Wer hat das erste Smartphone erfunden?",
      "Apple"
    ),
    new Question(
      "Technik",
      200,
      "Wer hat das erste Smartphone erfunden?",
      "Apple"
    ),
    new Question(
      "Technik",
      300,
      "Wer hat das erste Smartphone erfunden?",
      "Apple"
    ),
    new Question(
      "Technik",
      400,
      "Wer hat das erste Smartphone erfunden?",
      "Apple"
    ),
    new Question(
      "Technik",
      500,
      "Wer hat das erste Smartphone erfunden?",
      "Apple"
    ),
    new Question(
      "Politik",
      100,
      "Wer ist der Bundeskanzler von Deutschland?",
      "Angela Merkel"
    ),
    new Question(
      "Politik",
      200,
      "Wer ist der Bundeskanzler von Deutschland?",
      "Angela Merkel"
    ),
    new Question(
      "Politik",
      300,
      "Wer ist der Bundeskanzler von Deutschland?",
      "Angela Merkel"
    ),
    new Question(
      "Politik",
      400,
      "Wer ist der Bundeskanzler von Deutschland?",
      "Angela Merkel"
    ),
    new Question(
      "Politik",
      500,
      "Wer ist der Bundeskanzler von Deutschland?",
      "Angela Merkel"
    ),
  ];
  
  function createPlayerInputs() {
    playerCount = document.getElementById("player-count").value;
  
    let startScreen = document.getElementById("start-screen");
    startScreen.innerHTML = `<h1>JEOPARDY</h1><p>Prima! Es spielen ${playerCount} Spieler mit! Wie heißt ihr?</p>`;
  
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
                      <div>Frage ${questions[questionIndex].points}</div>
                      <button onclick="selectQuestion(${questionIndex})">Auswählen</button>
                  `;
        questionRow.appendChild(questionCell);
      }
      gameBoard.appendChild(questionRow);
    }
  
    // Anzeige des aktuellen Spielers
    let currentPlayerInfo = document.createElement("div");
    currentPlayerInfo.classList.add("player-info");
    currentPlayerInfo.innerHTML = `<p><span style="color: red">${players[currentPlayerIndex].name}</span> ist am Zug! Bitte wähle eine Frage aus!</p>`;
    gameBoard.appendChild(currentPlayerInfo);
  
    displayPlayerInfo();
  }
  
  function selectQuestion(questionIndex) {
    if (questions[questionIndex].used) {
      alert("Diese Frage wurde bereits gespielt!");
      return;
    }
  
    let answer = prompt(questions[questionIndex].question);
  
    if (
      answer &&
      answer.toLowerCase() === questions[questionIndex].answer.toLowerCase()
    ) {
      players[currentPlayerIndex].points += questions[questionIndex].points;
    }
  
    questions[questionIndex].used = true;
  
    currentPlayerIndex = (currentPlayerIndex + 1) % playerCount;
  
    if (questions.some((q) => !q.used)) {
      renderGameBoard();
    } else {
      endGame();
    }
  
    displayPlayerInfo();
  }
  
  function displayPlayerInfo() {
    let gameBoard = document.getElementById("game-board");
    let playerScores = document.createElement("div");
    playerScores.classList.add("player-scores");
  
    for (let i = 0; i < playerCount; i++) {
      let playerScore = document.createElement("div");
      playerScore.classList.add("player-score");
      playerScore.innerHTML = `${players[i].name}: ${players[i].points} Punkte`;
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
      `Spiel beendet! ${winner.name} hat gewonnen mit ${winner.points} Punkten.`
    );
  }
  