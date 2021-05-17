// 模拟bind实现
  // 改变函数this指向, 参数以逗号传递, 并返回一个新函数

const obj = {
  value: 1
}

function fn(name, age) {
  console.log(`name: ${name}, age: ${age}, value: ${this.value}`)
}
// const fn2 = fn.bind(obj, '测试', '18')
// fn2()

Function.prototype.bind2 = function (context) {
  const self = this
  const args = [...arguments].slice(1)
  return function() {
    const bindArgs =  [...arguments].slice()
    self.apply(context, [...args, ...bindArgs])
  }
}

const fn2 = fn.bind(obj, '测试', '18')
fn2()