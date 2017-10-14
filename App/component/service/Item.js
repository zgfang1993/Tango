import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native'

export default class ServiceItem extends Component {
    render() {
        return (
            <View style={styles.view}>
                <View style={styles.left}>
                    <Image source={require('../../images/social/subscribe/cat.png')} style={styles.left_image}/>
                    <Text style={styles.left_text}>{this.props.item.name}</Text>
                </View>
                <View style={styles.right}>
                    <Image source={require('../../images/common/right_arrow.png')} style={styles.right_image}/>
                </View>
            </View>
        )
    }
}


let styles = StyleSheet.create({
    view: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        height:55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderRadius: 8,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:20
    },
    left_text:{
        fontSize: 15,
        fontWeight:'200'
    },
    right: {
        marginRight:15

    },
    left_image:{
        width: 25,
        height: 25,
        marginRight: 6,
    },
    right_image:{
        width: 15,
        height: 15,
    }
});