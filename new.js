// function fn (p1, p2) {
//   this.p1 = p1;
//   this.p2 = p2;
//   this.p = 'params'
// }

// fn.prototype.do = function() {
//   console.log('do: ' + this.p1);
// }

// const a = new fn('p1', 'p2')

// console.log(a.do())

// 模拟new的实现
 // 1. 创建的实例可以访问构造函数里的属性
 // 2. 创建的实例可以访问构造函数原型中的属性

function createObject() {
  const obj = new Object()
  const Constructor = Array.prototype.shift.call(arguments)

  obj.__proto__ = Constructor.prototype
  Constructor.apply(obj, arguments)

  return obj
}

function animal(name, color) {
  this.name = name;
  this.color = color;
  this.weight = 15;
}

animal.prototype.do = function() {
  console.log('动物叫：汪汪');
}

const dog = createObject(animal, 'dog', 'black')
console.log(dog, dog.do());