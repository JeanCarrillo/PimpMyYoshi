function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.now();
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

// choisir la date de fin du compte a rebours //


var deadline = new Date(Date.parse('2019-03-31'));
initializeClock('clockdiv', deadline);

// background click //
function changeBackground() {
  const randomColor = ["#00A591","#95DEE3","#EC9787","#EADEDB","#C48F65","#EDCDC2","#92B6D5"];
  let randomNumber = Math.floor(Math.random(randomColor.length) * randomColor.length)
  document.getElementById("section3").style.backgroundColor = randomColor[randomNumber]
  document.getElementById("myPopup").style.visibility ="visible"
} 


/*
const date = ' March 30, 2019';
const message = 'Get your exclusif Yoshi before' + date + '!';

window.confirm("message"); */


