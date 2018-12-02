var count = 0;

function addText(){
  var p = document.createElement('p'),
      text = document.createTextNode('hello world');
  document.body.appendChild(p).appendChild(text);
  count++;
  display(count);
}

function delText(){
  var e = document.querySelector('p');
  document.body.removeChild(e);
  count--;
  display(count);
}
function display(count){
  dsp = document.getElementById("id_count");
  dsp.innerText = "HelloWorld：" + count + "個";
}
