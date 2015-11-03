var livesLeft = 3;
var score = 0
var speed = 5000;
var interval = null;

$('#btn-start').click(function () {
    $('#dv-start').fadeOut(300);
    createRock();
});

function createRock() {
    var rock = document.createElement("div");
    $(rock).addClass('rock');
    $(rock).css('left', Math.floor(($(window).width() - 110) * Math.random()));
    $(rock).css('bottom', $(window).height() - 5);
    document.body.appendChild(rock);
    clearInterval(interval);
    speed = Math.floor(speed * 0.9); 
    if (speed < 450) { // never let speed go below 450
        speed = 450;
    }
    interval = setInterval(createRock, speed);
    $(rock).animate({ bottom: 0 }, 5000, "linear", loseLife);
    $(rock).on(isMobile ? 'touchend' : 'click', function () {
        if (!($(rock).hasClass('bottom'))) {
            $(rock).stop();
            $(rock).remove();
            score += 1;
            $('.score').text(score);
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
}

function gameOver() {
    clearInterval(interval);
    $('.rock').addClass('bottom');
    $('.rock').stop();
    $('#dv-replay').fadeIn(300);
}

$('#btn-replay').on(isMobile ? 'touchend' : 'click', function () {
    $('.rock').remove();
    score = 0;
    livesLeft = 3;
    speed = 5000;
    $('.score').text(score);
    $('.lives-left').text(livesLeft);
    $('#dv-replay').fadeOut(300, "linear", createRock);
});