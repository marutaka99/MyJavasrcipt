
let ary =[ 'javascript', 'Ajax' ,'ASP.NET'];
console.log(delete ary[0]);
console.log(ary);

let data1 = 1;
// console.log(delete data1);
console.log(data1);

// data2 = 10;
// console.log(delete data2);
// console.log(data2);

console.log('==============================');

const num = 1 ;
console.log(typeof num);

const str = 'こんにちは';
console.log(typeof str);

const flag = true;
console.log(typeof flag);

const ary1 = ['Javascript', 'Ajax','ASP.NET'];
console.log(typeof ary1);

const obj = {x:1 , y:2};
console.log(typeof obj);

console.log('==============================');

const x = 30;
if (x >= 10) {
  console.log('変数xは10以上です');
} else if (x >= 20){
  console.log('変数xは20以上です');
} else {
  console.log('変数xは10未満です');
}

const x2 = 30;
if (x2 >= 10) {
  if (x >= 20) {
    console.log('変数xは20以上です');
  } else {
    console.log('変数xは10以上20未満です');
  }
} else {
  console.log('変数xは10未満です');
}

const rank = 'B';
switch (rank) {
case 'A' :
  console.log('Aランクです');
  break;
case 'B' :
  console.log('Bランクです');
  break;
case 'C' :
  console.log('Cランクです');
  break;
default:
  console.log('ランク外です');
  break;
}

console.log('==============================');

let x3 = 8;
while (x3 < 10) {
  console.log('x3の値は'+ x3);
  x3++;
}

let x4 = 10;
do {
  console.log('x4の値は'+ x4);
  x4++;
} while (x4 < 10);

for (let x5 = 8 ; x5 < 10; x5++){
  console.log('x5の値は'+ x5);
}

for (let i = 1 , j = 1; i  < 5 ; i++ ,j++ ){
  console.log('i*j:'+i*j);
}

let data3 = {apple:150 , orange:100 ,banana:120 };
for (let key in data3) {
  console.log(key+'='+data3[key]);
}

let data4 = ['apple' , 'orange' , 'banana'];
Array.prototype.hoge = function(){};
for (let key in data4) {
  console.log(data4[key]);
}

let data5 = ['apple','orange','banana'];
Array.prototype.hoge = function() {};
for (let value of data5 ) {
  console.log(value);
}

let result = 0;
for (let i= 1 ; i <= 100 ; i++) {
  result += i;
  if (result > 1000){
    console.log('合計値が1000を超えるのは'+i);
    break;
  }
}

kuku:
for (let i = 1 ; i  <10 ; i++) {
  for (let j = 1 ; j <10 ;j++) {
    let k = i*j;
    if (k > 30 ){
      break kuku;
    }
    document.write(k+ '&nbsp');
  }
  document.write('<br />');
}

console.log('==============================');
 
let i = 1;

try {
  i= i * j ;
}catch (e) {
  console.log(e.message);
} finally {
  console.log('処理は終了しました。');
}

let x1 = 0;
let y = 0;
try {
  if (y === 0) { throw new Error('０で除算しようとした')};
  let z = x1 /y ;

} catch(e) {
  console.log(e.message);
}