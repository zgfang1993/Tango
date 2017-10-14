import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

export default class Tag extends Component {
    render() {
        return (
            <View style={styles.category}>
                <View style={styles.categoryItem}>
                    <Image source={require('../images/tag/top1.png')} style={styles.categoryImg}/>
                    <Text style={styles.text}>精选</Text>
                </View>
                <View style={styles.categoryItem}>
                    <Image source={require('../images/tag/topic.png')} style={styles.categoryImg}/>
                    <Text style={styles.text}>萌友圈</Text>
                </View>

                <View style={styles.categoryItem}>
                    <Image source={require('../images/tag/stared1.png')} style={styles.categoryImg}/>
                    <Text style={styles.text}>养宠</Text>
                </View>
                <View style={styles.categoryItem}>
                    <Image source={require('../images/tag/tec1.png')} style={styles.categoryImg}/>
                    <Text style={styles.text}>配对</Text>
                </View>
                <View style={styles.categoryItem}>
                    <Image source={require('../images/tag/liked.png')} style={styles.categoryImg}/>
                    <Text style={styles.text}>寄养</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        backgroundColor: '#fff'
    },
    categoryItem: {
        flex: 1,
        height: 70,
        paddingVertical: 10,
        alignItems: 'center',
        padding: 2
    },
    categoryImg: {
        width: 25,
        height: 25
    },
    text: {
        // position: 'absolute',
        marginTop: 6,
        fontSize: 11,
        fontWeight: "400",
        color: '#CDC5BF'
    },
});