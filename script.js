const hoursSpan = document.querySelector(".hours");
const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");
const milisecondsSpan = document.querySelector(".ms");
const start = document.querySelector(".start");
const lap = document.querySelector(".lap");
const stop = document.querySelector(".stop");
const laps = document.querySelector(".laps");
const reset = document.querySelector(".reset");

let hours = 0,
    minutes = 0,
    seconds = 0;
    miliseconds=0;

var stopwatch;

//defining the start button
start.addEventListener("click", () => {
 

  stopwatch = setInterval(() => {
    miliseconds++;
    if( miliseconds==99){
      miliseconds=0;
      seconds++;
    }
    
    
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    if (hours <= 9) hoursSpan.innerText = "0" + hours + " : ";
    else hoursSpan.innerText = hours + " : ";
    if (minutes <= 9) minutesSpan.innerText = "0" + minutes + " : ";
    else minutesSpan.innerText = minutes + " : ";
    if (seconds <= 9) secondsSpan.innerText = "0" + seconds + " : ";
    else secondsSpan.innerText = seconds + " : ";
    if ( miliseconds <= 9)milisecondsSpan.innerText = "0" +  miliseconds;
    else milisecondsSpan.innerText =  miliseconds;
  }, 10);




});
//defining the lap button
lap.addEventListener("click", () => {
  const lap = document.createElement("div");
  lap.innerText = hours + " : " + minutes + " : " + seconds + " : " + miliseconds;
  laps.appendChild(lap);
});

//defining the reset button

stop.addEventListener("click", () => {

  clearInterval(stopwatch);

  hoursSpan.innerText = "00 : ";
  minutesSpan.innerText = "00 : ";
  secondsSpan.innerText = "00 : ";
  milisecondsSpan.innerText="00";

  hours = 0;
  minutes = 0;
  seconds = 0;
  miliseconds=0;

  laps.innerHTML = "<p>LAPS-</p>";
});

//defining the stop button
reset.addEventListener("click",()=>{
  clearInterval(stopwatch);

});