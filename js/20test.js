document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    const name = document.getElementById('name');
    console.log(name.value);
    //name.value = '鈴木与作';
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn2').addEventListener('click', function() {
    let result = [];
    let foods = document.getElementsByName('food');

    for(let i = 0, len = foods.length; i < len; i++) {
      let food = foods.item(i);
      if (food.checked) {
        result.push(food.value);
      }
    }
    console.log(result.toString());
  }, false);
}, false);


let onoff = document.getElementById('onoff');
onoff.addEventListener('click' , function(){
  if (onoff.checked) {
    console.log(onoff.value);
  } else {
    console.log('not checked');
  }
},false);

document.addEventListener('DOMContentLoaded', function() {
  const getRadioValue = function(name) {
    let result = '';
    const elems = document.getElementsByName(name);

    for(let i = 0, len = elems.length; i < len; i++) {
      let elem = elems.item(i);
      if (elem.checked) {
        result = elem.value;
        break;
      }
    }
    return result;
  };
  
  document.getElementById('btn3').addEventListener('click', function() {
    console.log(getRadioValue('food2'));
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  const getSelectValue = function(name) {
    let result = [];
    const opts = document.getElementById(name).options;

    for(let i = 0, len = opts.length; i < len; i++) {
      let opt = opts.item(i);
      if (opt.selected) {
        result.push(opt.value);
      }
    }
    return result;
  };
  
  document.getElementById('btn4').addEventListener('click', function() {
    console.log(getSelectValue('food3'));
  }, false);
}, false);

window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('file').addEventListener('change', function(e) {
    const inputs = document.getElementById('file').files;
    for (let i = 0, len = inputs.length; i < len; i++) {
      let input = inputs[i];
      console.log('ファイル名：' + input.name);
      console.log('種類：' + input.type);
      console.log('サイズ：' + input.size / 1024 + 'KB');
      console.log('最終更新日：' + input.lastModifiedDate);
    }
  }, true);
});

window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('file2').addEventListener('change', function(e) {
    let input = document.getElementById('file2').files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function() {
      document.getElementById('result').textContent = reader.result;
    }, true);
    reader.addEventListener('error', function() {
      console.log(reader.error.message);
    }, true);
    reader.readAsText(input, 'SJIS');
    // reader.abort();
  }, true);
});

window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('file3').addEventListener('change', function(e) {
    var input = document.getElementById('file3').files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function(e) {
      document.getElementById('result2').src = reader.result;
    }, true);
    reader.readAsDataURL(input); 
  }, true);
});
