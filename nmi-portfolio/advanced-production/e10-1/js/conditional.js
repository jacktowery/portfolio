let list = document.querySelector("#userInput");
for (var i = 0; i < 100; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", i);
    option.innerText = i + "";
    list.appendChild(option);
}


function compare() {
    let answer = document.querySelector('#userInput');
    answer = Number(answer.value);

    let reaction = document.querySelector("#response");

    /*
    if (answer === 24) {
        reaction.innerHTML = "Correct!";
    } else if (answer < 24 && answer > 20) {
        reaction.innerHTML = answer + " is too low, but close.";
    } else if (answer < 24 && answer < 20) {
        reaction.innerHTML = answer + " is way too low.";
    } else if (answer > 24 && answer < 28) {
        reaction.innerHTML = answer + " is too high, but close.";
    } else if (answer > 24 && answer > 28) {
        reaction.innerHTML = answer + " is way too high.";
    }
    */

    switch (true) {
        case (answer == 24):
            reaction.innerHTML = "Correct!"
            break;
        case (answer < 24 && answer > 20):
            reaction.innerHTML = answer + " is too low, but close.";
            break;
        case (answer < 24 && answer < 20):
            reaction.innerHTML = answer + " is way too low.";
            break;
        case (answer > 24 && answer < 28):
            reaction.innerHTML = answer + " is too high, but close.";
            break;
        case (answer > 24 && answer > 28):
            reaction.innerHTML = answer + " is way too high.";
            break;
    }

}