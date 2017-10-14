import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native'


import SwipeCards from '../utils/SwipeCards.js'

export default class Mine extends Component {
    render() {
        return (
            <SwipeCards style={styles.card}/>
        )
    }
}

let styles = StyleSheet.create({
    card: {
        marginTop:100,
        height:100
    }
});