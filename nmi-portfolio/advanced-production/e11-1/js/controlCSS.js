var state = 0;

function changeCSS() {
    let sq = document.querySelector("#square");
    if (state == 0) {
        sq.style.backgroundColor = 'red';
        sq.style.borderRadius = '50%';
        sq.style.width = "200px";
        sq.style.height = "200px";
        sq.style.boxShadow = "10px 10px 10px gray";
        sq.style.borderWidth = "10px";
        sq.style.borderStyle = "dashed";

        state = 1;
    } else {
        sq.style.backgroundColor = "#000";
        sq.style.borderRadius = "0%";
        sq.style.width = "400px";
        sq.style.height = "400px";
        sq.style.boxShadow = "none";
        sq.style.borderWidth = "0px";
        sq.style.borderStyle = "solid";

        state = 0;
    }


}