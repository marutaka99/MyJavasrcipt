(function () {
  'use strict';
  const comment = document.getElementById('comment');
  const label = document.getElementById('label');

  let LIMIT = 30;
  let WARNING = 10 ;

  label.innerText = LIMIT;

  comment.addEventListener('keyup', function () {
    let remaining = LIMIT - comment.value.length;
    label.innerText = remaining;

    if (remaining < WARNING) {
      label.classList.add('warning');
    } else {
      label.classList.remove('warning');
    }
  });
})();