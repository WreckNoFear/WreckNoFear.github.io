let interval;
const eventDay = new Date('01/01/2024');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let dayField = document.getElementById('day');
let hourField = document.getElementById('hour');
let minuteField = document.getElementById('minute');
let secondField = document.getElementById('second');

const countDownFn = () => {
everyMinute = setInterval(countDownFn, minute)
    let now = new Date();
    let timeSpan = eventDay - now;

    if (timeSpan <= -now) {
        console.log("I guess the notes were meant to be here.");
        clearInterval(interval);
      }
    else if (timeSpan <= 0) {
        console.log("Maybe notes will be here...");
        clearInterval(interval);
        return;
      }
    else {
        const days = Math.floor(timeSpan / day)
        const hours = Math.floor((timeSpan % day) / hour)
        const minutes = Math.floor((timeSpan % hour) / minute)

        dayField.innerHTML = days;
        hourField.innerHTML = hours;
        minuteField.innerHTML = minutes;
      }
 }

 countDownFn()