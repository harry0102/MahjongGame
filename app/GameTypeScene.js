/**
 * Created by huibei on 17/2/15.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import GameScene from './GameScene'

const {width,height} = Dimensions.get('window')

export default class GameTypeScene extends Component {
    _goGameScene(){
        this.props.navigator.push({
            title:'个人中心',
            component:GameScene
        })
    }

    render() {
        var {navigator} = this.props
        return <View style={styles.container}>
            <View style={styles.item_container}>
                <TouchableOpacity
                    style={styles.item}
                    onPress={this._goGameScene.bind(this)}>
                    <Text style={styles.text}>红中麻将</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    onPress={this._goGameScene.bind(this)}>
                    <Text style={styles.text}>雀王争霸</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    item_container: {
        height: height * 0.5,
        borderWidth:1,
        borderColor:'#f4f4f4',
        flexDirection:'row',
        marginBottom:20
    },
    item: {
        width: width * 0.35,
        height: width * 0.3,
        backgroundColor:'#FFE4C4',
        margin:4,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:24
    }
}