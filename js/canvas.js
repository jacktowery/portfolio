(function() {

    Pts.namespace(window);
    var space = new CanvasSpace("#pt").setup({
        bgcolor: "#21252B",
        resize: true,
        retina: true
    })
    var form = space.getForm();

    var timeOutId = -1;

    var pts = new Group();
    var colors = ["#019283"];
    var count = 300
    if (count < 300) count = 300;


    space.add({
        start: (bound) => {
            pts = Create.distributeRandom(space.innerBound, count);
        },

        animate: (time, ftime) => {

            for (i = 0; i < count; i++) {
                pts[i].rotate2D(.0005, space.center);
                form.fillOnly(colors[i % 1]).point(pts[i], 1, "circle");
            }

            let t = space.pointer;
            pts.sort((a, b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq());

            form.fillOnly("#01928333", 1);
            pts.forEach((p, i) => form.point(p, 5 - 5 * i / pts.length, "circle"));
        },

        resize: () => {
            clearTimeout(timeOutId);
            setTimeout(() => {
                pts = Create.distributeRandom(space.innerBound, count);
            }, 500)
        }

    })

    space.bindMouse().bindTouch().play();
})();



/*
(function() {

    Pts.namespace(this);
    var space = new CanvasSpace("#pt").setup({
        bgcolor: "#123",
        resize: true,
        retina: true
    });
    var form = space.getForm();


    //// Demo code ---

    var pts = new Group();
    var timeOutId = -1;
    var header = null;


    space.add({

        // creatr 200 random points
        start: (bound) => {
            pts = Create.distributeRandom(space.innerBound, 200);
            header = document.getElementById("header");
        },

        animate: (time, ftime) => {
            // make a line and turn it into an "op" (see the guide on Op for more)
            let perpend = new Group(space.center.$subtract(0.1), space.pointer).op(Line.perpendicularFromPt);
            pts.rotate2D(0.0005, space.center);

            pts.forEach((p, i) => {
                // for each point, find the perpendicular to the line
                //let lp = perpend(p);
                //var ratio = Math.min(1, 1 - lp.$subtract(p).magnitude() / (space.size.x / 2));
                //form.stroke(`rgba(255,255,255,${ratio}`, ratio * 2).line([p, lp]);
                form.fillOnly(["#f03", "#09f", "#0c6"][i % 3]).point(p, 1.5, "circle");
            });

            // header position
            if (header) {
                let top = window.pageYOffset || document.documentElement.scrollTop;
                let dp = top - space.size.y + 150;
                if (dp > 0) {
                    header.style.top = `${dp * -1}px`;
                } else {
                    header.style.top = "0px";
                }
            }

        },

        resize: () => {
            clearTimeout(timeOutId);
            setTimeout(() => {
                pts = Create.distributeRandom(space.innerBound, 200);
            }, 500);
        }

    });

    //// ----


    space.bindMouse().bindTouch().play();

})();;
*/