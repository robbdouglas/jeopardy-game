// CATEGORIES: Harry Potter, Music, Idioms, Web Development, Video Games

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
    "What is the name of the girl who dated Ron Weasley in the 6th book?",
    ["Hermione", "Lavender", "Parvati", "Cho"],
    "Lavender"
  ),
  new Question(
    "Harry Potter",
    300,
    "The spell 'Sectumsempra' is known for causing deep and slashing wounds. Who was the unintended victim of this spell, cast by Harry Potter?",
    ["Professor Snape", "Hagrid", "Draco Malfoy", "Luna Lovegood"],
    "Draco Malfoy"
  ),
  new Question(
    "Harry Potter",
    400,
    "In the Room of Requirement, what does Dumbledore's Army use to practice spells and hexes?",
    [
      "The Mirror of Erised",
      "The Pensieve",
      "The Vanishing Cabinet",
      "The Dummy Death Eaters",
    ],
    "The Dummy Death Eaters"
  ),
  new Question(
    "Harry Potter",
    500,
    "In the Triwizard Tournament, what spell did Viktor Krum use to transfigure a shark during the Second Task?",
    [
      "Hydrosquamenta",
      "Aquamutatio Selachimorpha",
      "Gelum Solum",
      "Ferula Aquae",
    ],
    "Gelum Solum"
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
    "What was the former name of the band 'Electric Callboy'?",
    ["Energy Callboy", "Edgy Callboy", "Eskimo Callboy", "Epic Callboy"],
    "Eskimo Callboy"
  ),
  new Question(
    "Music",
    300,
    "Which if the following bands has a female lead singer?",
    ["Tonight Alive", "All Time Low", "Green Day", "Boyce Avenue"],
    "Tonight Alive"
  ),
  new Question(
    "Music",
    400,
    "Who is the lead singer of the band 'Against the Current'?",
    ["Tamara Faye", "Chrissy Costanza", "Emily Warren", "Lizzy LeMare"],
    "Chrissy Costanza"
  ),
  new Question(
    "Music",
    500,
    "Which of the following bands is not an alternative / heavy metal band?",
    ["Falling in Reverse", "Bring me the Horizon", "Pendulum", "I Prevail"],
    "Pendulum"
  ),

  new Question(
    "Web Dev",
    100,
    "What does HTML stand for?",
    [
      "Hyper Text Makeup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
    ],
    "Hyper Text Markup Language"
  ),
  new Question(
    "Web Dev",
    200,
    "What does HTML stand for?",
    [
      "Hyper Text Makeup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
    ],
    "Hyper Text Markup Language"
  ),
  new Question(
    "Web Dev",
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
    "Web Dev",
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
    "Web Dev",
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
    "What does the idiom 'to burn bridges' mean?",
    [
      "to destroy bridges",
      "to ruin relationships",
      "to attempt something impossible",
      "to change your job",
    ],
    "to ruin relationships"
  ),
  new Question(
    "Idioms",
    300,
    "What does the idiom 'You're barkin' up the wrong tree' mean?",
    [
      "To be mistaken",
      "To be lost in the woods",
      "To be barking at a tree",
      "To be searching for something in the wrong place",
    ],
    "to be searching for something in the wrong place"
  ),
  new Question(
    "Idioms",
    400,
    "What does the idiom 'burn the midnight oil' mean?",
    [
      "Working late into the night",
      "Setting something on fire",
      "Staying up to watch a late-night show",
      "Partying all night long",
    ],
    "Working late into the night"
  ),
  new Question(
    "Idioms",
    500,
    "What does the idiom 'to jump on the bandwagon' mean?",
    [
      "Criticize a popular trend",
      "Join others in doing something fashionable",
      "Form a new musical group",
      "Start a parade",
    ],
    "Join others in doing something fashionable"
  ),
  new Question(
    "Video Games",
    100,
    " In the game The Legend of Zelda, what is the protagonist's name?",
    ["Zelda", "Ganondorf", "Link", "Epona"],
    "Link"
  ),
  new Question(
    "Video Games",
    200,
    "Which of the following video games is not an ego shooter?",
    ["Call of Duty", "Counter Strike", "League of Legends", "Borderlands"],
    "League of Legends"
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
    "Which of the following Pokémon is not a ground type?",
    ["Groudon", "Garchomp", "Golem", "Giratina"],
    "Giratina"
  ),
  new Question(
    "Video Games",
    500,
    "Which of the folliwing games is not a Paper Mario Game?",
    [
      "Paper Mario: The Thousand-Year Door",
      "Paper Mario: Sticker Star",
      "Paper Mario: The Origami King",
      "Paper Mario 64",
    ],
    "Paper Mario: 64"
  ),
];
