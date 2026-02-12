const words = [
    "java",
    "javascript",
    "python",
    "pascal",
    "ruby",
    "perl",
    "swift",
    "kotlin",
];

// Pick random word
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
console.log(selectedWord);

// Store guessed letters
let guessedList = [];

// Display word as array
let displayWord = Array(selectedWord.length).fill("_");

// Initial display
document.getElementById("displayWord").textContent = displayWord.join(" ");

// Guess function
function guessLetter() {
    let inputElement = document.getElementById("letter-input");
    let letter = inputElement.value.toLowerCase();

    // Empty input check
    if (!letter) {
        alert("Please enter a letter");
        return;
    }

    // Clear input
    inputElement.value = "";

    // Already guessed check
    if (guessedList.includes(letter)) {
        alert("You already guessed this letter");
        return;
    }

    guessedList.push(letter);

    // Check letter in word
    let found = false;
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            displayWord[i] = letter;
            found = true;
        }
    }

    // Update display
    document.getElementById("displayWord").textContent = displayWord.join(" ");

    // Win check
    if (!displayWord.includes("_")) {
        alert("🎉 Congratulations! You guessed the word!");
    }

    // Optional feedback
    if (!found) {
        alert("❌ Wrong guess");
    }
}
