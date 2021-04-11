const buttonColors = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

function nextSequence () {
    let number = Math.floor(Math.random() * 4);
    let randomChosenColor =  buttonColors[number];
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    let audio = new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
    gamePattern.push(randomChosenColor);
};

$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
})
