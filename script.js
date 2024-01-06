let $ = document;

let timeDisplayMinute = $.getElementById("timeMinute");
let timeDisplaySecond = $.getElementById("timeSecond");
let startBtn = $.getElementById("start");
let restBtn = $.getElementById("rest");
let pauseBtn = $.getElementById("pause");
let resumeBtn = $.getElementById("resume");
let secondsRemaining;
let isRunning = false;
let countDown;

function tick() {
  let min = Math.floor(secondsRemaining / 60);
  let sec = secondsRemaining - min * 60;

  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  timeDisplayMinute.innerHTML = min;
  timeDisplaySecond.innerHTML = sec;
  if (secondsRemaining === 0) {
    clearInterval(countDown);
  }

  secondsRemaining--;
}

function startTimer() {
  countDown = setInterval(tick, 1000);

  let minutes = document.getElementById("minutes").value;
  secondsRemaining = minutes * 60;
}

startBtn.addEventListener("click", startTimer);
