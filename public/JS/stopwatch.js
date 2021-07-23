// Minutes & Seconds to be displayed
let minutes = 0;
let seconds = 0;

// Buttons & Display
const start = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const clearButton = document.getElementById("clearBtn");
const timeDisplay = document.getElementById("timeDisplay");

// Interval ID Value
let intervalId = 0;

// Start button event & related functions
function incrementClock() {
  seconds++;
  if (seconds > 60) {
    minutes = seconds / 60;
  }
  if (seconds % 60 < 10) {
    timeDisplay.innerText = `${minutes}:0${seconds}`;
  } else {
    timeDisplay.innerText = `${minutes}:${seconds}`;
  }
}
function startClock() {
  intervalId = setInterval(incrementClock, 1000);
}
start.onclick = () => {
    startClock();
};
colorChange(start);

// Stop button event
stopButton.onclick = function stopClock() {
    clearInterval(intervalId);
}
colorChange(stopButton);

// Clear button event
clearButton.onclick = function clearClock() {
  minutes = 0;
  seconds = 0;
  timeDisplay.innerText = "0:00";
}
colorChange(clearButton);

// Color change on click animation
function colorChange(btn) {
    let ogColor = btn.style.backgroundColor;
    btn.onmousedown = () => {
        btn.style.backgroundColor = "grey";
    }
    btn.onmouseup = () => {
        btn.style.backgroundColor = ogColor;
    }
}
