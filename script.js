let time = 30;
let signals = ["BIG", "SMALL"];

function updateTimer() {
  time--;
  if(time <= 0){
    time = 30;
    let randomIndex = Math.floor(Math.random() * signals.length);
    document.getElementById("signal").innerText = signals[randomIndex];
  }
  document.getElementById("timer").innerText =
    "00:" + (time < 10 ? "0" + time : time);
}

setInterval(updateTimer, 1000);
