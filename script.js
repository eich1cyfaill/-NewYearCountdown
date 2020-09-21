const daysEl = document.getElementById('days');  
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYearsDay = "1 Jan 2021";

function countdown() {
    const currentDate = new Date();
    const newYears = new Date(newYearsDay);

    const totalSeconds = (newYears - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    console.log(days, hours, minutes, seconds);
}

countdown();

setInterval(countdown, 1000);