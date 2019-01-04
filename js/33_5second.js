(function(){
  'use strict';

  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const result = document.getElementById('result');
  let startTime;
  let isStarted = false;

  start.addEventListener('click',() => {
    if (isStarted === true) {
      return;
    }
    isStarted = true;
    startTime = Date.now();
    start.classList.add('pushed');
    stop.classList.remove('pushed');
    result.textContent = '0.000';
    result.classList.add('standby');
    result.classList.remove('perfect');
  });

  stop.addEventListener('click', () =>{
    let elapsedTime = (Date.now() - startTime) / 1000;
    let diff;
    if (isStarted === false) {
      return;
    }
    isStarted = false;
    result.textContent = elapsedTime.toFixed(3);
    start.classList.remove('pushed');
    stop.classList.add('pushed');
    result.classList.remove('standby');
    diff = elapsedTime - 5.0;
    if (Math.abs(diff) < 1.0) {
      result.classList.add('perfect');
    }
  });
})();