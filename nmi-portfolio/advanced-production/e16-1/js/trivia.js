var question = document.querySelector("#question");
var answer = document.querySelector("#answer");
var category = document.querySelector("#category");
var theAnswer = "";

function qa() {
    $.getJSON('http://jservice.io/api/random', function (data) {
        question.innerHTML = data[0].question;
        category.innerHTML = data[0].category.title;
        theAnswer = data[0].answer;
        answer.innerHTML = "";
    });
}

function showAnswer() {
    answer.innerHTML = theAnswer;
}