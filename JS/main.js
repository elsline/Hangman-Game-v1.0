const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

//Generate Letters

lettersArray.forEach((letter) => {
  // create Span
  let span = document.createElement("span");
  // Create Letter Text Node
  let = theLatter = document.createTextNode(letter);
  // Append The letter To Span
  span.appendChild(theLatter);
  // Add class To Span
  span.className = "letter-box";
  // Append Span To The Letters Container
  lettersContainer.appendChild(span);
});

// Object Of Words + Categories
const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  Animes: [
    "Naruto",
    "Dragon Ball",
    "One Piece",
    "Attack on Titan",
    "Death Note",
    "My Hero Academia",
  ],

  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

let allKeys = Object.keys(words);

// Get Random Property

let randomPropNumber = Math.floor(Math.random() * allKeys.length);

let randomPropName = allKeys[randomPropNumber];

let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueName = randomPropValue[randomValueNumber];

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guess Element

let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array

let lettersAndSpace = Array.from(randomValueName);

// Create Spans Depend On Words

lettersAndSpace.forEach((letter) => {
  // Create Empty Span
  let emptySpan = document.createElement("span");
  if (letter === " ") {
    emptySpan.className = "space-span ";
  }

  // Append Span To the Letters Guess container
  lettersGuessContainer.appendChild(emptySpan);
});
console.log(lettersAndSpace);

let wrongAttempts = 0;
let rightAttempts = 0;

let draw = document.querySelector(".hangman-draw");

//Set The Chose Status

document.addEventListener("click", (e) => {
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    // Get clicked Letter
    let clickedLetter = e.target.innerHTML.toLowerCase();

    // Get Chosen Word
    let ChosenWord = Array.from(randomValueName.toLowerCase());

    let guessSpans = document.querySelectorAll(".letters-guess span");

    ChosenWord.forEach((wordLetter, wordIndex) => {
      if (clickedLetter === wordLetter) {
        theStatus = true;

        guessSpans.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });
    if (theStatus !== true) {
      wrongAttempts++;
      // Add wrong Class on The Draw Element

      draw.classList.add(`wrong-${wrongAttempts}`);

      document.getElementById("fail1").play();
      if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add("finished");
      }
    } else {
      rightAttempts++;
      let ChosenWord = Array.from(randomValueName.toLowerCase());
      //   console.log(rightAttempts);
      if (rightAttempts === ChosenWord.length) {
        win();
        lettersContainer.classList.add("finished");
      }
      document.getElementById("success1").play();
    }
  }
});
let guessSpans = document.querySelectorAll(".letters-guess span");

function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode("Who Is Rem?");
  div.className = "whoRem";
  div.appendChild(divText);
  let randomV = document.createElement("span");
  let randomVText = document.createTextNode(randomValueName);
  randomV.appendChild(randomVText);
  randomV.className = "randomV";
  let span = document.createElement("span");
  let spanText = document.createTextNode(`The Word Is`);
  span.className = "theWord";
  span.appendChild(spanText);
  span.appendChild(randomV);
  let img = document.createElement("img");
  img.className = "remDead";
  img.src = "imgs/remdead.jpg";
  let againDiv = document.createElement("div");
  let againDivText = document.createTextNode("Play Again");
  againDiv.appendChild(againDivText);
  againDiv.className = "again";
  let popupDiv = document.createElement("div");
  popupDiv.className = "popupDiv";
  popupDiv.appendChild(div);
  popupDiv.appendChild(span);
  popupDiv.appendChild(img);
  popupDiv.appendChild(againDiv);
  document.body.appendChild(popupDiv);
  document.getElementById("fail").play();
  againDiv.addEventListener("click", function () {
    location.reload();
  });
}
function win() {
  let div = document.createElement("div");
  let divText = document.createTextNode("Thank You uwu");
  div.className = "whoRem";
  div.appendChild(divText);
  let randomV = document.createElement("span");
  let randomVText = document.createTextNode(randomValueName);
  randomV.appendChild(randomVText);
  randomV.className = "randomV";
  let span = document.createElement("span");
  let spanText = document.createTextNode(`The Word Is`);
  span.className = "theWord";
  span.appendChild(spanText);
  span.appendChild(randomV);
  let img = document.createElement("img");
  img.className = "remDead";
  img.src = "imgs/ream.gif";
  let againDiv = document.createElement("div");
  let againDivText = document.createTextNode("Play Again");
  againDiv.appendChild(againDivText);
  againDiv.className = "again";
  let popupDiv = document.createElement("div");
  popupDiv.className = "popupDiv";
  popupDiv.appendChild(div);
  popupDiv.appendChild(span);
  popupDiv.appendChild(img);
  popupDiv.appendChild(againDiv);
  document.body.appendChild(popupDiv);
  document.getElementById("success").play();
  againDiv.addEventListener("click", function () {
    location.reload();
  });
}
