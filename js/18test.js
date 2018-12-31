const Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function() {
    return this.lastName + ' ' + this.firstName;
  };
};
  
const mem = new Member('祥寛', '山田');
console.log(mem.getName());

console.log('----------------------------------');

const Member1 = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};
  
const mem1 = new Member1('祥寛', '山田');
mem1.getName = function() {
  return this.lastName + ' ' + this.firstName;
};
  
console.log(mem.getName());
  
// let mem2 = new Member1('奈美', '掛谷');
// console.log(mem2.getName());
console.log('----------------------------------');

const data = 'Global data';
const obj1 = { data: 'obj1 data' };
const obj2 = { data: 'obj2 data' };

function hoge() {
  console.log(this.data);
}

hoge.call(null);
hoge.call(obj1);
hoge.call(obj2);

console.log('----------------------------------');
function hoge1() {
  const args = Array.prototype.slice.call(arguments);
  console.log(args.join('／'));
}
  
hoge1('Angular', 'React', 'Backbone');
console.log('----------------------------------');
const Member3 = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};
  
Member3.prototype.getName = function() {
  return this.lastName + ' ' + this.firstName;
};

const mem3 = new Member('祥寛', '山田');
console.log(mem3.getName());
console.log('----------------------------------');

const Member4= function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

const mem4 = new Member4('祥寛', '山田');

Member4.prototype.getName = function() {
  return this.lastName + ' ' + this.firstName;
};

console.log(mem4.getName());

console.log('----------------------------------');
const Member5 = function() { };

Member5.prototype.sex = '男';
const mem11 = new Member5();
const mem12 = new Member5();

console.log(mem11.sex + '|' + mem12.sex);
mem12.sex = '女';
console.log(mem11.sex + '|' + mem12.sex);
console.log('----------------------------------');

const Member6 = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};
  
Member6.prototype = {
  getName : function() {
    return this.lastName + ' ' + this.firstName;
  },
  toString : function() {
    return this.lastName + this.firstName;
  }
};
  
const mem6 = new Member6('祥寛', '山田');
console.log(mem6.getName());
console.log(mem6.toString());
  
console.log('----------------------------------');

const Area = function() {};

Area.version = '1.0';

Area.triangle = function(base, height) {
  return base * height / 2;
};

Area.diamond = function(width, height) {
  return width * height / 2;
};

console.log('Areaクラスのバージョン：' + Area.version);
console.log('三角形の面積：' + Area.triangle(5, 3));

// let a = new Area();
// console.log('菱形の面積：' + a.diamond(10, 2));

console.log('----------------------------------');
const Animal = function() {};

Animal.prototype = {
  walk : function() {
    console.log('トコトコ...');
  }
};

const Dog = function() {
  Animal.call(this);
};
Dog.prototype = new Animal();
Dog.prototype.bark = function() {
  console.log('ワンワン！ ');
};

const d = new Dog();
d.walk();
d.bark();

console.log('----------------------------------');

const Animal2 = function() {};
const Hamster = function() {};
Hamster.prototype = new Animal();

const a = new Animal();
const h = new Hamster();
console.log(a.constructor === Animal2);
console.log(h.constructor === Animal2);
console.log(h.constructor === Hamster);

console.log(h instanceof Animal2);
console.log(h instanceof Hamster);

console.log(Hamster.prototype.isPrototypeOf(h));
console.log(Animal2.prototype.isPrototypeOf(h));

console.log('----------------------------------');

function Triangle() {
  let _base;
  let _height;
  let _checkArgs = function(val) {
    return (typeof val === 'number' && val > 0);
  };
  
  this.setBase = function(base) {
    if (_checkArgs(base)){ _base = base; }
  };
  this.getBase = function() { return _base; };
  
  
  this.setHeight = function(height) {
    if (_checkArgs(height)){ _height = height; }
  };
  this.getHeight = function() { return _height; };
}

Triangle.prototype.getArea = function() {
  return this.getBase() * this.getHeight() / 2;
};
  
const t = new Triangle();
t._base = 10;
t._height = 2;
console.log('三角形の面積：' + t.getArea());

t.setBase(10);
t.setHeight(2);
console.log('三角形の底辺：' + t.getBase());
console.log('三角形の高さ：' + t.getHeight());
console.log('三角形の面積：' + t.getArea());

