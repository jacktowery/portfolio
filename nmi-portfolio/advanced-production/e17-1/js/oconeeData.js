var gaSites = ["02217274", "02217297", "02217475", "02217500", "02217615", "02217643", "02217770", "02218300", "02218565", "02219000", "02220788", "02220900", "02221525", "02223000", "02223056", "02223110", "02223190", "02223248", "02223360", "02223500", "02224500"]
var gaNames = ["WHEELER CREEK AT BILL CHEEK ROAD, NEAR AUBURN, GA ", "MULBERRY CREEK NEAR WINDER, GA ", "MIDDLE OCONEE RIVER NEAR ARCADE, GA ", "MIDDLE OCONEE RIVER NEAR ATHENS, GA ", "NORTH OCONEE R AT WOODBRIDGE RD, NEAR COMMERCE, GA ", "PARKS CREEK AT LYLE FIELD RD NR JEFFERSON, GA ", "NORTH OCONEE RIVER AT COLLEGE ST, AT ATHENS, GA ", "OCONEE RIVER NEAR PENFIELD, GA ", "APALACHEE RIVER AT FENCE ROAD, NEAR DACULA, GA ", "APALACHEE RIVER NEAR BOSTWICK, GA ", "LITTLE RIVER AT NEWBORN RD NEAR NEWBORN, GA ", "LITTLE RIVER NEAR EATONTON, GA ", "MURDER CREEK BELOW EATONTON, GA ", "OCONEE RIVER AT MILLEDGEVILLE, GA ", "OCONEE RIVER AT AVANT MINE, NEAR OCONEE, GA ", "BUFFALO CREEK AT GA 272, NEAR OCONEE, GA ", "COMMISSIONER CREEK AT US 441, AT MCINTYRE, GA ", "OCONEE RIVER NEAR OCONEE, GA ", "BIG SANDY CREEK AT US 441, NEAR IRWINTON, GA ", "OCONEE RIVER AT DUBLIN, GA ", "OCONEE RIVER NEAR MOUNT VERNON, GA"]

let buildList = document.querySelector('#siteSelector');
var level = document.querySelector('#level');
var flow = document.querySelector('#flow');
var siteName = document.querySelector('#siteName');
var mapLink = document.querySelector('#map');

for (var i = 0; i < gaSites.length; i++) {
    buildList.innerHTML += "<option value=" + gaSites[i] + ">" + gaNames[i] + "</option>"
}

function showSite() {

    let whichSite = buildList.value;
    var siteString = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=' + whichSite + '&parameterCd=00060,00065'

    $.getJSON(siteString, function (data) {

        siteName.innerHTML = data.value.timeSeries[0].sourceInfo.siteName;
        level.innerHTML = data.value.timeSeries[0].values[0].value[0].value;
        flow.innerHTML = data.value.timeSeries[1].values[0].value[0].value;
        let mapLinkURL = 'http://www.google.com/maps/place/' + data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.latitude + ',' + data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.longitude;
        mapLink.setAttribute('href', mapLinkURL);

    });
}