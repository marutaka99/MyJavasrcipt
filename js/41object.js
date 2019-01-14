'use strict';
const player = {
  name:'taguchi',
  score: 32,
};

console.log(player);

console.log(player.name);
console.log(player['name']);

player.score = 100;
player.email = 'taguchi@gmail.com';

delete player.score;

console.log(player);

console.log('-------------------------------------');

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  showinfo() {
    console.log(`name:${this.name} score:${this.score}`);
  }

  static showVersion() {
    console.log('Player class ver. 1.0');
  }
}

const taguchi = new Player('taguchi', 32);

const fkoji = new Player('fkoji',44);

taguchi.showinfo();
fkoji.showinfo();

Player.showVersion();

console.log('-------------------------------------');

class SoccerPlayer extends Player {
  constructor(name, score, number) {
    super(name , score);
    this.number = number;
  }

  kick () {
    console.log('Goal!');
  }
}

const tsubasa = new SoccerPlayer('tsubasa', 100 , 10 );
tsubasa.showinfo();
tsubasa.kick();

console.log('-------------------------------------');

let x = [1, 2] ;
let y = x;
x[0] = 5;
console.log(x);
console.log(y);

console.log('-------------------------------------');
const a = [1 ,5, 10];
// add
a.unshift(100);
a.push(200,300);
console.log(a);
a.shift();
a.pop();
console.log(a);
console.log('-------------------------------------');

const b = [1 ,5, 10];
const deleted = b.splice(1, 3 , 5, 6, 7 );
console.log(b);
console.log(deleted);

console.log('-------------------------------------');

const c = [1, 5, 10];
c.forEach( (it, idx, ary) => {
  console.log(`${idx} : ${it}: ${ary}`);
});

console.log('-------------------------------------');
const d = [1, 2, 5, 10];

const e = d.map(item => {
  return item * 2;
});

console.log(e);

const f = d.filter(item => {
  return item % 2 === 0;
} );

console.log(f);
console.log('-------------------------------------');
const o = {
  a: 1,
  b: 2,
};

console.log(Object.keys(o));
console.log(Object.values(o));

Object.keys(o).forEach(key =>{
  console.log(`${key}: ${o[key]}`);
});

console.log('-------------------------------------');

const a1 = [10, 20];
const b1 = [1, 2, ...a1];
console.log(b1);

const a2 = [10, 20];
const sum = (a , b) => a +b;
console.log(sum(...a2));

const o1 = {a: 1};
const o2 = {...o1, b: 2};
console.log(o2);

console.log('-------------------------------------');
const numbers = [1, 2 ,3, 8];
const [a3, b3 , ...rest] = numbers;
console.log(a3);
console.log(b3);
console.log(rest);

const player2 = {
  name: 'taguchi',
  score: 55,
  hp: 33,
  mp: 22,
};
const {name , score , ...points} = player2;
console.log(name);
console.log(score);
console.log(points);

console.log('-------------------------------------');

const str = 'hello';
console.log(str.substring(1,3));
console.log(str[1]);

console.log('-------------------------------------');
console.log(Math.PI);
console.log(Math.random());
const dice = Math.floor(Math.random() * 6 + 1);
console.log(dice);

console.log('-------------------------------------');
const day = new Date();
console.log(day.getFullYear());
console.log(day.getSeconds());
console.log(day.getTime());
day.setHours(10, 20 , 30);
console.log(day.getDate());
console.log(day.getDate() +3 );

const d1 = new Date(2018, 11, 1);
const d2 = new Date(2018, 11, 10);
console.log((d2 - d1) / (24 * 60 * 60 * 1000));

console.log('-------------------------------------');
let i = 0;
const showTime = () => {
  console.log(new Date());
  i++;
  if (i > 2 ) {
    clearInterval(timerId);
  }
};

let timerId = setInterval(showTime,1000);
console.log('-------------------------------------');

let i2 = 0;
const showTime2 = () => {
  console.log(new Date());
  let timerId = setTimeout(showTime2, 1000);
  i2 ++;
  if (i > 2 ) {
    clearInterval(timerId);
  }
};

showTime2();

console.log('-------------------------------------');
const a5 = 5;
try {
  console.log(a5.toUpperCase());

} catch (e) {
  console.log(e.message);
}
