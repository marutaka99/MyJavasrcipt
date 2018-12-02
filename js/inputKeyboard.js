document.onkeypress = keydown;

function keydown() {
  target = document.getElementById("message1");
  target.innerText = "キーが押されました KeyCode :" + event.keyCode;

  target = document.getElementById("message2");
  target.innerText = String.fromCharCode(event.keyCode);
}
