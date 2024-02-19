function startClock() {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  minutes = checkClock(minutes);
  seconds = checkClock(seconds);
  hours = hours % 12;
  hours = hours ? hours : 12;

  hoursElement = document.querySelector('.js-get-hours');
  minutesElement = document.querySelector('.js-get-minutes');
  secondsElement = document.querySelector('.js-get-seconds');
  periodElement = document.querySelector('.js-period-times');

  hoursElement.innerHTML = `${hours}`;
  minutesElement.innerHTML = `${minutes}`;
  secondsElement.innerHTML = `${seconds}`;
  periodElement.innerHTML = hours >= 12 ? 'PM' : 'AM';
  
  setTimeout(startClock, 1000);
}

function checkClock(i) {
  i < 10 ? i = 0 + i : '';
  return i;
} 

startClock();

var bar = new ProgressBar.Circle(container, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(1.0); 