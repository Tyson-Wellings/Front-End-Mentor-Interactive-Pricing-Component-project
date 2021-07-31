var slider = document.getElementById("page-views-slider");
var selectButton = document.getElementById("slider-visible-thumb");
var filledTrack = document.getElementById("slider-track-filled");
xPos =["0%", "calc(25% - 8px)", "calc(50% - 16px)", "calc(75% - 24px)","calc(100% - 32px)"] 
/* had to manually write in the positions for the visible thumb that way the visible thumb would be 
overlappin the input's orginal thumb. If the overlap wasn't exact there would be portions of the thumb
that would not be clickable which would drastically hinder the user experience */
slider.oninput = function(){
    selectButton.style.left = xPos[this.value]
    filledTrack.style.width = this.value*25 + "%"
}
