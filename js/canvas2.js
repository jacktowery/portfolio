let starCount = 300;
let minStarSize = 0.5;
let maxStarSize = 3;
let alphaSpeed = 0.005;
let alphaMin = 0.05;
let alphaMax = 0.5;

let starColor = "#91959B";
let backgroundColor = "#21252B";

var alphaVals = new Array();
var colors = new Array();
var alphaSpeeds = new Array();

(function() {

    Pts.namespace(window);
    var space = new CanvasSpace("#pt").setup({
        bgcolor: backgroundColor,
        resize: true,
        retina: true
    })
    var form = space.getForm();

    var timeOutId = -1;

    var pts = new Group();
    var sizes = new Array();
    var count = starCount;
    if (count < 300) count = 300;

    sizes = [];
    alphaVals = [];

    for (i = 0; i < count; i++) {
        let starSize = Math.random() * maxStarSize;
        if (starSize < alphaMin) {
            starSize = alphaMin;
        }
        sizes[i] = starSize;

        alphaVals[i] = Math.random() * alphaMax;
        if (alphaVals[i] < alphaMin) {
            alphaVals[i] = alphaMin;
        }
        alphaSpeeds[i] = Math.random() * alphaSpeed + alphaSpeed;
        if (alphaVals[i] < alphaMin) {
            alphaVals[i] = alphaMin;
        }
    }

    space.add({
        start: (bound) => {
            pts = Create.distributeRandom(space.innerBound, count);
        },

        animate: (time, ftime) => {

            for (i = 0; i < count; i++) {
                form.fillOnly(starColor).point(pts[i], sizes[i], "circle").alpha(alphaVals[i]);
                if (alphaVals[i] >= alphaMax || alphaVals[i] <= alphaMin) {
                    alphaSpeeds[i] *= -1;
                }
                alphaVals[i] += alphaSpeeds[i];
            }
        },

        resize: () => {
            clearTimeout(timeOutId);
            setTimeout(() => {
                pts = Create.distributeRandom(space.innerBound, count);
            }, 500)
        }

    })

    space.play();
})();