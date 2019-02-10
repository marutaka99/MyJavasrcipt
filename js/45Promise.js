// const div1 = document.querySelector('.div1');
// const div2 = document.querySelector('.div2');
const divAll = document.querySelectorAll('[data-button]');
console.log(divAll);

const [div1a , div2a ,div3a] = divAll; 

console.log(div3a);

const log1 =  () => {
  const value = 1;
  return value;
};

const log2 =  () => {
  const value = 2;
  return value;
};


const click1 = div1a.addEventListener('click' , () => {
  console.log(log1());
});

const click2 = div2a.addEventListener('click' , () => {
  console.log(log2());
});


div3a.addEventListener('click', () => {
  Promise.all([log1(), log2()]).then( value => {
    const [val1 , val2] = value;
    console.log(val1, val2);
  });
});
