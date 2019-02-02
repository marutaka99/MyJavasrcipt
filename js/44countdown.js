(() => {
  'use strict';
  const timer = document.querySelector('#timer');
  const min = document.querySelector('#min');
  const sec = document.querySelector('#sec');
  const reset = document.querySelector('#reset');
  const start = document.querySelector('#start');

  let startTime;
  let timeLeft;
  let timeToCountDown = 0;
  let timerId;
  let isRunning = false;
  let timerStirng;

  const updateTimer = (t) => {
    let d = new Date(t);
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms = d.getMilliseconds();
    m = ('0'+ m).slice(-2);
    s = ('0'+ s).slice(-2);
    ms = ('00'+ ms).slice(-3);
    timerStirng = m +':'+ s +'.'+ ms;
    timer.textContent = timerStirng;
    document.title = timerStirng;
  };

  const countDown = () => {
    timerId = setTimeout(() => {
      timeLeft = timeToCountDown - ( Date.now() - startTime );
      if (timeLeft < 0) {
        isRunning = false;
        start.textContent ='Start';
        clearTimeout(timerId);
        timeLeft = 0 ;
        timeToCountDown = 0;
        updateTimer(timeLeft);
        return;
      }
      updateTimer(timeLeft);
      countDown();
    }, 10 );
  };

  start.addEventListener('click' , () => {
    if (isRunning === false) {
      isRunning = true;
      startTime = Date.now();
      start.textContent = 'Stop';
      countDown();
    } else {
      isRunning = false;
      start.textContent ='Start';
      timeToCountDown = timeLeft;
      clearTimeout(timerId);
    }
  });

  min.addEventListener('click' , () => {
    if (isRunning === true) {
      return;
    }
    timeToCountDown += 60 *1000;
    if (timeToCountDown >= 60 * 1000 * 1000) {
      timeToCountDown = 0;
    }
    updateTimer(timeToCountDown);
  });

  sec.addEventListener('click' , () => {
    if (isRunning === true) {
      return;
    }
    timeToCountDown += 1000;
    if (timeToCountDown >= 60 * 1000 * 1000) {
      timeToCountDown = 0;
    }
    updateTimer(timeToCountDown);
  });

  reset.addEventListener('click' , () => {
    timeToCountDown = 0;
    updateTimer(timeToCountDown);
  });
})();