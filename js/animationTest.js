let starCount = 600;
let minStarSize = 1;
let maxStarSize = 3;
let starColor = "127,132,142";
let alphaSpeed = 0.01;
let alphaMin = 0.1;
let alphaMax = 0.8;

var alphaVals = new Array();
var colors = new Array();
var alphaSpeeds = new Array();

(function() {

    Pts.namespace(window);
    var space = new CanvasSpace("#starfield").setup({
        bgcolor: "#21252B",
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
    //colors = [];

    for (i = 0; i < count; i++) {
        let starSize = Math.random() * (maxStarSize - minStarSize);
        sizes[i] = starSize;
        alphaVals[i] = Math.random() * (alphaMax - alphaMin);
        alphaSpeeds[i] = alphaSpeed;
    }

    space.add({
        start: (bound) => {
            pts = Create.distributeRandom(space.innerBound, count);
            console.log("space.add.start:");
        },

        animate: (time, ftime) => {

            for (i = 0; i < count; i++) {
                if (alphaVals[i] >= alphaMax) {
                    //alphaVals[i] = 1;
                    alphaSpeeds[i] *= -1;
                    // console.log("alpha > 1");
                }
                if (alphaVals[i] <= alphaMin) {
                    //alphaVals[i] = 0;
                    alphaSpeeds[i] *= -1;
                    //console.log("alpha < 1");
                }
                alphaVals[i] += alphaSpeeds[i];
                //form.alpha(alphaVals[i]);
                form.fillOnly("#7f848e").point(pts[i], sizes[i], "circle").alpha(alphaVals[i]);
                //console.log(alphaVals[0]);
            }



            //let t = space.pointer;
            //pts.sort((a, b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq());

            //form.fillOnly("#7F848E33", 1);
            //pts.forEach((p, i) => form.point(p, 5 - 5 * i / pts.length, "circle"));
        },

        resize: () => {
            clearTimeout(timeOutId);
            setTimeout(() => {
                //pts = Create.distributeRandom(space.innerBound, count);
                console.log("space.add.resize:setTimeout()");
            }, 500)
        }

    })

    space.play();
})();

/*
var starCount = 600;
var maxStarRadius = 5;

function Starfield(args) {
    // Canvas properties
    this.canvas = document.querySelector('#starfield');
    this.context = this.canvas.getContext('2d');
    this.throttle = 100;
    this.windowWidth = window.innerWidth;

    // Star properties
    this.starCount = starCount;
    this.stars = [];

    // Initialize starfield
    this.initialize = function() {
        this.setupCanvas();
        this.setupDrawArea();
        this.generateStars();
    }

    // Setup canvas
    this.setupCanvas = function() {
        this.canvasWidth = canvas.offsetWidth;
        this.canvasHeight = canvas.offsetHeight;
    }

    // Setup draw area
    this.setupDrawArea = function() {
        // cluster stars at top of canvas
        this.densityArea = {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        };
    }

    this.generateStars = function() {
        for (var i = 0; i < this.starCount; i++) {
            var star = new Star({
                context: this.context,
                areaWidth: this.width,
                areaHeight: this.height,
            });
            this.stars.push(star);
        }
    }

    this.render = function() {
        this.context.clearRect(0, 0, this.width, this.height);
        for (var i = 0; i < this.stars.length; i++) {
            var star = this.stars[i];
            star.draw();
        }
    }

    this.resizeCanvas = function() {
        this.setupCanvas();
        // don't render if too small
        if (this.windowWidth > 100) {
            this.stars = [];
            this.setupDrawArea();
            this.generateStars();
        }
    }
}

function Star(args) {
    this.context = args.context;
    this.areaWidth = args.areaWidth;
    this.areaHeight = args.areaHeight;

    this.position = {
        x: Math.random() * this.areaWidth,
        y: Math.random() * this.areaHeight
    };
    this.speed = {
        x: Math.random() * 0.002,
        y: Math.random() * 0.002
    };

    this.radius = Math.ceil(Math.random() * maxStarRadius);
    this.alpha = Math.random() * 0.5 + 0.5;
    this.alphaSpeed = Math.random() * 0.03;
    this.color = "255,255,255";
    this.colorAlpha = "rgba(" + this.color + "," + this.alpha + ")";

    this.draw = function() {
        this.updateAlpha();
        this.context.beginPath();
        this.context.fillStyle = this.color();
        this.context.arc(this.position)
    }

}

var starfield = new Starfield();

window.addEventListener("resize", function() {
    starfield.resizeCanvas();
}, false);

function animate() {
    requestAnimationFrame(animate);
    starfield.render();
}*/