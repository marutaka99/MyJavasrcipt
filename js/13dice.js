'use strict';
function dice() {
  var num = Math.ceil(Math.random() *6);
  var disp = document.getElementById('label');

  disp.innerText = num;
}
