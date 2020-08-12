var header = new Vue({
    el: "#header",
    data: {
        yourName: 'Jack',
        description: 'Web Developer',
        link1: 'Introduction',
        link2: 'My Portfolio',
        link3: 'About Me',
        link4: 'Contact',
        link5: 'My List',
        avatar: 'images/me.jpg'
    }
})

var portfolio = new Vue({
    el: '#portfolio',
    data: {
        portfolioTitle: 'I design graphics, websites, brands, and more',
        image1: 'images/me.jpg',
        imgText1: "Image 1"
    }
})

var about = new Vue({
    el: '#about',
    data: {
        head1: 'Graphic Designer',
        head2: 'Web/Mobile Developer',
        head3: 'Student Researcher',
        text1: 'I believe in creating elegant, impactful designs and developing clean, consistent branding that conveys a clear message.',
        text2: 'With a front-end focus, I enjoy designing and coding stunning websites & useful applications from the ground up.',
        text3: 'I am naturally inquisitive, and my research experience has allowed me to analyze data and solve real-world problems.'
    }
})

var condt = new Vue({
    el: '#conditional',
    data: {
        teacherName: ''
    }
})

var func = new Vue({
    el: '#function',
    data: {
        bgColor: '',
        colors: ['red', 'green', 'blue'],
        myWidth: '',
        widths: ['100px', '200px', '300px']
    },
    methods: {
        changeColor(color) {
            this.bgColor = color;
        },
        changeWidth(width) {
            this.myWidth = width;
        }
    }
})

var contact = new Vue({
    el: '#contact',
    data: {
        contactInfo: 'You can contact me at hello@jacktowery.com, or using the form below'
    }
})

var favs = new Vue({
    el: '#list',
    data: {
        favorites: ['Mama\'s Boy', 'Clocked', 'Grindhouse', 'Cali \'n\' Tito\'s']
    }
})

var intro = new Vue({
    el: '#top',
    data: {
        introParagraph: 'I started my first project in Inkscape over 7 years ago. Since then, I\'ve worked hard to teach myself the concepts of graphic design, and I\'ve discovered my passion to combine them with programming concepts I learned while earning my degree. I\'ve had the opportunity to create content and branding for non-profit organizations and startups, and I\'m always looking for something new to learn.',
        subtitle: 'Hey, I\'m Jack. Nice to meet you.'
    }
})