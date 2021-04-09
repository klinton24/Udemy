const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let buttonInnerHTML = this.innerHTML.substring(0,1);

        switch (buttonInnerHTML) {
            case "a":
                const clap = new Audio("sounds/clap.wav");
                console.log(buttonInnerHTML);
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
    });
}

/*
<button class="a drum">a<span>clap</span></button>
    <button class="s drum">s<span>hi hat</span></button>
    <button class="d drum">d<span>kick</span></button>
    <button class="f drum">f<span>open hat</span></button>
    <button class="g drum">g<span>boom</span></button>
    <button class="h drum">h<span>ride</span></button>
    <button class="j drum">j<span>snare</span></button>
    <button class="k drum">k<span>tom</span></button>
    <button class="l drum">l<span>tink</span></button>*/