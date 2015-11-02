var livesLeft = 3;
var score = 0
var speed = 5000;

$('.btn-play-game').click(function () {
    $('.dv-play-game').fadeOut(300, "linear", createRock);
});

function createRock() {
    speed = Math.floor(speed * 0.9);
    var rock = document.createElement("div");
    $(rock).addClass('rock');
    $(rock).css('left', Math.floor(($(window).width() - 110) * Math.random()));
    $(rock).css('bottom', $(window).height() - 5);
    document.body.appendChild(rock);
    $(rock).animate({ bottom: 0 }, speed, "linear", loseLife);
    $(rock).click(function () {
        $(rock).stop();
        $(rock).remove();
        score += 1;
        $('#score').text(score);
        createRock();
    });
}

function loseLife() {
    livesLeft -= 1;
    $('#lives-left').text(livesLeft);
    if (livesLeft <= 0) {
        gameOver();
    }
    else {
        createRock();
    }
}

function gameOver() {
    $('.rock').remove();
    var btnReplay = document.createElement("a");
    $(btnReplay).addClass('btn-play-game');
    $(btnReplay).text("Play Again");
    document.body.appendChild(btnReplay);
    //$(btnReplay).click(createRock);
}