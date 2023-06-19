# TSOOP DAY03

### 面向对象编程 

面向对象编程是一种新的编程方式，它是一种将一些零散变量与函数封装在一起统一解决问题的编程方式。

**类**  （面向对象编程思想中的**自定义类型**） 

```
class Person {
    name: string;
    age: number;
    gender: string;
    married: boolean;
}
```

**对象：**（通过类型的定义，创建出来的一个具体的实例）

```
let p1 = new Person('zs', 15, '男', false)
let p2 = new Person('ls', 25, '女', true)
new Date()
new Array()
new Option()
new AMap.Map(document.getElementById('contaniner'))
new AMap.Map()
```



案例：做一个扑克牌比大小的小游戏。

需求：两个人，一副牌（54张）。洗牌，起牌，每人27张。每人拿出一张比大小，大的得1分，否则不得分。最后比较谁赢了。

```
class Card {
    suit:number;
    rank:number;
}
new Card()  一张牌
```

```
class Player {
    name: string;
    score: number;
    cards: Card[];
}
new Player()
new Player()
```
































