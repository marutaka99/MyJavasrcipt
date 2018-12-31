// 'use strict';
let getTriangle = function(base, height) {
  return base * height / 2;
};

console.log('三角形の面積：' + getTriangle(5, 2));

let getTriangle2 = (base , height) => {
  return base * height / 2;
};


console.log('----------------------------------------');

var scope = 'Global Variable';
function getValue() {
  console.log(scope);
  var scope = 'Local Variable';
  return scope;
}

console.log(getValue());
console.log(scope);

console.log('----------------------------------------');
let value = [1, 2, 4, 8, 16];
function deleteElement(value) {
  value.pop();
  return value;
}

console.log(deleteElement(value));
console.log(value);

(function() {
  let i = 5;
  console.log(i);
}).call(this);

// console.log(i);

console.log('----------------------------------------');
function showMessage(value) {
  if (arguments.length !== 1) {
    throw new Error('引数の数が間違っています：' + arguments.length);
  }
  console.log(value);
}

try {
  showMessage(' 山田');
} catch(e) {
  alert(e.message);
}

console.log('----------------------------------------');
function sum() {
  let result = 0;
  for (let i = 0, len = arguments.length; i < len; i++) {
    let tmp = arguments[i];
    if (typeof tmp !== 'number') {
      throw new Error('引数が数値ではありません：' + tmp);
    }
    result += tmp;
  }
  return result;
}

try {
  console.log(sum(1, 3, 5, 7, 9));
} catch(e) {
  alert(e.message);
}

console.log('----------------------------------------');
function printf(format) {
  for (let i = 0, len = arguments.length; i < len; i++) {
    let pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
    format = format.replace(pattern, arguments[i]);
  }
  console.log(format);
}

printf('こんにちは、{0}さん。私は{1}です。', '掛谷', '山田');

console.log('----------------------------------------');

function getTriangle3(args) {
  if (args.base === undefined) { args.base = 1; }
  if (args.height === undefined) { args.height = 1; }
  return args.base * args.height / 2;
}

console.log(getTriangle3({ base:5, height:4 }));

console.log('----------------------------------------');
// function multi(a = b, b = 5) {
//   return a * b; 
// }

// console.log(multi());
console.log('----------------------------------------');

function getTriangle4(base = 1, height) {
  console.log(height);
  return base * height / 2;
}

console.log(getTriangle4(10));
console.log('----------------------------------------');
function sum2(...nums) {
  let result = 0;
  for (let num of nums) {
    if (typeof num !== 'number') {
      throw new Error('指定値が数値ではありません：' + num);
    }
    result += num;
  }
  return result;
}

try {
  console.log(sum2(1, 3, 5, 7, 9));
} catch(e) {
  window.alert(e.message);
}

console.log('----------------------------------------');

function getMaxMin(...nums) {
  return [Math.max(...nums), Math.min(...nums)];
}

let result = getMaxMin(10, 35, -5, 78, 0);
console.log(result);

let [max, min] = getMaxMin(10, 35, -5, 78, 0);
//let [,min] = getMaxMin(10, 35, -5, 78, 0);
console.log(max);
console.log(min);

console.log('----------------------------------------');
function factorial(n) {
  if (n != 0) { return n * factorial(n - 1); }
  return 1;
}

console.log(factorial(5));
console.log('----------------------------------------');
function arrayWalk(data, f) {
  for (var key in data) {
    f(data[key], key);
  }
}

let result2= 0;
function sumElement(value, key) {
  result2 += value;
}

let ary = [1, 2, 4, 8, 16];
arrayWalk(ary, sumElement);
console.log('合計値：' + result2);
console.log('----------------------------------------');

function arrayWalk2(data, f) {
  for (var key in data) {
    f(data[key], key);
  }
}

var ary2 = [1, 2, 4, 8, 16];
arrayWalk2(
  ary2,
  function (value, key) {
    console.log(key + '：' + value);
  }
);

