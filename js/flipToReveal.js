let flipFront = document.querySelector("#flip-hide-front");
let flipBack = document.querySelector("#flip-hide-back");

var status1 = 0;

function flip1() {
    if (status1 == 0) {
        flipFront.style.opacity = "0.0";
        flipBack.style.opacity = "1.0";

        status1 = 1;
    } else {
        flipFront.style.opacity = "1.0";
        flipBack.style.opacity = "0.0";

        status1 = 0;
    }
}