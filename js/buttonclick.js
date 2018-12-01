function onButtonClick(){
  target = document.getElementById("output");

  var name=  document.forms.id_form1.id_textbox1.value;

  target.innerText = "入力した名前："+name;
}
