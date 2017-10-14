import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    FlatList
} from 'react-native'

import CardItem from '../../utils/Card'

const articleSource = [

    {
        author: "一米阳光",
        pub_time: "9分钟前",
        tag_name: "英短",
        comment_num: 12,
        like_num: 7,
        content: "遇见糖豆的亲娘甜甜，以前可是高傲的很哪，谁都不给玩，现在发情了，一反常态，见着狗狗就很热情，年龄大了主人不想让她再生了，这不上绳了",
    },
    {
        author: "废材小王子",
        pub_time: "1小时前",
        tag_name: "布偶猫",
        comment_num: 6,
        like_num: 2,
        content: "遇见糖豆的亲娘甜甜，以前可是高傲的很哪，谁都不给玩，现在发情了，一反常态，见着狗狗就很热情，年龄大了主人不想让她再生了，这不上绳了",
    },
    {
        author: "基基歪歪",
        pub_time: "1天前",
        tag_name: "英短",
        comment_num: 99,
        like_num: 3,
        content: "遇见糖豆的亲娘甜甜，以前可是高傲的很哪，谁都不给玩，现在发情了，一反常态，见着狗狗就很热情，年龄大了主人不想让她再生了，这不上绳了",
    },
    {
        author: "Saber",
        pub_time: "一周前",
        tag_name: "英短",
        comment_num: 20,
        like_num: 1,
        content: "遇见糖豆的亲娘甜甜，以前可是高傲的很哪，谁都不给玩，现在发情了，一反常态，见着狗狗就很热情，年龄大了主人不想让她再生了，这不上绳了",
    },

];

export default class Mine extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <FlatList
                data = {articleSource}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => <CardItem item={item}/>}
            />
        )
    }
}
