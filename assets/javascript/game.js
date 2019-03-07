// Loads when page is opened
window.onload = function () {
    $("#blue-crystal").on("click", blueClick);
    $("#red-crystal").on("click", redClick);
    $("#green-crystal").on("click", greenClick);
    $("#yellow-crystal").on("click", yellowClick);
}

// Creates a global function I can use to create random numbers
function randNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Global variable declarations
var guesses;
var result;
var userGuess = 0;
var blueCrystalVal = randNum(1, 20);
var redCrystalVal = randNum(1, 20);
var greenCrystalVal = randNum(1, 20);
var yellowCrystalVal = randNum(1, 20);
var CrysMultiplier = [randNum(2, 4), randNum(2, 4), randNum(2, 4), randNum(2, 4)];
var guessLeft = CrysMultiplier[0] + CrysMultiplier[1] + CrysMultiplier[2] + CrysMultiplier[3];

$("#guesses-left").append("Guesses Left: " + guessLeft);

// Function that always creates possible outcomes
function targetGen() {
    var blueTotal = blueCrystalVal * CrysMultiplier[0];
    var redTotal = redCrystalVal * CrysMultiplier[1];
    var greenTotal = greenCrystalVal * CrysMultiplier[2];
    var yellowTotal = yellowCrystalVal * CrysMultiplier[3];
    result = blueTotal + redTotal + greenTotal + yellowTotal;
    return(result);
}

// Global variable that is declared after function targetGen is created
var genTarget = targetGen();

// Updates UI with target score
$("#target-score").append("Target Number: " + genTarget);

// Function that determines outcome of the game
function gameEnd() {
    if (guesses === 0 && userGuess < genTarget) {
        alert("No more Guesses! Too Low! You Lost!");
    } else if (userGuess > genTarget) {
        alert("No more Guesses! Too High! You Lost!");
    } else if (guesses === 0 && userGuess == genTarget) {
        alert("Congrats! You won!");
    }
}

// Function that describes audio behaviors of the buttons
function buttonAudio() {
    var audioCheck = document.getElementById('button-audio');
    if (audioCheck.paused) {
        audioCheck.play();
    } else {
        audioCheck.currentTime = 0;
    }
}

function loseAudio() {
    var audioPlay = document.getElementById('lose-audio');
    audioPlay.play();
}

// Function for Blue Crystal onclick event
function blueClick() {
    buttonAudio();
    guesses = guessLeft--;
    userGuess = userGuess + blueCrystalVal;
    $("#my-score").empty();
    $("#my-score").append("Your Guess: " + userGuess);
    $("#guesses-left").empty();
    $("#guesses-left").append("Guesses Left: " + guesses);
    gameEnd();
}

// Function for Red Crystal onclick event
function redClick() {
    buttonAudio();
    guesses = guessLeft--;
    userGuess = userGuess + redCrystalVal;
    $("#my-score").empty();
    $("#my-score").append("Your Guess: " + userGuess);
    $("#guesses-left").empty();
    $("#guesses-left").append("Guesses Left: " + guesses);
    gameEnd();
}

// Function for Green Crystal onclick event
function greenClick() {
    buttonAudio();
    guesses = guessLeft--;
    userGuess = userGuess + greenCrystalVal;
    $("#my-score").empty();
    $("#my-score").append("Your Guess: " + userGuess);
    $("#guesses-left").empty();
    $("#guesses-left").append("Guesses Left: " + guesses);
    gameEnd();
}

// Function for Yellow Crystal onclick event
function yellowClick() {
    buttonAudio();
    guesses = guessLeft--;
    userGuess = userGuess + yellowCrystalVal;
    $("#my-score").empty();
    $("#my-score").append("Your Guess: " + userGuess);
    $("#guesses-left").empty();
    $("#guesses-left").append("Guesses Left: " + guesses);
    gameEnd();
}