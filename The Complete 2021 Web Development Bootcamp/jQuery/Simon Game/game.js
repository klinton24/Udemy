const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let gameStarted = false;

let level = 0;

function playSound(name) {
    let audio = new Audio("sounds/"+name+".mp3");
    audio.play();    
}

function animatePress(currentColor) {
    $("#" +currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" +currentColor).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
            nextSequence();
        }, 1000);
    }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    };
};

function nextSequence () {
    userClickedPattern = [];
    level++;
    let number = Math.floor(Math.random() * 4);
    let randomChosenColor =  buttonColors[number];
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $("h1").text("Level " + level);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
};

$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    playSound(userChosenColor);
    animatePress(userChosenColor);
    userClickedPattern.push(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

$(document).keypress(function() {
    if (gameStarted != true) {
        gameStarted = true;
        nextSequence();
    }
  });