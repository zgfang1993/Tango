import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import {Card, WingBlank, WhiteSpace} from 'antd-mobile';

export default class Hot extends Component {
    render() {
        return (
            <WingBlank size="lg">
                <WhiteSpace size="lg"/>
                <Card>
                    <Card.Header
                        title="This is title"
                        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                        extra={"this is extra"}
                    />
                    <Card.Body>
                        <Text>This is content of `Card`</Text>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={"extra footer content"}/>
                </Card>
                <WhiteSpace size="lg"/>
            </WingBlank>
        )
    }

}
