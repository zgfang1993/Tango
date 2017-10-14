import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image'
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';

const cat_url = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508323368&di=5116eb2ede83728a44237b28f97e8289&imgtype=jpg&er=1&src=http%3A%2F%2Fp4.gexing.com%2Fkongjianpifu%2F20130306%2F2207%2F51374d8f30a7a.jpg"


export default class CardItem extends Component {
    render() {
        return (
            <View style={styles.card}>
                <View style={styles.header}>
                    <View style={styles.header_left}>
                        <Image source={require('../images/social/subscribe/cat.png')} style={styles.header_author_img}/>
                        <Text style={styles.header_author}>{this.props.item.author}</Text>
                    </View>
                    <View style={styles.header_right}>
                        <Text style={styles.header_time}>{this.props.item.pub_time}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text
                        style={styles.body_txt}>{this.props.item.content}</Text>
                    <View style={styles.body_images}>
                        <View style={{flexDirection: 'row',flexWrap:'wrap'}}>
                            <ResponsiveImage source={{uri: cat_url}}
                                             initWidth="130" initHeight="130"/>
                            <ResponsiveImage source={{uri: cat_url}}
                                             initWidth="130" initHeight="130"/>
                            <ResponsiveImage source={{uri: cat_url}}
                                             initWidth="130" initHeight="130"/>
                            <ResponsiveImage source={{uri: cat_url}}
                                             initWidth="130" initHeight="130"/>
                            <ResponsiveImage source={{uri: cat_url}}
                                             initWidth="130" initHeight="130"/>
                            <ResponsiveImage source={{uri: cat_url}}
                                             initWidth="130" initHeight="130"/>
                        </View>
                    </View>
                </View>
                <View style={styles.hr_holder}/>
                <View style={styles.footer}>
                    <View style={styles.footer_left}>
                        <Image source={require('../images/social/subscribe/tag.png')} style={styles.footer_tag_img}/>
                        <Text style={styles.footer_tag_name}>{this.props.item.tag_name}</Text>
                    </View>
                    <View style={styles.footer_right}>
                        <View style={styles.footer_right_view}>
                            <Image source={require('../images/social/subscribe/sub.png')} style={[styles.footer_sub_img]}/>
                            <Image source={require('../images/social/subscribe/comment.png')} style={styles.footer_tag_img}/>
                            <Text style={styles.footer_right_view_txt}>{this.props.item.comment_num}</Text>
                        </View>
                        <View style={styles.footer_right_view}>
                            <Image source={require('../images/social/subscribe/like.png')} style={styles.footer_tag_img}/>
                            <Text style={styles.footer_right_view_txt}>{this.props.item.like_num}</Text>
                        </View>
                    </View>
                </View>
            </View>

        )
    }

}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        height: 'auto',
        marginLeft: 4,
        marginRight: 4,
        marginTop:10,
        borderRadius: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    header_left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    header_author: {
        fontSize: 11
    },
    header_author_img: {
        width: 15,
        height: 15,
        marginRight: 3,
    },
    header_time: {
        fontSize: 11,
        color: '#B7B7B7'
    },
    body: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    body_txt: {
        fontSize: 12,
        color: '#848484',
        fontWeight: '400',
        letterSpacing: 0.1,
        lineHeight: 13
    },
    body_images: {
        // flex: 1,
        justifyContent: 'center',
        marginTop:5
    },
    hr_holder:{
        marginLeft: 8,
        marginRight: 8,
        marginTop:6,
        borderWidth:0.3,
        borderColor:'#B7B7B7'
    },
    footer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8,
        marginBottom:8
    },
    footer_left:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    footer_right:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    footer_right_view:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:5
    },
    footer_right_view_txt:{
        fontSize: 12,
        color: '#B7B7B7'
    },
    footer_tag_img:{
        width: 10,
        height: 10,
        marginRight: 3,
    },
    footer_sub_img: {
        width: 55,
        height: 20,
        marginRight: 8
    },
    footer_tag_name:{
        fontSize: 13,
        color: '#B7B7B7'
    }



});

