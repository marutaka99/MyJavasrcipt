const storage = sessionStorage;
storage.setItem('fruit1', 'りんご');
storage.fruit2 = 'みかん';
storage['fruit3'] = 'ぶどう';
// console.log(storage.getItem('fruit1'));
// console.log(storage.fruit2);
// console.log(storage['fruit3']);

// storage.removeItem('fruit1');

for (let i = 0, len = storage.length; i < len; i++) {
  let k = storage.key(i);
  let v = storage[k];
  console.log(k + '：' + v);
}

let MyStorage = function(app) {
  this.app = app;
  this.storage = sessionStorage;
  this.data = JSON.parse(this.storage[this.app] || '{}');
};

MyStorage.prototype = {
  getItem: function(key) {
    return this.data[key];
  },
  setItem: function(key, value) {
    this.data[key] = value;
  },
  save: function() {
    this.storage[this.app] = JSON.stringify(this.data);
  }
};

let storage2 = new MyStorage('JSSample');
storage2.setItem('hoge','ほげ');
console.log(storage2.getItem('hoge'));
storage2.save();

console.log('-----------------------------');
function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値： ${value}`);
      } else {
        reject('入力は空です');
      }
    }, 500);
  });
}
console.log('-----------------------------');

asyncProcess('トクジロウ')
  .then(
    response => {
      console.log(response);
      return asyncProcess('ニンサブロウ');
    }
  )
  .then(
    response => {
      console.log(response);
    },
    error => {
      console.log(`エラー： ${error}`);
    }
  );
console.log('-----------------------------');

Promise.all([
  asyncProcess('トクジロウ'),
  asyncProcess('ニンザブロウ'),
  asyncProcess('リンリン')
]).then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`エラー： ${error}`);
  }
);

