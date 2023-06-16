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

