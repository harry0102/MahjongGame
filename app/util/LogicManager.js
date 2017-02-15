/**
 * Created by huibei on 17/2/15.
 */
//业务逻辑处理
import {MahjongModel,PersonModel} from '../model/MahjongModel'

// 麻将池
var cardPool = [
    new MahjongModel('白鸡',1),
    new MahjongModel('二饼',3),
    new MahjongModel('四饼',4),
    new MahjongModel('白鸡',5),
    new MahjongModel('二饼',6),
    new MahjongModel('二饼',3),
    new MahjongModel('四饼',4),
    new MahjongModel('白鸡',5),
    new MahjongModel('二饼',6),
    new MahjongModel('四饼',10),
    new MahjongModel('白鸡',11),
    new MahjongModel('二饼',13),
    new MahjongModel('四饼',14),
    new MahjongModel('白鸡',16),
    new MahjongModel('二饼',19),
    new MahjongModel('四饼',21),
    new MahjongModel('白鸡',16),
    new MahjongModel('二饼',19)]
// 麻将回收池
var cardRecyclePool = []

//人数
const numbers = [
    new PersonModel('猪猪侠',29,'男',[]),
    new PersonModel('芳芳',25,'女',[]),
    new PersonModel('林林',28,'男',[]),
    new PersonModel('玉洁',26,'女',[])
]

function checkNumber() {

}

function shuffle() {

}

function sendCard() {
    const count = numbers.length
    var index = 0
    for(card in cardPool){
        var person = numbers[index]
        person.cards.push(card)
        index = (++index)%count
    }
}

export function beginGame() {
    //检查人数
    checkNumber()
    // 洗牌
    shuffle()
    // 发牌
    sendCard()
}







