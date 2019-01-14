var count = 0;

function addText(){
  var p = document.createElement('p'),
    text = document.createTextNode(count);
  p.classList.add('box');
  p.addEventListener('click', function(){
    p.classList.toggle('circle');
  });
  document.body.appendChild(p).appendChild(text);
  count++;
  display(count);
}

function delText(){
  var e = document.querySelector('p');
  if (count > 0) {
    document.body.removeChild(e);
    count--;
  }
  display(count);
}
function display(count){
  let dsp = document.getElementById('id_count');
  dsp.innerText = 'HelloWorld：' + count + '個';
}
