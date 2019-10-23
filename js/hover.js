document.addEventListener('DOMContentLoaded', () => {
    let progressBars = Array.prototype.slice.call(document.querySelectorAll('progress'), 0);

    if (progressBars.length > 0) {
        progressBars.forEach(el => {
            el.addEventListener('mouseover', () => {
                el.classList.toggle('is-primary');
                el.classList.toggle('is-dark');
            });
            el.addEventListener('mouseout', () => {
                el.classList.toggle('is-primary');
                el.classList.toggle('is-dark');
            });
        });
    }


});