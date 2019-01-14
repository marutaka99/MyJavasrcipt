'use strict';

console.log('5' *3);
console.log('5'-3);
console.log(parseInt('5',10)+2);

const score = 85;
score >= 80 ? console.log('great') : console.log('OK');

const name = 'taguchi';

score >= 80 && name !== 'taguchi' ?console.log('taguchi'): console.log('Not taguchi');

for (let i = 1 ; i<=10 ; i++) {
  console.log(`${i} hello`);
}

// let hp = 200;

// while (hp > 0) {
//   console.log(`${hp} HP left`);
//   hp -= 15;
// }

for (let hp =200; hp > 0 ; hp -= 15 ) {
  console.log(`${hp} hp left`);
}

const sum = (a, b, c) => {
  return a + b + c;
};

console.log(sum(10, 20, 30 ));
