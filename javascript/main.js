var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var time        = chronometer.setTime();

/*
Chronometer.printTime (timeArr) {
    console.log(timeArr);        // ['00', '01']
    let minutes = timeArr[0];
    let second = timeArr[1];
}
*/

function printTime() {
    let intervalId  = 0;
    intervalId = setInterval(() => {
        printMinutes();
        printSeconds();
        printMilliseconds();
    }, 1000);
}


function printMinutes() {
    minDec.innerHTML = minutes[0]
    minUni.innerHTML = minutes[1]
}

function printSeconds() {
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}


function setStopBtn() {
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
}

function setSplitBtn() {
    btnRight.innerText = "SPLIT";
    btnRight.className = "btn split";
}

function setStartBtn() {
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";

}

function setResetBtn() {
    btnRight.innerText = "RESET";
    btnRight.className = "btn reset";
}

// Start/Stop Button
// When the left button is clicked while the chronometer is stopped we need to:
// Set the btnLeft button with the text STOP, and the class btn stop.

btnLeft.addEventListener('click', function () {
  
if (btnLeft.innerHTML === "START") {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
} else { 
    chronometer.stopClick();
    setStartBtn ();
    setResetBtn ();
}
});


// Reset/Split Button
// Set the btnRight button with the text SPLIT, and the class btn split

btnRight.addEventListener('click', function () {
if (btnRight.innerHTML === "RESET") {
    setSplitBtn();
} else { 
    setResetBtn();
}
});






// Each second we need to update our screen. So go ahead and create a function that will receive the value
// for minutes and seconds, and print that on our HTML.

