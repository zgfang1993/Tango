import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text
} from 'react-native'

import Banner from '../utils/Banner';
import Tag from '../utils/Tag';
import Column from "../component/keep/Column";
import {Button} from 'antd-mobile';

export default class Keep extends Component {

    render() {
        return (
            <ScrollView style={styles.content}>
                <Banner/>
                <Tag/>
                <View style={[styles.mar_top_10, styles.color_white]}>
                    <Column/>
                    <Column/>
                    <View style={[]}>
                    </View>
                </View>
            </ScrollView>

        )
    }
}


let styles = StyleSheet.create({
    content: {
        marginTop: 20,
        backgroundColor: '#F4F4F4'
    },
    mar_top_10: {
        marginTop: 10
    },
    color_white: {
        backgroundColor: '#FFFFFF'
    },
    point_label: {
        marginLeft: 20,
        marginTop: 8,
        marginBottom: 8,
        fontSize: 13,
        fontWeight: "800",
        color: '#A1A1A1'
    }
});


