// interface.ts  测试TS中的接口

/**
 * 参数契约：
 * 我定义的方法需要接收一个object，而且object里面得有page与pagesize
 */
function queryMovies(params: {page:number, pagesize:number}){
  // 通过接收params中的参数信息，从而发送axios请求
  console.log(params.page)
  console.log(params.pagesize)
}

queryMovies({page:1, pagesize:20})
// queryMovies({page:1, pagesize:20, name:'关键字'})
// queryMovies({currentPage:1, pagesize:20})


// 使用interface关键字声明接口，定义规范：参数契约
interface Movie {
  name: string,
  star_actor: string,
  showingon: string,
  duration?: number,  // 可选属性
}
// 要求传来的参数，必须符合Movie接口的契约规范  （属性名、属性类型）
function addMovie(params: Movie){
  // 既然知道了params是符合Movie接口规范的，则可以直接访问其属性
  console.log(params.name)
  console.log(params.star_actor)
}

addMovie({
  name:'杀手', 
  star_actor:'lion', 
  duration:121, 
  showingon:'2023-10-10'
})
addMovie({
  name:'杀手', 
  star_actor:'lion', 
  showingon:'2023-10-10'
})

// 定义一个接口的子类  让MyMovie类实现Movie接口
// 实现接口就意味着MyMovie类从语法上要满足Movie接口的所有参数契约
class MyMovie implements Movie {
  name: string;
  showingon: string;
  star_actor: string;
  constructor(name:string, showingon:string, star_actor:string){
    this.name = name;
    this.showingon = showingon;
    this.star_actor = star_actor;
  }
}
// 创建出来的对象，一定会满足MyMovie接口的参数契约，
let m = new MyMovie('名字', '2023年6月19日', '主演1,主演2')
// 所以将一个MyMovie对象传给addMovie方法是完全合理的。
addMovie(m)




