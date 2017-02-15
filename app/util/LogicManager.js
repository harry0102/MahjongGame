/**
 * Created by huibei on 17/2/15.
 */
//业务逻辑处理
import {MahjongModel,PersonModel} from '../model/MahjongModel'

// 麻将池
var cardPool = [MahjongModel('白鸡',1),
                MahjongModel('二饼',3),
                MahjongModel('四饼',4),
                MahjongModel('白鸡',5),
                MahjongModel('二饼',6),
                MahjongModel('四饼',10),
                MahjongModel('白鸡',11),
                MahjongModel('二饼',13),
                MahjongModel('四饼',14),
                MahjongModel('白鸡',16),
                MahjongModel('二饼',19),
                MahjongModel('四饼',21)]
// 麻将回收池
var cardRecyclePool = []

//人数
var numbers = [
    PersonModel('猪猪侠',29,'男',[]),
    PersonModel('芳芳',25,'女',[]),
    PersonModel('林林',28,'男',[]),
    PersonModel('玉洁',26,'女',[]),
]

function checkNumber() {

}

function shuffle() {

}

function sendCard() {

    for(card in cardPool){

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







