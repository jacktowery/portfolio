function expandProject(id) {
    id = '#' + id;
    $(id).toggleClass('is-one-third');
    $(id).toggleClass('is-full');
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}

function launchModal(id) {
    let column = document.getElementById(id);
    let modal = column.querySelector(".modal");
    modal.classList = "modal is-active"
}

function closeModal(id) {
    let column = document.getElementById(id);
    let modal = column.querySelector(".modal");
    modal.classList = "modal"
}