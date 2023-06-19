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




