// 实现继承的几种方式

  // 原型链继承: 子类的原型等于父类的实例
   function Person() {
    this.weight = 90
   }
   Person.prototype.getWeight = function () {
     return this.weight
   }
   function Child(name) {
    this.name = name
   }
   Child.prototype = new Person()
   var child = new Child('张三')
   console.log('child weight:',child.getWeight());
   console.log('-------------------------');

   // 经典继承: 构造函数继承, 在子类调用父类构造函数, 改变父类this指向。
   // 缺点：不可继承原型生上的方法
  function Animal() {
    this.weight = 15
    this.color = ['white']
  }
  function AnimalChild(name) {
    Animal.call(this)
    this.name = name
  }
  var animalChild = new AnimalChild('小狗')
  animalChild.color.push('black')
  console.log(animalChild);
  console.log('-------------------------');

  // 组合继承：（原型链和构造函数组合）
    // 使用原型链实现对原型属性和方法的继承，
    // 而通过借用构造函数来实现对实例属性的继承
  function Parent() {
    this.weight = 60
  }
  Parent.prototype.getWeight = function () {
    return this.weight
  }
  function Child_N(name, age) {
    Parent.apply(this, arguments)
    this.name = name
    this.age = age
  }
  Child_N.prototype = new Parent()
  Child_N.prototype.constructor = Child_N
  var childN_1 = new Child_N('测试', 18)
  var childN_2 = new Child_N('测试2', 19)
  console.log('child_n_1:', childN_1);
  console.log('child_n_2:', childN_2);
  console.log('-------------------------');
