

window.addEventListener("keydown" , function(){
  var key = event.keyCode;//String.fromCharCode(event.keyCode);
  console.log(key);
  //if (key===48 || key === 96) {

    switch (key) {
      //0
      case 48 :
      case 96 :
        calc(0);
        break;
      // 1
      case 49 :
      case 97 :
        calc(1);
      break;
      // 2
      case 50 :
      case 98 :
        calc(2);
        break;
      // 3
      case 51 :
      case 99 :
        calc(3);
        break;
      // 4
      case 52 :
      case 100 :
        calc(4);
        break;
      // 5
      case 53 :
      case 101 :
        calc(5);
        break;
      // 6
      case 54 :
      case 102 :
        calc(6);
        break;
      // 7
      case 55 :
      case 103 :
        calc(7);
        break;
      // 8
      case 56 :
      case 104 :
        calc(8);
        break;
      // 9
      case 57 :
      case 105 :
        calc(9);
        break;
      //  +
      case 187 :
      case 107 :
        calc('+');
        break;
      // -
      case 187 :
      case 109 :
        calc('-');
        break;
      // *
      case 186 :
      case 106 :
        calc('*');
        break;
      // /
      case 111 :
      case 191 :
        calc('/');
        break;
      // =
      case 13 :
      case 189 :
        calc('=');
        break;
      // case :

        break;
      case 67 :
      case 46 :
      case 8 :
        calc('C');
        break;

      default:
    }

});

function calc(cmd){
  var calcValue = document.formCalc.calcDisplay;
  if(cmd ==="="){
    calcValue.value= eval(calcValue.value);
  } else if (cmd ==="C"){
    calcValue.value ="";
  } else{
    calcValue.value += cmd;
  }
  // console.log(calcValue.value);
}
