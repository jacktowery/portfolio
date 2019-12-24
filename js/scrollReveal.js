ScrollReveal().reveal('.r-spin-grow-1', {
    duration: 600,
    delay: 200,
    rotate: {
        z: 20
    },
    scale: 0.6
});

ScrollReveal().reveal('.r-delayset-1', {
    delay: 200,
    duration: 600,
    distance: '16px',
    origin: 'top'
});
ScrollReveal().reveal('.r-delayset-2', {
    delay: 400,
    duration: 600,
    distance: '16px',
    origin: 'top'
});
ScrollReveal().reveal('.r-delayset-3', {
    delay: 600,
    duration: 600,
    distance: '16px',
    origin: 'top'
});

ScrollReveal().reveal('.r-timeline-r', {
    delay: 100,
    duration: 200,
    distance: '20px',
    origin: 'top',
    interval: 300,
    easing: 'ease-in'
});
ScrollReveal().reveal('.r-timeline-l', {
    delay: 300,
    duration: 200,
    distance: '20px',
    origin: 'top',
    interval: 300,
    easing: 'ease-in'
});

var skills = [
    ["Adobe Illustrator", 90],
    ["Adobe Photoshop", 55],
    ["Adobe InDesign", 70],
    ["Adobe Lightroom", 80],
    ["Adobe AfterEffects", 45],
    ["Adobe Premiere Pro", 50],
    ["Paint.NET", 70],
    ["Inkscape", 65],
    ["Swift (Xcode)", 45],
    ["Java (Android)", 55],
    ["HTML", 90],
    ["CSS/SASS", 85],
    ["JavaScript", 65],
    ["PHP", 35],
    ["MySQL", 40],
    ["Vue.js", 15],
    ["MATLAB", 75],
    ["R", 15],
    ["Julia", 40],
    ["Python", 30],
    ["C++", 50],
    ["Java", 70],
    ["LaTeX", 85],
    ["Microsoft Office Suite", 75]
]

var skills1 = [
    ["Adobe Illustrator", 90],
    ["Adobe Photoshop", 55],
    ["Adobe InDesign", 70],
    ["Adobe Lightroom", 80],
    ["Adobe AfterEffects", 45],
    ["Adobe Premiere Pro", 50],
    ["Paint.NET", 70],
    ["Inkscape", 65]
]

var skills2 = [
    ["Swift (Xcode)", 45],
    ["Java (Android)", 60],
    ["HTML", 90],
    ["CSS/SASS", 85],
    ["JavaScript", 75],
    ["PHP", 30],
    ["MySQL", 35],
    ["Vue.js", 40]
]

var skills3 = [
    ["MATLAB", 75],
    ["R", 15],
    ["Julia", 40],
    ["Python", 30],
    ["C++", 50],
    ["Java", 70],
    ["LaTeX", 85],
    ["Microsoft Office Suite", 75]
]


function fillProgress(set) {
    if (set == 1) {
        let bars = document.querySelectorAll('#bars-1 .progress-wrapper');
        for (var i = 0; i < bars.length; i++) {
            bars[i].querySelector('progress').value = skills1[i][1];
            bars[i].querySelector('p').innerText = skills1[i][0];
        }
    } else if (set == 2) {
        let bars = document.querySelectorAll('#bars-2 .progress-wrapper');
        for (var i = 0; i < bars.length; i++) {
            bars[i].querySelector('progress').value = skills2[i][1];
            bars[i].querySelector('p').innerText = skills2[i][0];
        }
    } else if (set == 3) {
        let bars = document.querySelectorAll('#bars-3 .progress-wrapper');
        for (var i = 0; i < bars.length; i++) {
            bars[i].querySelector('progress').value = skills3[i][1];
            bars[i].querySelector('p').innerText = skills3[i][0];
        }
    }
}

ScrollReveal().reveal('#bars-1-fake', {
    delay: 400,
    duration: 1,
    afterReveal: function(el) {
        fillProgress(1);
    }
});

ScrollReveal().reveal('#bars-2-fake', {
    delay: 400,
    duration: 1,
    afterReveal: function(el) {
        fillProgress(2);
    }
});

ScrollReveal().reveal('#bars-3-fake', {
    delay: 400,
    duration: 1,
    afterReveal: function(el) {
        fillProgress(3);
    }
});