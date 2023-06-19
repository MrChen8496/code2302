// object.ts   测试面向对象相关语法
class Person {
  name: string;
  age: number;
  married: boolean;
  constructor(name:string, age:number, married:boolean){
    this.name = name;
    this.age = age;
    this.married = married;
  }
}
let p1:Person = new Person('zs', 25, false);
let p2:Person = new Person('ls', 19, false);
console.log(p1)
console.log(p2)

// 声明一个类型Product描述电商网站中的商品：
// name名称 price价格 brand品牌 model型号 pictures一组图片
class Product {
  name: string;
  price: number;
  brand: string;
  model: string;
  pictures: string[];  // pictures: Array<string>

  constructor(name:string, price:number, 
      brand:string, model:string, pictures:string[]){
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.model = model;
    this.pictures = pictures;
  }
}
// 创建一件商品对象：
let p = new Product(
  '速冻粽子', 18.9, '五芳斋', '鲜肉粽', ['1.jpg','2.jpg']);
console.log(p)



