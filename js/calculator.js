function calc(cmd){
  if(cmd ==="="){
    document.formCalc.calcDisplay.value= eval(document.formCalc.calcDisplay.value);
  } else if (cmd ==="C"){
    document.formCalc.calcDisplay.value ="";
  } else{
    document.formCalc.calcDisplay.value += cmd;
  }
}
