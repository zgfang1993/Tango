import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    FlatList
} from 'react-native'
import Banner from '../utils/Banner';
import ServiceItem from '../component/service/Item'


const service_list = [
    {
        "name":"线上活动"
    },
    {
        "name":"家庭寄养"
    },
    {
        "name":"宠物配对"
    },
    {
        "name":"一起遛遛"
    },
    {
        "name":"带我回家"
    }
    ];

export default class Service extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <ScrollView style={styles.content}>
                <Banner/>
                <FlatList data={service_list} style={styles.list}
                          keyExtractor={(item, index) => item.id}
                          renderItem={({item}) => <ServiceItem item={item}/>}
                />
            </ScrollView>
        )
    }
}

let styles = StyleSheet.create({
    content: {
        marginTop: 20,
    },
    list:{
        marginTop:20
    }
});