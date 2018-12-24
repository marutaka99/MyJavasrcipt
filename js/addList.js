
let count = 0;
function submitForm(){
  let blood = test_form.select.value;
  let msg = test_form.textbox.value;
  let li = document.createElement('li');
  li.textContent = blood +':'+ msg;

  document.getElementById('ol').appendChild(li);
  test_form.textbox.value ='';
}
