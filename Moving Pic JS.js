//Global Variables
var change = 100;
var intervalID = 0;

function intervalstart()
{
    //Local Variable
    var image = document .getElementById("spacexopt2");

    //dissable launch buttun while its moving
    document.getElementById("launchbutton").disabled = true; 
    document.getElementById("stopbutton").disabled = false;
    
intervalID = setInterval(function()
    {
        //change of y axis (change "bottom" to Left or Right for x axis)
image.style.bottom = change+ "px";


document.getElementById("yaxis").innerHTML = "+" + image.style.bottom;
change += 5; //this is the same as Change = Change - 5 (moves 5px at a time)
},125)//125 = number of ms before repeating

}

function intervalstop()
{
    clearInterval(intervalID);
    //disable stop button
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("launchbutton").disabled = false;
}

function play()
{
stormsound = new sound ("rocket engine sound.mp3");
stormsound.play();
}

function stop()
{
window.location.reload();

}

//Helper Function
function sound(src)
{
// add play button function
this.sound = document.createElement("audio") ;//create audio
this.sound.src = src;//define src
this.play = function() {//music function
this.sound.play();}//play sound
}

