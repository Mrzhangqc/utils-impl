// 模拟apply的实现
  // 改变函数this的指向，参数以数组方式传递, 并执行函数

const obj = {
  value:  1
}
function fn(name, age) {
  console.log(`name: ${name}, age: ${age}, value: ${this.value}`);
}
// fn.call(obj, ['测试', '18'])


Function.prototype.apply2 = function (context) {
  context = context || window
  context.fn = this
  var args = [...arguments].slice(1)[0]
  context.fn(...args)
  delete context.fn
}

fn.apply2(obj, ['测试', '18'])