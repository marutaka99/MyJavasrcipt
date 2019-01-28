'use strict';


const h1 = document.querySelector('h1');
console.log(h1.title);

h1.style.backgroundColor = 'pink';

console.log(h1.dataset.appId);

h1.dataset.message = 'this is custom message';


console.log('--------------------------');

document.querySelectorAll('li:nth-child(odd)').forEach(li => {
  li.textContent ='li';
});



const ul = document.querySelector('ul');
console.log(ul.parentNode);
console.log(ul.children);
console.log(ul.children[0]);

for (let i = 0; i < ul.children.length ; i++) {
  console.log(ul.children[i].textContent);
}

console.log('--------------------------');

const div = document.querySelector('div');
// if (div.classList.contains('border-pink')) {
//   div.classList.remove('border-pink');
// } else {
//   div.classList.add('border-pink');
// }

div.classList.toggle('border-pink');

console.log('--------------------------');

const h12 = document.createElement('h1');
h12.textContent ='title2';
document.body.appendChild(h12);

const p = document.createElement('p');
p.textContent ='hello, hello, hello,';
document.body.appendChild(p);

const h2 = document.createElement('h2');
h2.textContent ='subtitle';
document.body.insertBefore(h2,p);

const copy = p.cloneNode(true);
document.body.insertBefore(copy , p);

document.body.removeChild(h2);

console.log('--------------------------');
const text = document.querySelector('input[type="text"]');
const textarea = document.querySelector('textarea');

console.log(text.value);
console.log(textarea.value);

// text.focus();
// text.select();
text.disabled = true;

console.log('--------------------------');
console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked);
console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked);

console.log(document.querySelectorAll('input[type="radio"]')[0].checked);
console.log(document.querySelectorAll('input[type="radio"]')[1].checked);

console.log(document.querySelectorAll('select > option')[0].selected);
console.log(document.querySelectorAll('select > option')[1].selected);
console.log(document.querySelectorAll('select > option')[2].selected);
console.log('--------------------------');

const button = document.querySelector('button');

button.addEventListener('dblclick' , () => {
  console.log('clicked');
});

document.addEventListener('mousemove' , e => {
  div.textContent =`${e.clientX}:${e.clientY}`;
});

const a = document.querySelector('a');
const span = document.querySelector('span');

a.addEventListener('click', e => {
  e.preventDefault();
  a.classList.add('hidden');
  span.classList.remove('hidden');
});