const daysEl  = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl  = document.getElementById('mins');
const secondsEl = document.getElementById("seconds");

const getmydate = new Date();
const newYear = `1 Jan ${new Date().getFullYear() + 1}`;

function countdown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds =(newYearsDate-currentDate)/1000;

    const days =Math.floor(totalSeconds/ 3600 / 24);
    const hours =Math.floor(totalSeconds / 3600)%24;
    const mins=Math.floor(totalSeconds/60)%24;
    const seconds=Math.floor(totalSeconds)%60;


    daysEl.innerHTML=(days<10 ?'0'+days :days);
    hoursEl.innerHTML=(hours<10 ?'0'+hours :hours);
    minsEl.innerHTML=(mins<10 ?'0'+mins :mins);
    secondsEl.innerHTML=(seconds<10 ?'0'+seconds :seconds);

}

// countdown();

setInterval(countdown, 1000);
