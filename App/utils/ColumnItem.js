import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

export default class ColumnItem extends Component{
    render(){
        return (

            <TouchableOpacity style={styles.wrapper}>
                <Image source={{uri: this.props.item.pic_url}} style={styles.img}/>
                <View style={styles.content}>
                    <Text>{this.props.item.name}</Text>
                    <Text style={styles.desc}>{this.props.item.desc}</Text>
                    <View style={styles.info}>
                        <Text style={styles.minfo}>{this.props.item.author}</Text>
                        <Text style={styles.tag}>￥{this.props.item.tag}</Text>
                    </View>
                    <Text style={styles.bottomLine}>
                    </Text>
                </View>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection: 'row',
        height: 170,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderBottomWidth:0.5,
        borderColor: '#ccc',
    },
    img:{
        width: 110,
        height: 160
    },
    content:{
        flex:1,
        marginLeft: 20,
        marginTop:30
    },
    info: {
        flexDirection: 'row',
    },
    desc: {
        color: '#999',
        fontSize: 12,
        paddingVertical: 4,
        marginTop: 2
    },
    minfo: {
        color: '#999',
        fontSize: 12,
        marginTop: 20
    },
    price:{
        position: 'absolute',
        right:0,
        color: '#D53519'
    }

});