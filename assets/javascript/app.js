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

var timeRemaining = 30;
var intervalId;

function checkAnswers() {
    // check q1
    if ($("#q1-option1").checked === true) {
        numIncorrect++;
    } else if ($("#q1-option2").checked === true) {
        numCorrect++;
    } else {
        numUnanswered++;
    }
    // check q2
    if ($("#q2-option1").checked === true) {
        numCorrect++;
    } else if ($("#q2-option2").checked === true) {
        numIncorrect++;
    } else {
        numUnanswered++;
    }
    // check q3
    if ($("#q3-option1").checked === true) {
        numIncorrect++;
    } else if ($("#q3-option2").checked === true) {
        numCorrect++;
    } else {
        numUnanswered++;
    }
    // check q4
    if ($("#q4-option1").checked === true) {
        numIncorrect++;
    } else if ($("#q4-option2").checked === true) {
        numCorrect++;
    } else {
        numUnanswered++;
    }
    // check q5
    if ($("#q5-option1").checked === true) {
        numIncorrect++;
    } else if ($("#q5-option2").checked === true) {
        numCorrect++;
    } else {
        numUnanswered++;
    }
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
    }
}

$("#start-btn").on("click", function() {
    run();
    
});