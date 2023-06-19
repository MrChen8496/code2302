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
add2 = function (a:number, b:number):number {
  return a - b
}
console.log(add2(5, 10))

/**
 * 定义一个函数queryMovies
 * 接收参数：page 页码 
 * 接收参数：pagesize 每页条目数  （默认10条）
 * 接收一个可选参数：name
 */
function queryMovies(
  page:number=1, pagesize:number=10, name?:string){
  console.log('查询电影信息:', {page, pagesize, name})  
}
queryMovies(2, 3)
queryMovies(2, 3, '杀手')
queryMovies(2)
queryMovies()





