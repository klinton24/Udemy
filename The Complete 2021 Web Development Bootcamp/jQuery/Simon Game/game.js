const gamePattern = [];

const buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence () {
    let number = console.log(Math.floor(Math.random() * 4));
    let randomChosenColor =  buttonColors[number];
    gamePattern.push(randomChosenColor);

};
