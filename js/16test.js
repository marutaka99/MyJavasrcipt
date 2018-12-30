'use strict';
const flag = new Boolean(false);
if (flag ) {
  console.log('flag is true');
}

const str2 = 'Wingsプロジェクト';
console.log(str2.slice(5,8));
console.log(str2.slice(8,5));
console.log(str2.slice(5,-2));

console.log(Number.NaN === Number.NaN);

console.log(Number.MAX_SAFE_INTEGER);

const num2 = 123.45678;
console.log(num2.toFixed(3));
console.log(num2.toFixed(7));
console.log(num2.toPrecision(10));
console.log(num2.toPrecision(6));

const n = '123xxx';
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));

console.log('-------------------------------------------');

const MONDAY = Symbol();
console.log(MONDAY);

console.log('-------------------------------------------');
const data =[1,2,3,4];
data.forEach(function(value, index , array){
  console.log(value*value);
});
const result = data.map(function(value, index, array){
  return value *value;
});

console.log(result);

const data2 = [4,9,16,25];
const result2 = data2.filter(function(value, index, filter){
  return value %2 ===1;
});
console.log(result2);

const classes = ['部長','課長','主任','担当'];
const members = [
  {name: 'test1' ,clazz: '主任'},
  {name: 'test2' ,clazz: '部長'},
  {name: 'test3' ,clazz: '担当'},
  {name: 'test4' ,clazz: '課長'},
  {name: 'test5' ,clazz: '担当'}
];

console.log(members.sort(function(x,y){
  return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
}));

console.log('-------------------------------------------');

let m = new Map();
m.set('dog','wanwan');
m.set('cat','nyan');
m.set('mouse','chu');

console.log(m.get('dog'));

for (let key of m.keys()){
  console.log(key);
}

for (let [key, value] of m){
  console.log(key,value);
}
console.log('-------------------------------------------');

let s = new Set();
s.add(10);
s.add(5);
s.add(100);
s.add(50);

for (let val of s.values()){
  console.log(val);
}

console.log('-------------------------------------------');
let dat = new Date(2017, 4 ,15 ,11 ,40);
console.log(dat.toLocaleString());
dat.setMonth(dat.getMonth()+3);
console.log(dat.toLocaleString());
dat.setDate(dat.getDate() -20);
console.log(dat.toLocaleString());

console.log('-------------------------------------------');
let p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/gi;
let str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';
let result3 = str.match(p);
for (let i = 0 , len = result3.length ; i < len ; i++){
  console.log(result3[i]);
}

let p2 = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/gi;
let str10 = 'サポートサイトはhttp://www.wings.msn.to/です。';
let str20 = 'サポートサイト「サーバサイド技術の学び舎」をよろしく！';
console.log(p2.test(str10));
console.log(p2.test(str20));

let p3 = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?)/gi;
let str4 = 'サポートサイトはhttp://www.wings.msn.to/です。';
document.write(str4.replace(p3, '<a href="$1">$1</a>'));

console.log('-------------------------------------------');

let obj = new Object();
console.log(obj.toString());
console.log(obj.valueOf());

let ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
console.log(ary.toString());
console.log(ary.valueOf());

let num = 10;
console.log(num.toString());
console.log(num.valueOf());

console.log('-------------------------------------------');

let pet = {
  type: 'スノーホワイトハムスター',
  name: 'キラ',
  description: {
    birth: '2014-02-15'
  }
};

let pet2 = {
  name: '山田きら',
  color: '白',
  description: {
    food: 'ひまわりのタネ'
  }
};

let pet3 = {
  weight: 42,
  photo: 'http://www.wings.msn.to/img/ham.jpg'
};

Object.assign(pet, pet2, pet3);
console.log(pet);

console.log('-------------------------------------------');

var str5 = '!"#$%&()+-*/@~_|;:,.';
console.log(encodeURI(str5));
console.log(encodeURIComponent(str5));
console.log(decodeURIComponent(encodeURIComponent(str5)));