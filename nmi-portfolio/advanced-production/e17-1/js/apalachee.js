var level = document.querySelector('#level');
var flow = document.querySelector('#flow');
var siteName = document.querySelector('#siteName');



var siteString = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=02219000&parameterCd=00060,00065';

$.getJSON(siteString, function (data) {

    siteName.innerHTML = data.value.timeSeries[0].sourceInfo.siteName;
    level.innerHTML = data.value.timeSeries[0].values[0].value[0].value;
    flow.innerHTML = data.value.timeSeries[1].values[0].value[0].value;

});