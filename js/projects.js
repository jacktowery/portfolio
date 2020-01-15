function expandProject(id) {
    id = '#' + id;
    $(id).find('figure').css("width", "0");
    $(id).find('.box').css("width", "inherit");
    $(id).toggleClass('is-one-third');
    $(id).toggleClass('is-full');
    setTimeout(
        function() {

        }, 200);


    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}

function shrinkProject(id) {
    id = '#' + id;
    $(id).toggleClass('is-one-third');
    $(id).toggleClass('is-full');
    $(id).find('.box').css("width", "0");
    $(id).find('figure').css("width", "inherit");
    setTimeout(
        function() {

        }, 200);


    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}

function launchModal(ele) {
    let id = ele.parentElement.id;
    //console.log("id: " + id);
    let column = document.getElementById(id);
    let modal = column.querySelector(".modal");
    modal.classList = "modal is-active"
}

function closeModal(ele) {
    let id = ele.parentElement.parentElement.id;
    //console.log("id: " + id);
    let column = document.getElementById(id);
    let modal = column.querySelector(".modal");
    modal.classList = "modal"
}

var projVue = new Vue({
    el: '#projects2-columns',
    data: {
        allProjects: [],
        filteredProjects: [],
        filter: "none"
    },
    created() {
        this.loadAllProjects();
    },
    methods: {
        async loadAllProjects() {
            try {
                let response = await axios.get('/projects/allProjects.json');
                this.allProjects = response.data.projects;
                if (this.filter == 'none') {
                    this.filteredProjects = this.allProjects;
                } else {
                    this.filteredProjects = [];
                    for (i = 0; i < this.allProjects.length; i++) {
                        if (this.allProjects[i].category == this.filter) {
                            this.filteredProjects.push(this.allProjects[i]);
                        }
                    }
                }
            } catch (err) {
                console.log(err);
            }
        },
        changeFilter(f) {
            this.filter = f;
            this.loadAllProjects();
        }
    }
})

function filterCode() {
    projVue.changeFilter('code');
    document.querySelector('#tab-all').classList = "is-bold-600"
    document.querySelector('#tab-code').classList = "is-bold-600 is-active"
    document.querySelector('#tab-design').classList = "is-bold-600"
}

function filterDesign() {
    projVue.changeFilter('design');
    document.querySelector('#tab-all').classList = "is-bold-600"
    document.querySelector('#tab-code').classList = "is-bold-600"
    document.querySelector('#tab-design').classList = "is-bold-600 is-active"
}

function filterAll() {
    projVue.changeFilter('none');
    document.querySelector('#tab-all').classList = "is-bold-600 is-active"
    document.querySelector('#tab-code').classList = "is-bold-600"
    document.querySelector('#tab-design').classList = "is-bold-600"
}