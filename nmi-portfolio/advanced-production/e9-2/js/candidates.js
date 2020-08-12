let candidateNames = ["Jeb Bush", "Ben Carson", "Lincoln Chafee", "Chris Christie", "Ted Cruz", "Carly Fiorina", "Jim Gilmore", "Lindsey Graham", "Bobby Jindal", "John Kasich", "Lawrence Lessig", "Martin O'Malley", "George Pataki", "Rand Paul", "Rick Perry", "Marco Rubio", "Bernie Sanders", "Rick Santorum", "Donald Trump", "Scott Walker", "Jim Webb"]
let candidatePix = ["bush.jpg", "carson.jpg", "chafee.jpg", "christie.jpg", "cruz.jpg", "fiorina.jpg", "gilmore.jpg", "graham.jpg", "jindal.jpg", "kasich.jpg", "lessig.jpg", "omalley.jpg", "pataki.jpg", "paul.jpg", "perry.jpg", "rubio.jpg", "sanders.jpg", "santorum.jpg", "trump.jpg", "walker.jpg", "webb.jpg"]

let output = document.querySelector("#alsoRan");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");

var i = 0;
canShow(1);

function canShow(plusMinus) {
    output.innerHTML = candidateNames[i];
    output.innerHTML += "<br>";
    output.innerHTML += "<img src=pix/" + candidatePix[i] + ">";
    i += plusMinus;
    if(i == candidateNames.length) { 
        i = 0;
    }
    if(i < 0) {
        i = candidateNames.length - 1;
    }
}

next.onclick = () => { canShow(1) }
prev.onclick = () => { canShow(-1) }


