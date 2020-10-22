var clicks = 0;

function addClick(){
    clicks++;
}

function showClick(){
    if(clicks == 1){
        alert("you clicked " + clicks + " time");
    }
    else{
        alert("you clicked " + clicks + " times");
    }
}

function resetClicks(){
    if (clicks == 0) {
        alert("The counter is already at 0");
    } else{
        clicks = 0;
        alert("The counter has been reset to 0");
    }
}