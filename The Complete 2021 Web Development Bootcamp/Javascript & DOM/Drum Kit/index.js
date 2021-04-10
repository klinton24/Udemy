//detecking screen clicks

const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let buttonInnerHTML = this.innerHTML.substring(0,1);

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });
}

//detecting button presses

document.addEventListener("keydown", function(e) {
    makeSound(e.key);

    buttonAnimation(e.key);
})

function makeSound(key) {
    switch (key) {
        case "a":
            const clap = new Audio("sounds/clap.wav");
            clap.play();
        break;

        case "s":
            const hiHat = new Audio("sounds/hihat.wav");
            hiHat.play();
        break;

        case "d":
            const kick = new Audio("sounds/kick.wav");
            kick.play();
        break;

        case "f":
            const openHat = new Audio("sounds/openhat.wav");
            openHat.play();
        break;

        case "g":
            const boom = new Audio("sounds/boom.wav");
            boom.play();
        break;

        case "h":
            const ride = new Audio("sounds/ride.wav");
            ride.play();
        break;

        case "j":
            const snare = new Audio("sounds/snare.wav");
            snare.play();
        break;

        case "k":
            const tom = new Audio("sounds/tom.wav");
            tom.play();
        break;

        case "l":
            const tink = new Audio("sounds/tink.wav");
            tink.play();
        break;
    
        default: console.log();
    }
}

function buttonAnimation(currentKey) {

    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add("playing");
    setTimeout(function() {
        activeButton.classList.remove("playing");
    }, 100);

}