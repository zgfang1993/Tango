import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image
} from 'react-native';
import ColumnItem from '../../utils/ColumnItem'

const dataSource = [

    {
        name: "鳄鱼街",
        pic_url: "https://img3.doubanio.com/lpic/s28710062.jpg",
        desc: "本书收入了舒尔茨存世的全部小说作品：两部短篇集《鳄鱼街》和《沙漏下的疗养院》，以及未结集的四个短篇。",
        update: 2,
        tag: 0.02
    },
    {
        name: "和纸之美",
        pic_url: "https://img3.doubanio.com/lpic/s29542564.jpg",
        desc: "日本民艺之父柳宗悦为和纸四处走访，并作《和纸之美》一书——《和纸之美》、《和纸之训》、《和纸十年》",
        update: 2,
        tag: 0.05
    },
    {
        name: "法国中尉的女人",
        pic_url: "https://img1.doubanio.com/lpic/s29482939.jpg",
        desc: "我是专栏描查尔斯无数次地回忆起，他们的第一次相遇。\n" +
        "堤岸边，她面海而立，黑色的衣裙随风飘动，人却如雕像般纹丝不动，仿佛在凝视着大海，又仿佛只是凝视着虚空",
        update: 2,
        tag: 0.01
    }
];
export default class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: dataSource
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.title}>
                    <Text style={styles.leftBorder}>
                    </Text>
                    <Text style={styles.columnTitle}>本周热门榜</Text>
                    <Text style={styles.more}>查看全部 ></Text>
                </View>

                <FlatList data={this.state.dataSource} style={styles.flat_list}
                          keyExtractor={(item, index) => item.id}
                          renderItem={this.renderItem.bind(this)}
                >
                </FlatList>
                <View style={styles.sync_view}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.sync_text}>换一换</Text>
                        <Image source={require('../../images/common/sync.png')} style={styles.sync_img}/>
                    </View>
                </View>
            </View>
        )
    }

    renderItem({item, index}) {
        return (
            <ColumnItem item={item}/>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    title: {
        flexDirection: 'row',
    },
    leftBorder: {
        width: 4,
        height: 20,
        backgroundColor: '#f86442',
        position: 'absolute',
        left: -10,
        top: -2
    },
    columnTitle: {
        color: '#5E5E5E',
        fontSize: 13,
        fontWeight: "800",
    },
    flat_list: {
        marginTop: 4
    },
    more: {
        color: '#ADADAD',
        fontSize: 12,
        fontWeight: "800",
        position: 'absolute',
        right: 0
    },
    sync_view: {
        alignItems: 'center',
        marginTop: 3
    },
    sync_text: {
        color: '#ADADAD',
        fontSize: 12,
        fontWeight: "800",
        marginTop: 8
    },
    sync_img: {
        width: 30,
        height: 30,
        marginLeft: -5
    }

});