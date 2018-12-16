var count = 0;
function submitForm(){
  var blood = test_form.select.value;
  var msg = test_form.textbox.value;
  var li = document.createElement('li');
  li.textContent = blood +":"+ msg;

  document.getElementById('ol').appendChild(li);
  test_form.textbox.value ='';
}
