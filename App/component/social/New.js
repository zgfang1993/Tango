import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default class Mine extends Component {
    render() {
        return (
            <View style={{marginTop: 20}}>
                <Text style={styles.text}>最新</Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 40
    }
});