console.log('----------------------------------');
function Triangle2() {
  let _base;
  let _height;
    
  Object.defineProperty(
    this,
    'base',
    {
      get: function() {
        return _base;
      },
      set: function(base) {
        if(typeof base === 'number' && base > 0) {
          _base = base;
        }
      }
    }
  );
    
  Object.defineProperty(
    this,
    'height',
    {
      get: function() {
        return _height;
      },
      set: function(height) {
        if(typeof height === 'number' && height > 0) {
          _height = height;
        }
      }
    }
  );
}
  
Triangle2.prototype.getArea = function() {
  return this.base * this.height / 2;
};
  
let t2 = new Triangle2();
t2.base = 10;
t2.height = 2;
console.log('三角形の底辺：' + t2.base);
console.log('三角形の高さ：' + t2.height);
console.log('三角形の面積：' + t2.getArea());

console.log('----------------------------------');

var Wings = Wings || {};

Wings.Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

Wings.Member.prototype = {
  getName : function() {
    return this.lastName + ' ' + this.firstName;
  }
};

let mem7 = new Wings.Member('祥寛', '山田');
console.log(mem7.getName());

console.log('----------------------------------');
class Member7 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getName() {
    return this.lastName + this.firstName;
  }
}
  
let m = new Member7('太郎', '山田');
console.log(m.getName());

console.log('----------------------------------');
class Member8 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  get firstName() {
    return this._firstName;
  }
  
  set firstName(value) {
    this._firstName = value;
  }
  
  get lastName() {
    return this._lastName;
  }
  
  set lastName(value) {
    this._lastName = value;
  }
  
  getName() {
    return this.lastName + this.firstName;
  }
}
  
let m4 = new Member8('太郎', '山田');
console.log(m4.getName());

console.log('----------------------------------');

class Member9 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getName() {
    return this.lastName + this.firstName;
  }
}
  
class BusinessMember extends Member9 {
  work() {
    return this.getName() + 'は働いています。';
  }
}
  
let bm = new BusinessMember('太郎', '山田');
console.log(bm.getName());
console.log(bm.work());
console.log('----------------------------------');

class Member10 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getName() {
    return this.lastName + this.firstName;
  }
}
  
class BusinessMember2 extends Member10 {
  constructor(firstName, lastName, clazz) {
    super(firstName, lastName);
    this.clazz = clazz;
  }
  
  getName() {
    return super.getName() + '／役職：' + this.clazz;
  }
}
  
let bm2 = new BusinessMember2('太郎', '山田', '課長');
console.log(bm2.getName());

console.log('----------------------------------');

let member = {
  name: '山田太郎',
  birth: new Date(1970, 5, 25),
  toString() {
    return this.name + '／誕生日：' + this.birth.toLocaleDateString(); 
  }
};
  
console.log(member.toString());

console.log('----------------------------------');

let name = '山田太郎';
let birth = new Date(1970, 5, 25);
let member10 = { name, birth };

console.log(member10);

console.log('----------------------------------');

let data_ary = ['one', 'two', 'three'];
let data_str = 'あいうえお';
let data_map = new Map([['MON', '月曜'], ['TUE', '火曜'], ['WED', '水曜']]);

for(let d of data_ary) {
  console.log(d);
}

for(let d of data_str) {
  console.log(d);
}

for(let [key, value] of data_map) {
  console.log(`${key}：${value}`);
}

console.log('----------------------------------');
class MyIterator {
  constructor(data) {
    this.data = data;
  }
  
  [Symbol.iterator](){
    let current = 0;
    let that = this;
    return {
      next() {
        return current < that.data.length ?
          {value: that.data[current++], done: false} :
          {done: true};
      }
    };
  }
}
  
let itr = new MyIterator(['one', 'two', 'three']);
for(let value of itr) {
  console.log(value);
}

console.log('----------------------------------');
function* genPrimes() {
  let num = 2;
  while (true) {
    if (isPrime(num)) { yield num; }
    num++;
  }
}
  
function isPrime(value) {
  let prime = true;
  for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
  
for(let value of genPrimes()) {
  if (value > 100) { break; }
  console.log(value);
}
  
  