var slider = document.getElementById("page-views-slider");
var selectButton = document.getElementById("slider-visible-thumb");
xPos =["0%", "25%", "50%", "75%","100%"]
console.log(slider.attributes)
slider.oninput = function(){
    selectButton.style.left = xPos[this.value] 
   
}
