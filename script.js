var slider = document.getElementById("page-views-slider");
var sliderThumb = document.getElementById("slider-visible-thumb");
var sliderThumbWidth = sliderThumb.offsetWidth
var filledTrack = document.getElementById("slider-track-filled");
var pageViews = ["10K", "50K", "100K", "500K", "1M"]
var monthlyRate = [8, 12, 16, 24, 36]
var discountSwitch = document.getElementById("switch-toggle")

var xPos = []
for (i = 0; i <= parseInt(slider.max); i++){
    prepareXposCoordinates(i)
}

function init (){
    prepareSlider()
    prepareDiscountSwitch()
}
/* had to write in the positions for the visible thumbs using a for loop 
that iterated through a function that way the visible thumb would be
overlapping the input's orginal thumb irrespective of screen-size. If the overlap wasn't exact there 
would be portions of the thumb that would not be clickable which could 
hinder the user experience imo */
function prepareSlider(){
    slider.oninput = function(){
    sliderThumb.style.left = xPos[this.value]
    filledTrack.style.width = this.value*25 + "%"
    calculateRate()
    changePageViews()
    }
}


function prepareXposCoordinates (index){
    var percentage, offset 
   /*  percentage refering to percentage width of the slider offset referring to
     how offset the thumb will be at each point of the slider */
     percentage = 25*index
     offset = sliderThumbWidth*index/4
     xPos[index] = "calc(" + percentage + "% - " + offset + "px)"
 /*     the xPos is written using the calc() css syntax. */
}

function calculateRate (){
    if (discountSwitch.checked == false){
        document.getElementById("price").innerText = "$" + monthlyRate[slider.value] + ".00"
        return
    }
        document.getElementById("price").innerText = "$" + monthlyRate[slider.value]*9 + ".00"
    
}

function changePageViews(){
    document.getElementById("page-views-text").innerText = pageViews[slider.value] + " PAGEVIEWS"
}

function prepareDiscountSwitch(){
    discountSwitch.addEventListener("input",function(){
        if (discountSwitch.checked == true){
            document.getElementById("pricing-term").innerText = "year"
            calculateRate()
            return
        }

        document.getElementById("pricing-term").innerText = "month"
        calculateRate()
    })
}

document.addEventListener('DOMContentLoaded', init);