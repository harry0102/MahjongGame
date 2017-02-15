/**
 * Created by huibei on 17/2/15.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    PixelRatio,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';

import Toast, {DURATION} from 'react-native-toast-easy'
const {width, height} = Dimensions.get('window')

var {randomNumber} = require('./util/Util')
var {beginGame} = require('./util/LogicManager')

const urls = ['http://p2.gexing.com/G1/M00/1A/8C/rBACE1JJWx_TBDCxAAB8GSMvxVU761.jpg',
    'http://img39.51tietu.net/pic/2017-011003/20170110030923zgwnujrdwlu107946.jpg',
    'http://a.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=3e57409dab6eddc426b2bcff0ceb9acb/9c16fdfaaf51f3de842cd71c92eef01f3a29792f.jpg',
    'http://f.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=34480776be0e7bec238f0be51a1e950e/b3fb43166d224f4a2ded606a0ff790529822d156.jpg']

class TableComponent extends Component {
    render() {
        var index = randomNumber(1, 4)
        var url = urls[index]
        return <View style={styles.table}>
            <Image source={{uri:url}} style={styles.table}/>
        </View>
    }
}

export default class GameScene extends Component {
    _exitRoom(){
        var {navigator} = this.props
        navigator.pop()
    }

    render() {
        return <View style={{justifyContent:'space-between',flex:1,backgroundColor:'#FFDAB9'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={styles.topLeft}>
                    <TouchableOpacity style={{margin:4}}>
                        <Text style={styles.text_small}>房号 9527</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text_small}>第一局 剩112张</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.topRight}>
                    <TouchableOpacity>
                        <Text style={styles.text_small}>信息</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.text_small}>设置</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text_small}>玩法</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._exitRoom.bind(this)}>
                        <Text style={styles.text_small}>退出</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.center}>
                <View>
                    <TableComponent />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <TableComponent />
                    <Image style={{width:80,height:80,margin:20}} source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=557385576,1435014867&fm=23&gp=0.jpg'}}/>
                    <TableComponent />
                </View>
                <View>
                    <TableComponent />
                </View>
            </View>
            <View>
                <TouchableOpacity
                    style={{alignItems:'center',justifyContent:'center',height:30,backgroundColor:'#FFF8DC'}}
                    onPress={()=>{
                        this.refs.toast.show('本局现在开始！',10);
                        beginGame()
                    }}>
                    <Text style={[styles.text]}>开始</Text>
                </TouchableOpacity>
            </View>
            <Toast ref="toast"/>
        </View>
    }
}


const styles = {
    bg: {
        backgroundColor: '#FFDAB9'
    },
    topLeft: {
        width: 80,
        height: 50,
        backgroundColor: '#FFF8DC',
        alignItems: 'center',
        justifyContent:'center'
    },
    topRight: {
        width: 120,
        height: 50,
        backgroundColor: '#FFF8DC',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    center: {
        width: width * 0.8,
        height: height * 0.65,
        alignSelf: 'center',
        backgroundColor: '#FFF8DC',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent:'space-around'
    },
    text: {
        fontSize: 24
    },
    text_small: {
        fontSize: 10
    },
    item_bg: {
        backgroundColor: '#FFFACD'
    },
    table: {
        width: 49,
        height: 49,
        borderWidth:1,
        borderColor:'#EEE9E9'
    }
}