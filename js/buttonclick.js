function onButtonClick(){
  const target = document.getElementById('output');

  let name=  document.forms.id_form1.id_textbox1.value;

  target.innerText = '入力した名前：'+name;
}
