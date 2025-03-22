function play()
{
stormsound = new sound ("thunderstorm.mp3");
stormsound.play();

document. getElementById("startbutton") .disabled = true; //Turns off start button
document. getElementById("stopbutton") .disabled = false; //Turns on stop button
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