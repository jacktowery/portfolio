var studentdata = new Vue({
    el: '#us',

    data: {
        stuname: "",
        counter: 0,
        oswald: "nothing yet",
        yall: [{
            "0": "Alex ",
            "stu_name": "Alex ",
            "1": "Williams",
            "last_name": "Williams",
            "2": "http://jamesalexwilliams.com\\/",
            "imgUrl": "http://jamesalexwilliams.com/images/me.jpg",
            "section": "5110",
            "4": "I am the oldest of two boys, two girls; two redheads, two blondes; two left-handers, two right-handers. ",
            "fact": "I am the oldest of two boys, two girls; two redheads, two blondes; two left-handers, two right-handers. ",
            "5": "188",
            "count": "188"
        }, {
            "0": "Alex",
            "stu_name": "Alex",
            "1": "Carmichael",
            "last_name": "Carmichael",
            "2": "alexcarm.com\\/5110\\/",
            "imgUrl": "http://alexcarm.com\\/5110/images/me.jpg",
            "section": "5110",
            "4": "  My beard is thicker than this photo shows. I need new pictures :-(",
            "fact": "  My beard is thicker than this photo shows. I need new pictures :-(",
            "5": "193",
            "count": "193"
        }, {
            "0": "Allison",
            "stu_name": "Allison",
            "1": "Floyd",
            "last_name": "Floyd",
            "2": "afloydwriter.com\\/7110",
            "imgUrl": "http://afloydwriter.com\\/7110/images/me.jpg",
            "section": "7110",
            "4": "I write about peanuts.   ",
            "fact": "I write about peanuts.   ",
            "5": "182",
            "count": "182"
        }, {
            "0": "Amy",
            "stu_name": "Amy",
            "1": "",
            "last_name": "",
            "2": "blasph-amy.com/images/me.jpg",
            "imgUrl": "http://blasph-amy.com/images/me.jpg",
            "section": "5110",
            "4": "  I like mint tea and taking pictures!",
            "fact": "  I like mint tea and taking pictures!",
            "5": "110",
            "count": "110"
        }, {
            "0": "Andrea",
            "stu_name": "Andrea",
            "1": "Skellie",
            "last_name": "Skellie",
            "2": "andreahpiazza.com/images/me.jpg",
            "imgUrl": "http://andreahpiazza.com/images/me.jpg",
            "section": "7110",
            "4": "  ",
            "fact": "  ",
            "5": "189",
            "count": "189"
        }, {
            "0": "Anna Grace",
            "stu_name": "Anna Grace",
            "1": "Robinson",
            "last_name": "Robinson",
            "2": "www.ag-robinson.com\\/5110",
            "imgUrl": "https://goo.gl/FGwn3S",
            "section": "5110",
            "4": "  ",
            "fact": "this is NOT my picture!  ",
            "5": "191",
            "count": "191"
        }, {
            "0": "Brandon",
            "stu_name": "Brandon",
            "1": "Kim",
            "last_name": "Kim",
            "2": "www.thebrandonkim12.com/images/me.jpg",
            "imgUrl": "https://goo.gl/FGwn3S",
            "section": "5110",
            "4": " I do a yearly snowboarding trip with my friends.",
            "fact": " I do a yearly snowboarding trip with my friends.",
            "5": "184",
            "count": "184"
        }, {
            "0": "Cydney",
            "stu_name": "Cydney",
            "1": "White",
            "last_name": "White",
            "2": "cydwhite.com/images/me.jpg",
            "imgUrl": "https://goo.gl/FGwn3S",
            "section": "7110",
            "4": "I'm a Libra. ",
            "fact": "I'm a Libra. ",
            "5": "190",
            "count": "190"
        }, {
            "0": "Elizabeth",
            "stu_name": "Elizabeth",
            "1": "Conway",
            "last_name": "Conway",
            "2": "lizconway.net",
            "imgUrl": "http://lizconway.net/images/me.jpg",
            "section": "7110",
            "4": "  I grew up right outside of Washington, D.C. and have the Red Metro line memorized. ",
            "fact": "  I grew up right outside of Washington, D.C. and have the Red Metro line memorized. ",
            "5": "166",
            "count": "166"
        }, {
            "0": "Grant",
            "stu_name": "Grant",
            "1": "Tucker",
            "last_name": "Tucker",
            "2": "ghtucker.com/images/me.jpg",
            "imgUrl": "http://ghtucker.com/images/me.jpg",
            "section": "7110",
            "4": "I like pups  ",
            "fact": "I like pups  ",
            "5": "185",
            "count": "185"
        }, {
            "0": "Haleigh",
            "stu_name": "Haleigh",
            "1": "Staalner",
            "last_name": "Staalner",
            "2": "http://www.haleighstaalner.com\\/7110\\/",
            "imgUrl": "https://goo.gl/FGwn3S",
            "section": "7110",
            "4": "I have a German Shepherd pup named Rayna!   ",
            "fact": "I have a German Shepherd pup named Rayna!   ",
            "5": "179",
            "count": "179"
        }, {
            "0": "Hua",
            "stu_name": "Hua",
            "1": "Zheng",
            "last_name": "Zheng",
            "2": "huazheng2.com/images/me.jpg",
            "imgUrl": "http://huazheng2.com/images/me.jpg",
            "section": "7110",
            "4": "  I know a bit of drums",
            "fact": "  I know a bit of drums",
            "5": "165",
            "count": "165"
        }, {
            "0": "Jenny",
            "stu_name": "Jenny",
            "1": "Rim",
            "last_name": "Rim",
            "2": "jennyrim7110.com/images/me.jpg",
            "imgUrl": "http://jennyrim7110.com/images/me.jpg",
            "section": "7110",
            "4": "I won front row tickets to Hamilton this summer.",
            "fact": "I won front row tickets to Hamilton this summer.",
            "5": "180",
            "count": "180"
        }, {
            "0": "Kaitlyn ",
            "stu_name": "Kaitlyn ",
            "1": "Fellows",
            "last_name": "Fellows",
            "2": "kfellows.com/images/me.jpg",
            "imgUrl": "http://kfellows.com/images/me.jpg",
            "section": "7110",
            "4": "I am a wedding and portrait photographer!   ",
            "fact": "I am a wedding and portrait photographer!   ",
            "5": "183",
            "count": "183"
        }, {
            "0": "McKenzie ",
            "stu_name": "McKenzie ",
            "1": "Lovelace Links",
            "last_name": "Lovelace Links",
            "2": "lovelacelinks.com\\/5110",
            "imgUrl": "http://lovelacelinks.com\\/5110/images/me.jpg",
            "section": "5110",
            "4": "  I'm an intern for Barstool Sports",
            "fact": "  I'm an intern for Barstool Sports",
            "5": "177",
            "count": "177"
        }, {
            "0": "Melissa",
            "stu_name": "Melissa",
            "1": "Crane",
            "last_name": "Crane",
            "2": "http://melissakcrane.com\\/7110\\/index.html",
            "imgUrl": "https://goo.gl/FGwn3S",
            "section": "7110",
            "4": " I'm resubmitting my site for class assignments.",
            "fact": " I'm resubmitting my site for class assignments.",
            "5": "192",
            "count": "192"
        }, {
            "0": "Morgan",
            "stu_name": "Morgan",
            "1": "Reynolds",
            "last_name": "Reynolds",
            "2": "themorganreynolds.com/images/me.jpg",
            "imgUrl": "http://themorganreynolds.com/images/me.jpg",
            "section": "7110",
            "4": "I am from Athens.  ",
            "fact": "I am from Athens.  ",
            "5": "194",
            "count": "194"
        }, {
            "0": "Niambi",
            "stu_name": "Niambi",
            "1": "Gadson",
            "last_name": "Gadson",
            "2": "niambigadson.com/images/me.jpg",
            "imgUrl": "http://niambigadson.com/images/me.jpg",
            "section": "5110",
            "4": "I was born in New York.",
            "fact": "I was born in New York.",
            "5": "181",
            "count": "181"
        }, {
            "0": "Tyler",
            "stu_name": "Tyler",
            "1": "Mazurek",
            "last_name": "Mazurek",
            "2": "http://mazmediagroup.com/images/me.jpg",
            "imgUrl": "https://goo.gl/FGwn3S",
            "section": "5110",
            "4": "I currently hold 5 national records in swimming for the country Bermuda.",
            "fact": "I currently hold 5 national records in swimming for the country Bermuda.",
            "5": "174",
            "count": "174"
        }]
    },
    methods: {
        showImage(index) {
            this.counter = index
        }
    },
    computed: {
        image() {
            return this.yall[this.counter].imgUrl
        }
    }

})