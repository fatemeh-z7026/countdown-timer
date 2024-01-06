let $ = document;

let timeDisplayMinute = $.getElementById("timeMinute");
let timeDisplaySecond = $.getElementById("timeSecond");
let startBtn = $.getElementById("start");
let restBtn = $.getElementById("rest");
let pauseBtn = $.getElementById("pause");
let resumeBtn = $.getElementById("resume");
let secondsRemaining;
//a variable isRunning which tells tick() whether to keep going after each second of countdown
let isRunning = false;
let countDown;

//a function tick() that can be called by startTimer() or resumeTimer()
function tick() {
  //every second, call the "update" function
  //put into a variable to stop interval
  countDown = setInterval(update, 1000);
  isRunning = true;

  function update() {
    if (isRunning == false) {
      clearInterval(countDown);
    } else {
      // turn the seconds into mm:ss
      let min = Math.floor(secondsRemaining / 60);
      let sec = secondsRemaining - min * 60;
      //add a leading zero (as a string value) if seconds less than 10
      if (min < 10) {
        min = "0" + min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      // now change the display
      timeDisplayMinute.innerHTML = min;
      timeDisplaySecond.innerHTML = sec;
      // stop is down to zero
      if (secondsRemaining === 0) {
        clearInterval(countDown);
      }
      secondsRemaining--;
    }
  }
}

function startTimer() {
  // get countents of the "minutes" text box
  let minutes = document.getElementById("minutes").value;
  // how many seconds
  secondsRemaining = minutes * 60;
  // check if not a number
  if (isNaN(minutes)) {
    alert("Please Insert Number");
    return; // stops function if true
  }
  if (minutes == "") {
    stopTimer();
  }
  //start interval
  tick();
  console.log("Start");
}

function stopTimer() {
  clearInterval(countDown);
  isRunning = false;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", function () {
  stopTimer();
  console.log("paused");
});

resumeBtn.addEventListener("click", function () {
  tick();
  console.log("resumed");
});

restBtn.addEventListener("click", function () {
  clearInterval(countDown);
  timeDisplayMinute.innerHTML = "00";
  timeDisplaySecond.innerHTML = "00";
  minutes.value = "";
  minutes.placeholder = "Insert minute ";
  console.log("rested");
});
