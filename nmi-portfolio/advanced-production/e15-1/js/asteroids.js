$(document).ready(function () {

    let asteroidDisplay = document.querySelector('body');

    $.getJSON('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=GeydUForxqaBsDNg18OOReVhJNzemiCEh4QXZgtY', function (data) {
        var howMany = data.near_earth_objects.length
        $('#count').html(howMany);

        let dataSource = data.near_earth_objects;

        for (var i = 0; i < dataSource.length; i++) {
            let maxWidth = (dataSource[i].estimated_diameter.kilometers.estimated_diameter_max) * 100;
            let minWidth = (dataSource[i].estimated_diameter.kilometers.estimated_diameter_min) * 100;
            let danger = dataSource[i].is_potentially_hazardous_asteroid;

            let asteroidMax = document.createElement("div");
            asteroidMax.classList = "asteroid";
            asteroidMax.style.width = maxWidth + "px";
            asteroidMax.style.height = maxWidth + "px";
            if (danger == true) {
                asteroidMax.classList += " danger";
            }

            let asteroidMin = document.createElement("div");
            asteroidMin.classList = "asteroid-min";
            asteroidMin.style.width = minWidth + "px";
            asteroidMin.style.height = minWidth + "px";

            asteroidMax.appendChild(asteroidMin);
            asteroidDisplay.appendChild(asteroidMax)
        }
    });






})