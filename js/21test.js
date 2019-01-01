document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    const name = document.getElementById('name');
    const url = document.getElementById('url');

    const anchor = document.createElement('a');
    anchor.href= url.value;
    const text = document.createTextNode(name.value);
    anchor.appendChild(text);
    const br = document.createElement('br');
    const list = document.getElementById('list');
    list.appendChild(anchor);
    // list.insertBefore(anchor, null);
    list.appendChild(br);
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var books = [
    { title: '独習PHP 第3版', price: 3200 },
    { title: 'Javaポケットリファレンス', price: 2680 },
    { title: 'アプリを作ろう！Android入門', price: 2000 }
  ];

  var frag = document.createDocumentFragment();

  for(var i = 0, len = books.length; i < len; i++) {
    var b = books[i];
    var li = document.createElement('li');
    var text = document.createTextNode(b.title + '：'+ b.price + '円');
    li.appendChild(text);
    frag.appendChild(li);
  }

  document.getElementById('list2').appendChild(frag);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  const list = document.getElementById('list3');
  const pic = document.getElementById('pic');
  const del = document.getElementById('del');

  list.addEventListener('click', function(e) {
    const isbn = e.target.getAttribute('data-isbn');

    if (isbn) {
      const img = document.createElement('img');
      img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
      img.alt = e.target.textContent;
      img.height = 150;
      img.width = 108;
      if(pic.getElementsByTagName('img').length > 0){
        pic.replaceChild(img, pic.lastChild);
      } else {
        del.disabled = false;
        pic.appendChild(img);
      }
    }
  }, false);

  del.addEventListener('click', function() {
    pic.removeChild(pic.lastChild);
    del.disabled = true;
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var li = document.getElementsByTagName('li');
  console.log('変更前：' + li.length);

  var ul = document.getElementById('list4');
  ul.appendChild(document.createElement('li'));
  console.log('変更後：' + li.length);
}, false);

document.addEventListener('DOMContentLoaded',function(){
  let elem = document.getElementById('elem');

  elem.addEventListener('mouseover', function(){
    this.className ='highlight';
  },false);

  elem.addEventListener('mouseout', function(){
    this.className = '';
  },false);
},false);

document.addEventListener('DOMContentLoaded', function() {
  let elem = document.getElementById('elem2');

  elem.addEventListener('click', function() {
    let classes = this.className.split(' ');
    let index = classes.indexOf('highlight');
    if(index === -1) {
      classes.push('highlight');
    } else {
      classes.splice(index, 1);
    }
    this.className = classes.join(' ');
  }, false);
}, false);

document.addEventListener('DOMContentLoaded',function(){
  let btn = document.getElementById('btn2');
  let listener = function(){
    console.log('Hello world');
  };

  btn.addEventListener('click',listener,false);

  btn.removeEventListener('click', listener , false);
},false);

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn3').addEventListener('click', function(e) {
    const target = e.target;
    console.log('発生元：' + target.nodeName + '/' + target.id);
    console.log('種類：' + e.type);
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var main = document.getElementById('main');
  main.addEventListener('mousemove', function(e) {
    main.innerHTML = 'screen' + e.screenX + '/' + e.screenY + '<br />'
      + 'page' + e.pageX + '/' + e.pageY + '<br />'
      + 'client' + e.clientX + '/' + e.clientY + '<br />'
      + 'offset' + e.offsetX + '/' + e.offsetY + '<br />';
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inner').addEventListener('click', function(e) {
    window.alert('#innerリスナーが発生しました。');
    e.preventDefault();
  }, false);

  document.getElementById('inner').addEventListener('click', function(e) {
    window.alert('#innerリスナー2が発生しました。');
  }, false);

  document.getElementById('outer').addEventListener('click', function(e) {
    window.alert('#outerリスナーが発生しました。');
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  const data = {
    title: 'Javaポケットリファレンス',
    price: 2680,
    show: function() {
      console.log(this.title + '／' + this.price + '円');
    }
  };

  // document.getElementById('btn').addEventListener(
  //   'click', data.show, false);

  document.getElementById('btn4').addEventListener(
    'click', data.show.bind(data), false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  let Counter = function(elem) {
    this.count = 0;
    this.elem = elem;
    // elem.addEventListener('click', function() {
    //   this.count++;
    //   this.show();
    // }, false);

    elem.addEventListener('click', () => {
      this.count++;
      this.show();
    }, false);
    
  };

  Counter.prototype.show = function() {
    console.log(this.elem.id + 'は' + this.count + '回クリックされました。');
  }

  var c = new Counter(document.getElementById('btn5'));
}, false);
