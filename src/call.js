// 模拟call方法的实现
  // 改变函数的this指向, 接收参数以逗号分隔，并执行函数

const foo = {
  value: 1
}

function bar (name, age) {
  console.log(`name: ${name}, age: ${age}, value: ${this.value}`);
}
// bar.call(foo, '测试', '18')

Function.prototype.call2 = function (context) {
  context = context || window;
  context.fn = this;

  var args = [...arguments].slice(1)

  context.fn(...args)
  // eval(`context.fn(${args})`)

  delete context.fn
}

bar.call2(foo, '测试', '18')