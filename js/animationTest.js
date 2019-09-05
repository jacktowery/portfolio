(function () {

    let run = Pts.quickStart("#pt", "#494949");
    let pts;

    run((time, ftime) => {
        if (!pts) pts = Create.distributeRandom(space.innerBound, 200);

        let t = space.pointer;
        pts.sort((a, b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq());

        form.fillOnly("#fff", 1);
        pts.forEach((p, i) => form.point(p, 3 - 3 * i / pts.length, "circle"))

        form.fillOnly("#fff").points(pts, 1, "circle");
    });

    //// ----  

    space.bindMouse().bindTouch().play();

})();