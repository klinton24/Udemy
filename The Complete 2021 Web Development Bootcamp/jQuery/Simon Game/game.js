const buttonColors = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

let gameStarted = false;

let level = 0

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

function nextSequence () {
    let number = Math.floor(Math.random() * 4);
    let randomChosenColor =  buttonColors[number];
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $("h1").text("Level " + level);
    level++;
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
};

$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    playSound(userChosenColor);
    animatePress(userChosenColor);
    userClickedPattern.push(userChosenColor);
})

$(document).keypress(function() {
    if (gameStarted != true) {
        gameStarted = true;
        nextSequence();
    }
  });