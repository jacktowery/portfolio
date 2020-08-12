let candidateNames = [
    ["Jeb Bush", "Ben Carson", "Lincoln Chafee", "Chris Christie", "Ted Cruz", "Carly Fiorina", "Jim Gilmore"],
    ["Lindsey Graham", "Bobby Jindal", "John Kasich", "Lawrence Lessig", "Martin O'Malley", "George Pataki", "Rand Paul"],
    ["Rick Perry", "Marco Rubio", "Bernie Sanders", "Rick Santorum", "Donald Trump", "Scott Walker", "Jim Webb"]
]
let candidatePix = [
    ["bush.jpg", "carson.jpg", "chafee.jpg", "christie.jpg", "cruz.jpg", "fiorina.jpg", "gilmore.jpg"],
    ["graham.jpg", "jindal.jpg", "kasich.jpg", "lessig.jpg", "omalley.jpg", "pataki.jpg", "paul.jpg"],
    ["perry.jpg", "rubio.jpg", "sanders.jpg", "santorum.jpg", "trump.jpg", "walker.jpg", "webb.jpg"]
]

let slideshow1 = document.querySelector("#slideshow1");
let slideshow2 = document.querySelector("#slideshow2");
let slideshow3 = document.querySelector("#slideshow3");

let slideshow = [slideshow1, slideshow2, slideshow3]

let next1 = document.querySelector("#next1");
let prev1 = document.querySelector("#prev1");
let next2 = document.querySelector("#next2");
let prev2 = document.querySelector("#prev2");
let next3 = document.querySelector("#next3");
let prev3 = document.querySelector("#prev3");

var i = [0, 0, 0]

canShow(0, 0);
canShow(1, 0);
canShow(2, 0);

function canShow(id, plusMinus) {
    i[id] += plusMinus;
    if (i[id] == candidateNames[id].length) {
        i[id] = 0;
    }
    if (i[id] < 0) {
        i[id] = candidateNames[id].length - 1;
    }
    slideshow[id].innerHTML = candidateNames[id][i[id]];
    slideshow[id].innerHTML += "<br>";
    slideshow[id].innerHTML += "<img src=pix/" + candidatePix[id][i[id]] + ">";
}

next1.onclick = () => {
    canShow(0, 1)
}
prev1.onclick = () => {
    canShow(0, -1)
}
next2.onclick = () => {
    canShow(1, 1)
}
prev2.onclick = () => {
    canShow(1, -1)
}
next3.onclick = () => {
    canShow(2, 1)
}
prev3.onclick = () => {
    canShow(2, -1)
}