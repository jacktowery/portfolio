$("#card").flip({
    trigger: 'manual',
    speed: 400,
    axis: 'x'
});

function bigFlip() {
    $("#card").flip('toggle');
}