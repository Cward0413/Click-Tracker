var clicks = 0;

function addClick(){
    clicks++;
}

function showClick(){
    alert(clicks);
}

function resetClicks(){
    clicks = 0;
    alert("The click counter has been reset to 0");
}