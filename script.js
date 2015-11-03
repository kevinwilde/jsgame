var livesLeft = 3;
var score = 0
var speed = 5000;

$('#btn-start').click(function () {
    $('#dv-start').fadeOut(300, "linear", createRock);
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
        if (!($(rock).hasClass('bottom'))) {
            $(rock).stop();
            $(rock).remove();
            score += 1;
            $('.score').text(score);
            createRock();
        }
    });
}

function loseLife() {
    $(this).addClass('bottom');
    livesLeft -= 1;
    $('.lives-left').text(livesLeft);
    if (livesLeft <= 0) {
        gameOver();
    }
    else {
        createRock();
    }
}

function gameOver() {
    $('.rock').stop();
    //$('.dv-score').fadeOut(300);
    $('#dv-replay').fadeIn(300);
}

$('#btn-replay').click(function () {
    $('.rock').remove();
    score = 0;
    livesLeft = 3;
    speed = 5000;
    $('.score').text(score);
    $('.lives-left').text(livesLeft);
    $('#dv-replay').fadeOut(300, "linear", createRock);
    //$('.dv-score').fadeIn(300);
});