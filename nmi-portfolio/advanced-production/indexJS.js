function sort5110(cat) {
    if (cat == 1) {
        $(".sort5110-1").removeClass("is-hidden");
        $(".sort5110-2").addClass("is-hidden");
        $(".sort5110-3").addClass("is-hidden");
        $(".sort5110-4").addClass("is-hidden");
        $(".sort5110-5").addClass("is-hidden");

        $("#head5110-1").addClass("is-active");
        $("#head5110-2").removeClass("is-active");
        $("#head5110-3").removeClass("is-active");
        $("#head5110-4").removeClass("is-active");
        $("#head5110-5").removeClass("is-active");

        $("#nmi-info-card-title").text("HTML/CSS");
        $("#nmi-info-card-text").text("In this section, we explored and refreshed ourselves on the basics of HTML and CSS. We started with the basic elements of HTML like <p> and <div> tags, and moved on to more advanced concepts including forms and form submission. In CSS, we explored the basics of positioning and styling with text and the box model, and then moved on to Flexbox which is an important part of modern HTML5 and CSS3 for responsive websites. For the first Assignment 1, we put into practice some of the more complicated HTML elements like lists and media players, and practiced styling individual objects.");

    } else if (cat == 2) {
        $(".sort5110-1").addClass("is-hidden");
        $(".sort5110-2").removeClass("is-hidden");
        $(".sort5110-3").addClass("is-hidden");
        $(".sort5110-4").addClass("is-hidden");
        $(".sort5110-5").addClass("is-hidden");

        $("#head5110-1").removeClass("is-active");
        $("#head5110-2").addClass("is-active");
        $("#head5110-3").removeClass("is-active");
        $("#head5110-4").removeClass("is-active");
        $("#head5110-5").removeClass("is-active");

        $("#nmi-info-card-title").text("JavaScript");
        $("#nmi-info-card-text").text("In this section, we explored the basics of JavaScript and DOM manipulation, and worked our way up to more complicated topics like JavaScript Objects, JSON parsing, and using external APIs. In Assignment 2, we worked with an array of images, split them up into 3 arrays, and made an image slideshow of each array. In Assignment 3, we used the JSON data from our NMI website to make a list of all of our classmates with their pictures and information and display them on cards with links to their websites.");

    } else if (cat == 3) {
        $(".sort5110-1").addClass("is-hidden");
        $(".sort5110-2").addClass("is-hidden");
        $(".sort5110-3").removeClass("is-hidden");
        $(".sort5110-4").addClass("is-hidden");
        $(".sort5110-5").addClass("is-hidden");

        $("#head5110-1").removeClass("is-active");
        $("#head5110-2").removeClass("is-active");
        $("#head5110-3").addClass("is-active");
        $("#head5110-4").removeClass("is-active");
        $("#head5110-5").removeClass("is-active");

        $("#nmi-info-card-title").text("Vue.js");
        $("#nmi-info-card-text").text("In this section, we were introduced to Vue.js, a powerful JavaScript framework for creating dynamic content on our web pages. We started with the basics of Vue, exploring how to create and manage Vue instances, use computed properties, and the two-way binding that Vue offers. We then moved on to integrating Vue with external APIs to create components based on downloaded data. In Assignment 4, we used the CatAPI to pull images and information about different cat breeds, and display that info to the user with a slideshow of cat images that they can scroll through.");

    } else if (cat == 4) {
        $(".sort5110-1").addClass("is-hidden");
        $(".sort5110-2").addClass("is-hidden");
        $(".sort5110-3").addClass("is-hidden");
        $(".sort5110-4").removeClass("is-hidden");
        $(".sort5110-5").addClass("is-hidden");

        $("#head5110-1").removeClass("is-active");
        $("#head5110-2").removeClass("is-active");
        $("#head5110-3").removeClass("is-active");
        $("#head5110-4").addClass("is-active");
        $("#head5110-5").removeClass("is-active");

        $("#nmi-info-card-title").text("Miscellaneous");
        $("#nmi-info-card-text").text("Miscellaneous exercises for NMIX 5110.");

    } else if (cat == 5) {
        $(".sort5110-1").addClass("is-hidden");
        $(".sort5110-2").addClass("is-hidden");
        $(".sort5110-3").addClass("is-hidden");
        $(".sort5110-4").addClass("is-hidden");
        $(".sort5110-5").removeClass("is-hidden");

        $("#head5110-1").removeClass("is-active");
        $("#head5110-2").removeClass("is-active");
        $("#head5110-3").removeClass("is-active");
        $("#head5110-4").removeClass("is-active");
        $("#head5110-5").addClass("is-active");

        $("#nmi-info-card-title").text("Final Project");
        $("#nmi-info-card-text").text("For my final project, I chose to create a Projects page and a Photography page on my portfolio website using Vue.js. On the projects page, the projects are loaded from a local JSON file hosted on the server asynchronously by a Vue instance. The JSON is parsed for all of the project details to create card views and modal views when the cards are selected. The array of projects can be filtered by project type using methods of the Vue instance. On the photography page, the photos are loaded using the Flickr API which collects photos from my personal Flickr account. The first query gets the info about where the file is hosted so that it can be downloaded, and a second query uses that info to retrieve the metadata of each photo to get its title and date. The JSON returned by the Flickr API is parsed to create the card views and setup a link to view the photo at full-resolution on Flickr when clicked.");

    } else {
        $(".sort5110-1").removeClass("is-hidden");
        $(".sort5110-2").addClass("is-hidden");
        $(".sort5110-3").addClass("is-hidden");
        $(".sort5110-4").addClass("is-hidden");
        $(".sort5110-5").addClass("is-hidden");

        $("#head5110-1").addClass("is-active");
        $("#head5110-2").removeClass("is-active");
        $("#head5110-3").removeClass("is-active");
        $("#head5110-4").removeClass("is-active");
        $("#head5110-5").removeClass("is-active");

        $("#nmi-info-card-title").text("HTML/CSS");
        $("#nmi-info-card-text").text("In this section, we explored and refreshed ourselves on the basics of HTML and CSS. We started with the basic elements of HTML like <p> and <div> tags, and moved on to more advanced concepts including forms and form submission. In CSS, we explored the basics of positioning and styling with text and the box model, and then moved on to Flexbox which is an important part of modern HTML5 and CSS3 for responsive websites. For the first Assignment 1, we put into practice some of the more complicated HTML elements like lists and media players, and practiced styling individual objects.");

    }
}

$(document).ready(function () {
    console.log("about to sort")
    sort5110(1);
});

function finalProject5110Modal() {
    $('#final5110Modal').toggleClass('is-active');
}