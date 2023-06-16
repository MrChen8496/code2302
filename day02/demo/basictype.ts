// basictype.ts  测试ts的基本数据类型

// boolean类型
let married: boolean = true
let loading: boolean = false

// number类型 描述数字
let n1: number = 8         // 十进制
let n2: number = 0b1010    // 二进制
let n3: number = 0o12      // 8进制
let n4: number = 0x0f      // 16进制
console.log({n1, n2, n3, n4})

// string类型  描述字符串
let name1: string = '亮亮'
console.log(`名字是：${name1}`)

// Array类型  描述数组
let names: string[] = ['亮亮', '小新', '泡泡']
console.log(names)
let ages: number[] = [18, 19, 15]
console.log(ages)
let hobby: Array<string> = ['摊煎饼', '玩单杠', '玩钢管']
console.log(hobby)

// 元组类型    (元素类型可以不一致的数组)
let person: [number, number, string] = [180, 130, '男']
console.log(person)
person = [166, 100, '女']
console.log(person)
// 访问元素 可以得到明确数据类型的结果
console.log(person[2])

// 枚举类型
// 当希望为某一个变量赋值，而赋的值的选择是某一个固定的范围
// 那么就可以声明一个枚举类型的数据来表示可以选择的值的范围
// 还可以给这些值设置一些友好的名字

// 声明一个枚举类型变量，保存新款小米手机可选择的所有的颜色
enum PhoneColor { Red='#f00', Blue='#00f', Green='#0f0' }
// 从枚举中选择一个颜色，赋值给变量 p1Color
let p1Color = PhoneColor.Red  
console.log(p1Color)

// 声明一个枚举类型，保存可能会在sessionStorage中使用的KEY值
enum KEYS {User='user', Token='token', Cityname='city'}
// 当希望存储token时：
// sessionStorage.setItem(KEYS.Token, 'token字符串')
// sessionStorage.setItem(KEYS.User, user对象)

// 声明一个枚举类型，保存新增电影时的电影类型 热映、待映、经典
enum Category {Hot=1, Wait=2, Classic=3}

// 声明一个枚举类型，保存可以选择的性别
enum Gender {Male, Female}
console.log('Gender.Male:' + Gender.Male)
console.log('Gender.Female:' + Gender.Female)
// if(person.gender == Gender.Female) {
//   xxxxxx
// }

enum paths {
  ADD_ACTOR='/actor/add',
  LIST_ACTOR='/actors',
  DELETE_ACTOR='/actor/del',
  LIST_ACTORS_NAME='/actors/name',
}

// 对于枚举类型，TS还贴心的给出通过值反查枚举名称的语法：
// 查询 电影类别是2的电影，属于哪一个类别的电影?
console.log(Category[2])
console.log(Category[1])
console.log(Category[3])
// // 查询 sessionStorage中以token作为key保存的数据，到底是什么数据？
// let key = 'token'
// console.log(KEYS.key)

// any类型   有时候有些变量的类型说不清楚，不一定是什么类型
// 给一个变量设置any类型就意味着告诉ts编译器，不要对这个any变量
// 进行类型语法的检查，当做普通的js变量即可
let str:string = 'abc,cde,def'
console.log(str.split(','))
// console.log(str.toFixed(2))  编译错误  str没有toFixed方法

let str2:any = 'abc,cde,def'
// console.log(str2.toFixed(2))  不会提示编译错误  但是无法运行








