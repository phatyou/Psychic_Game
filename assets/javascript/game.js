
// Define alphabet letters that computer can pick from
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Instantiation of the initial global variables
var wins = 0;
var losses = 0;

//manipulate "changeable" guesses
var guessesLeft = 9;

//static variable, won't change
var totalGuesses = 9;
// guessesSoFar is an array that will hold all the user's guesses in each round
var guessesSoFar = [];
// userGuess is what the user picks by pressing a key
var userGuess = null;
// Have computer pick a letter and store it in letterToBeGuessed

console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

var updateGuessesLeft = function() {
	document.querySelector("#guessesLeft").innerHTML = guessesLeft;
}

var updateGuessesSoFar = function() {
	document.querySelector("#guessesSoFar").innerHTML = guessesSoFar.join(",");
}

var letterToBeGuessed = function() {
	this.userGuess = this.alphabetLetters[Math.floor(Math.random() * this.alphabetLetters.length)];
}

var reset = function () {
	guessesLeft = 9;
	totalGuesses = 9;
	guessesSoFar = [];
	updateGuessesLeft();
	updateGuessesSoFar();
	letterToBeGuessed();
}
	//
	// letterToBeGuessed();
	// updateGuessesSoFar();

document.onkeyup = function(event) {
	guessesLeft--;
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	guessesSoFar.push(letter);
	updateGuessesLeft();
	updateGuessesSoFar();
	letterToBeGuessed();

	if (guessesLeft > 0) {
		if (letter === userGuess) {
			wins++;
			document.querySelector("#wins").innerHTML = wins;
			reset();
	}

	 else if (guessesLeft == 0) {
		losses++;
		document.querySelector("#losses").innerHTML = losses;
		reset();
	}
}
};
