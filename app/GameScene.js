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
    TouchableOpacity
} from 'react-native';

const {width,height} = Dimensions.get('window')

export default class GameScene extends Component{
    render(){
        return <View style={{justifyContent:'space-between',flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={styles.topLeft}></View>
                <View style={styles.topRight}></View>
            </View>
            <View style={styles.center}>
                <View>

                </View>
            </View>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:40,backgroundColor:'red'}}>
                <Text style={styles.text}>邀请好友</Text>
            </TouchableOpacity>
        </View>
    }
}


const styles = {
    topLeft:{
        width:80,
        height:50,
        backgroundColor:'gray'
    },
    topRight:{
        width:90,
        height:50,
        backgroundColor:'gray'
    },
    center:{
        width:width*0.8,
        height:height*0.5,
        alignSelf:'center',
        backgroundColor:'gray'
    },
    text:{
        fontSize:24
    }
}