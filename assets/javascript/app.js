// var triviaAnswers = {
//     q1: false,
//     q2: true,
//     q3: false,
//     q4: false,
//     q5: false
// }

var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;

var timeRemaining = 10;
var intervalId;

function checkAnswers() {
    // check q1
    if (document.getElementById("q1-option1").checked === true) {
        numIncorrect++;
    } else if (document.getElementById("q1-option2").checked === true) {
        numCorrect++;
    } else {
        numUnanswered++;
    }
    // check q2
    if (document.getElementById("q2-option1").checked === true) {
        numCorrect++;
    } else if (document.getElementById("q2-option2").checked === true) {
        numIncorrect++;
    } else {
        numUnanswered++;
    }
    // check q3
    if (document.getElementById("q3-option1").checked === true) {
        numIncorrect++;
    } else if (document.getElementById("q3-option2").checked === true) {
        numCorrect++;
    } else {
        numUnanswered++;
    }
    // check q4
    if (document.getElementById("q4-option1").checked === true) {
        numIncorrect++;
    } else if (document.getElementById("q4-option2").checked === true) {
        numCorrect++;
    } else {
        numUnanswered++;
    }
    // check q5
    if (document.getElementById("q5-option1").checked === true) {
        numIncorrect++;
    } else if (document.getElementById("q5-option2").checked === true) {
        numCorrect++;
    } else {
        numUnanswered++;
    }

    $("#num-correct").text(numCorrect);
    $("#num-incorrect").text(numIncorrect);
    $("#num-unanswered").text(numUnanswered);

}

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeRemaining--;
    $("#time-left").text(timeRemaining);
    if (timeRemaining === 0) {
        clearInterval(intervalId);
        alert("Time is up!");
        checkAnswers();
        $("#trivia-box").hide();
        $("#results-box").css("display", "block");
    }
}

$("#start-btn").on("click", function() {
    run();
    $("#start-box").hide();
    $("#trivia-box").css("display", "block");
});