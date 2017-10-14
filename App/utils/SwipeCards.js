// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
const cat_url = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508323368&di=5116eb2ede83728a44237b28f97e8289&imgtype=jpg&er=1&src=http%3A%2F%2Fp4.gexing.com%2Fkongjianpifu%2F20130306%2F2207%2F51374d8f30a7a.jpg"

let Card = React.createClass({
    render() {
        return (
            <View style={styles.card}>
                <View style={styles.bgImageWrapper}>
                    <Image source={{uri: cat_url}} style={styles.bgImage} />
                </View>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
            </View>
            // <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
            //     <Text>{this.props.text}</Text>
            // </View>
        )
    }
});

class NoMoreCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.noMoreCardsText}>No more cards</Text>
            </View>
        )
    }
}

const Cards = [
    {text: 'Tomato', backgroundColor: 'red'},
    {text: 'Aubergine', backgroundColor: 'purple'},
    {text: 'Courgette', backgroundColor: 'green'},
    {text: 'Blueberry', backgroundColor: 'blue'},
    {text: 'Umm...', backgroundColor: 'cyan'},
    {text: 'orange', backgroundColor: 'orange'},
];

export default React.createClass({
    getInitialState() {
        return {
            cards: Cards
        }
    },
    handleYup (card) {
        console.log(`Yup for ${card.text}`)
    },
    handleNope (card) {
        console.log(`Nope for ${card.text}`)
    },
    handleMaybe (card) {
        console.log(`Maybe for ${card.text}`)
    },
    render() {
        // If you want a stack of cards instead of one-per-one view, activate stack mode
        // stack={true}
        return (
            <SwipeCards
                cards={this.state.cards}

                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}

                handleYup={this.handleYup}
                handleNope={this.handleNope}
                handleMaybe={this.handleMaybe}
                hasMaybeAction
            />
        )
    }
})

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,
        height: 460,
    },
    noMoreCardsText: {
        fontSize: 22,
    },
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch"
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});