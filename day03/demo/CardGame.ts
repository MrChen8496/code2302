// CardGame.ts
// 创建一个描述扑克牌的类
enum Suit {黑桃, 红桃, 梅花, 方块, 王}
enum Rank {R3, R4, R5, R6, R7, R8, R9, R10, 
  RJ, RQ, RK, RA, R2, Black, Red}

class Card {
  suit: Suit;  // 花色  黑红梅方 
  rank: Rank;  // 点数  3,4,5,6,7......K, A, 2
  constructor(suit:Suit, rank:Rank){
    this.suit = suit;
    this.rank = rank;
  }
  /** 将当前对象的属性使用人性化的语言返回 */
  toString(){
    // 处理大小王
    if(this.rank==Rank.Black){
      return '小王'
    }
    if(this.rank==Rank.Red){
      return '大王'
    }
    // 通过枚举反查值的名字
    return Suit[this.suit] + Rank[this.rank]
  }
}
// let heartA = new Card(1, 12);
let heartA = new Card(Suit.红桃, Rank.RA);
console.log(heartA.toString());

// 使用双层for循环构建54张牌，放入总牌堆数组中(Card数组)
let cards:Card[] = []
for(let suit=Suit.黑桃; suit<=Suit.方块; suit++){
  for(let rank=Rank.R3; rank<=Rank.R2; rank++){
    let c = new Card(suit, rank);
    cards.push(c)
  }
}
cards.push(new Card(Suit.王, Rank.Black));
cards.push(new Card(Suit.王, Rank.Red));
console.log(cards.toString())

// 声明一个类型，描述玩家Player
class Player {
  name: string;
  score: number;
  cards: Card[];
  
  constructor(name:string){ // 创建Player对象时仅仅提供名字即可
    this.name = name
    this.score = 0
    this.cards = []
  }

  /** 从总牌堆中随机抽一张，放入自己的手牌中 */
  choupai(cards:Card[]){
    // 随机一个下标，从总牌堆中删掉这一张，并且放入手牌
    let index = Math.floor(Math.random() * cards.length)
    let deletedCard = cards.splice(index, 1)
    this.cards.push(deletedCard[0])
  }

  /** 出牌  将手牌最上方的一张牌打出去 */
  chupai(){
    return this.cards.pop()
  }

  toString(){
    console.log(`姓名:${this.name}`)
    console.log(`得分:${this.score}`)
    console.log(`手牌:${this.cards.toString()}`)
  }

}
// 创建两个玩家
let p1 = new Player('亮亮');
let p2 = new Player('小新');
console.log(p1)
console.log(p2)

// 让两个人交替不断的从总牌堆中随机抽牌，抽到自己手里。最终每人27张
while(cards.length!=0){
  p1.choupai(cards)
  p2.choupai(cards)
}
console.log('两人抽牌后--------------------------------')
p1.toString()
p2.toString()

// 两人分别出牌，比较大小   计分
while(true){
  let c1 = p1.chupai()
  let c2 = p2.chupai()
  if(c1!=undefined && c2!=undefined){ // 还能继续比
    if(c1.rank > c2.rank){
      p1.score++
    }else if(c1.rank < c2.rank){
      p2.score++
    }
  }else {
    break;
  }
}
p1.toString()
p2.toString()











