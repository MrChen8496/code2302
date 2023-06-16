// func.ts   测试ts的函数
// 普通函数
function add (x:number, y:number):number{
  return x + y
}
let r = add(10, 20)
console.log(r)

// 匿名函数
let add2 = function (x:number, y:number):number{
  return x + y
}
console.log(add2(5, 10))
// 给add2重新赋值
add2 = function (a:number, b:number):number{
  return a - b
}
console.log(add2(5, 10))






