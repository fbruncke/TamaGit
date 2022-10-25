

//Definition of what mood the player can have
const MoodIs = {
    Happy: "happy",
    Hungry: "hungry",
    Sick: "sick"
}

//Game variables (States)
var foodCounter = 10;
var mood = MoodIs.Happy;

//Invokes the method eating as soon as the browser loads the screen
window.onload = eating;

//This is the game loop. invoked each second
//decreases the foodCounter variable
//makes sure the UI is updated
function eating()
{

}

function upDateUI()
{

}

function checkMood()
{

}

//Eventhandler fired by the eat button click
document.querySelector("#btneat").onclick = function() {
    foodCounter++;
    upDateUI();
}