document.addEventListener('DOMContentLoaded', function() {
  const timer = window.setInterval(
    function() {
      let dat = new Date();
      document.getElementById('result').textContent = dat.toLocaleTimeString();
    }, 1000);

  document.getElementById('btn').addEventListener('click', function() {
    window.clearInterval(timer);
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('isbn').addEventListener('change', function() {
    location.href = 'http://www.wings.msn.to/index.php/-/A-03/' + this.value;
    //location.replace('http://www.wings.msn.to/index.php/-/A-03/' + this.value);
  }, false);
}, false);

let count = 0;
let result = document.getElementById('result2');

document.getElementById('btn2').addEventListener('click', function() {
  result.textContent = ++count;
  history.pushState(count, null, '/js/chap07/count/' + count);
});

window.addEventListener('popstate', function(e) {
  count = e.state;
  result.textContent = count;
});

const agent = window.navigator.userAgent.toLowerCase();

const chr = (agent.indexOf('chrome') > -1) && (agent.indexOf('edge') === -1)  && (agent.indexOf('opr') === -1);
console.log('Chrome：' + chr);

// console.info('info');
// console.warn('warning');
// console.error('error');

console.log('初めまして、私は %sです。%d 歳です。', '山田太郎', 30);
console.log('今日の気温は、 %.2f 度です。', 22.5);

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    console.count('LOOP');
  }
}

console.log('-----------------------------------');
console.time('Mytimer');
function call1() {
  call2();
}

function call2() {
  call3();
}

function call3() {
  console.trace();
}

call1();
console.timeEnd('Mytimer');

console.log('-----------------------------------');
function circle(radius) {
  console.assert(typeof radius === 'number' && radius > 0,
    '引数radiusは正数でなければいけません。');
  return radius * radius * Math.PI;
}

console.log(circle(-5));
console.log('-----------------------------------');

document.addEventListener('DOMContentLoaded', function() {
  const d = document.getElementById('main');
  console.log(d);
  console.dir(d);
}, false);