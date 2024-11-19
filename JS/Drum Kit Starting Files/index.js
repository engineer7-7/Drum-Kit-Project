// udemy course solution
// detecting Button press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {


        let buttonInnerHTML = this.innerHTML;
        // console.log(buttonInnerHTML); here the char of each box is displayed (w,d,s,etc.)
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);


    })

}

// detecting keyboard press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

})

function makeSound(key) {
    switch (key) {
        case "w":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            const kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "s":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(key);
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");

    }, 1000);


}


// // my solution!
// for (let i = 0; i < document.querySelectorAll("button").length; i++) {
//
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//
//         const audio = new Audio("sounds/" + sounds[i]);
//         audio.play();
//     })
//
// }
//
// const sounds = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
//
//
