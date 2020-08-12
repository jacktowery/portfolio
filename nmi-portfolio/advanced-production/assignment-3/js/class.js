let studentView = document.querySelector('#studentView');

$.getJSON('us.json', function (data) {

    let length = data.length;
    for (var i = 0; i < length; i++) {
        let name = data[i].stu_name + " " + data[i].last_name;
        let domain = data[i].domain;
        if (domain.charAt(0) != 'h') {
            domain = "http://" + domain;
        }
        let imagePath = domain + "/images/me.jpg";
        let fact = data[i].fact;
        let section = "";
        if (data[i].section == "12305110") {
            section = "12:30PM"
        } else {
            section = "9:30AM"
        }

        studentView.innerHTML += '<div class="column is-one-quarter">' +
            '<div class="card">' +
            '<div class="card-image">' +
            '<figure class="image">' +
            '<a href="' + domain + '">' +
            '<img src="' + imagePath + '" alt="Image not found at /images/me.jpg" onerror="this.src = \'https://dummyimage.com/640x480/aaa/fff\';">' +
            '</a>' +
            '</figure>' +
            '</div>' +
            '<div class="card-content has-text-centered">' +
            '<p class="title is-4">' + name + '</p>' +
            '<div class="content">' +
            '<p><em>' + section + ' Section</em></p>' +
            '<p>' + fact + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
    }

});