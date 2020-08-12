var divLoad = document.querySelector('#maindiv');

var theAnswer = [];

function qa() {
    $.getJSON('http://jservice.io/api/random?count=10', function (data) {
        divLoad.innerHTML = "";
        for (var i = 0; i < 10; i++) {
            divLoad.innerHTML += "<h3 class='has-text-weight-bold'>Category: " + data[i].category.title + "</h3>";
            divLoad.innerHTML += "<p>" + data[i].question + "</p>";
            theAnswer.push(data[i].answer);
            divLoad.innerHTML += "<button class='button is-small is-primary is-outlined' onclick='showAnswer(" + i + ")'> Show Answer</button>";
            divLoad.innerHTML += "<div id='damnAnswer" + i + "'></div>"
            divLoad.innerHTML += "<hr>"
        }
    });
}

function showAnswer(b) {
    let whatever = '#damnAnswer' + b;
    whatever = document.querySelector(whatever);
    whatever.innerHTML += "<p><strong>The answer is: </strong><em>" + theAnswer[b] + "</em></p>";
}