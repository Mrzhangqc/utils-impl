// promise实现 
  // Promise是通过构造函数的方式来创建

function promise(executor) {
  var self = this
  self.status = 'pending'
  self.result = null
  self.resolveCallback = null
  self.rejectCallback = null

  setTimeout(() => {
    executor(resolve,reject)
  });

  function resolve(value) {
    if(self.status === 'pending') {
      self.result = value
      self.status = 'fulfilled'
      self.resolveCallback && self.resolveCallback(value)
    }
  }

  function reject(reason) {
    if(self.status === 'pending') {
      self.status = 'rejected'
      self.result = reason
      self.rejectCallback && self.rejectCallback(reason)
    }
  }
}

promise.prototype.then = function (onFulfilled, onRejected) {
  this.resolveCallback = onFulfilled
  this.rejectCallback = onRejected
}

new promise(function(res, rej){
  res('测试')
}).then((res) => {
  console.log(res, '---');
},(rej) => {
  console.log(rej, '---');
})


