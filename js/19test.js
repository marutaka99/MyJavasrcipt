const current = new Date();
const result = document.getElementById('result');
result.textContent = current.toLocaleString();

const list = document.getElementsByTagName('a');
for (let i = 0 , len = list.length; i < len ; i++) {
  console.log(list.item(i).href);
}

const current2 = new Date();
const nam = document.getElementsByName('time');
nam[0].value = current2.toLocaleTimeString();

const list2 = document.getElementsByClassName('my');
for (let i = 0 , len = list2.length; i< len ; i++) {
  console.log(list2.item(i).href);
}

const list3 = document.querySelectorAll('#list .external');
for (let i = 0 , len = list3.length; i< len ; i++) {
  console.log(list3.item(i).href);
}

const s = document.getElementById('food');
const opts = s.childNodes;
for (let i = 0, len = opts.length; i < len ; i++) {
  const opt = opts.item(i);
  if (opt.nodeType === 1) {
    console.log(opt.value);
  }
}

console.log('------------------------------------');

let child = s.firstChild;
while (child) {
  if (child.nodeType === 1) {
    console.log(child.value);
  }
  child = child.nextSibling;
}

document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('btn').addEventListener('click',function(){
    alert('btn clicked');
  },false);
},false);

const span = document.getElementById('span');
const attr = span.getAttribute('aria-hidden');
console.log('aria-hidden',attr);

document.addEventListener('DOMContentLoaded',function(){
  const logo = document.getElementById('logo');
  const attrs = logo.attributes;
  for (let i = 0 , len = attrs.length; i < len ; i++) {
    let attr = attrs.item(i);
    console.log(attr.name +':'+ attr.value);
  }
},false);

document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('result_text').textContent = 
    '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
  document.getElementById('result_html').innerHTML = 
    '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
},false);