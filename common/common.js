require('a.js')
console.log("我是common.js")
// 传入参数name
function sayHello(name){
  console.log("触发common.js")
  console.log("hello " + name + "!")
}

module.exports = {
  sayHello: sayHello
}