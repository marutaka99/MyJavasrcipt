(() => {
  'use strict';
  const timer = document.querySelector('#timer');
  const start = document.querySelector('#start');
  const stop = document.querySelector('#stop');
  const reset = document.querySelector('#reset');

  let startTime;
  let elapsedTime = 0;
  let timerId;
  let timeToAdd = 0;
  let isRunning = false;

  /**
   * update display text of stopwatch
   */
  const updateTimeText = () => {
    let m = Math.floor(elapsedTime / 60000);
    let s = Math.floor(elapsedTime % 60000 / 1000);
    let ms = elapsedTime % 1000 ;

    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);  

    timer.textContent = m + ':' + s + ':' + ms;
  };

  /**
   * count up of stopwatch
   */
  const countUP = () => {
    timerId = setTimeout( () => {
      elapsedTime = Date.now() -startTime + timeToAdd;
      updateTimeText();
      countUP();
    },10);
  };

  /**
   * set button style
   * @param {*} startButtonState true is button style activate
   * @param {*} stopButtonState true is button style activate
   * @param {*} resetButtonState true is button style activate
   */
  const updateButtonState = (startButtonState, stopButtonState ,resetButtonState ) => {
    start.className = startButtonState ? 'btn' : 'btn inactive';
    stop.className = stopButtonState ? 'btn' : 'btn inactive';
    reset.className = resetButtonState ? 'btn' : 'btn inactive';
  };

  updateButtonState(true, false, false);

  start.addEventListener('click' , () =>{
    if (isRunning === true) {
      return;
    }
    isRunning = true;
    updateButtonState(false, true, false);
    startTime = Date.now();
    countUP();
  });

  stop.addEventListener('click' , () => {
    if (isRunning === false) {
      return;
    }
    isRunning = false;
    updateButtonState(true, false, true);
    clearTimeout(timerId);
    timeToAdd += Date.now() - startTime;
  });

  reset.addEventListener('click' , () => {
    if (isRunning === true) {
      return;
    }
    updateButtonState(true, false, false);
    elapsedTime = 0;
    timeToAdd = 0;
    updateTimeText();
  });

})();