import React from 'react';
import {
    Text,
    StyleSheet,
    Image,
    View
} from 'react-native';

import {TabNavigator} from "react-navigation";

import Hot from "../component/social/Hot"
import New from "../component/social/New"
import Rank from "../component/social/Rank"
import Subscribe from "../component/social/Subscribe"


const SocialScreenNavigator = TabNavigator(
    {
        Subscribe: {
            screen: Subscribe,
            navigationOptions: () => navigationOpts({
                tabBarLabel: '关注',
            })
        },
        Hot: {
            screen: Hot,
            navigationOptions: () => navigationOpts({
                tabBarLabel: '热门',
            })
        },
        New: {
            screen: New,
            navigationOptions: () => navigationOpts({
                tabBarLabel: '最新',
            })
        },
        Rank: {
            screen: Rank,
            navigationOptions: () => navigationOpts({
                tabBarLabel: '视频',
            })
        }
    },
    {
        tabBarPosition: 'top',
        swipeEnabled:true,
        tabBarOptions: {
            activeTintColor: '#FFA500',
        }
    }
);

//公共导航类,可选择性覆盖
const navigationOpts = (opt) => {
    let defaultOpt = {
        //StackNavigator
        header: null,
        headerTitle: "宠爱",     //顶部header名字
        headerTitleStyle: { //顶部header名字样式。
            fontSize: 25,
            color: '#fff',
            alignSelf: 'center',
            padding:10
            //安卓上文字居中
        },
        headerStyle: {         // header样式
            backgroundColor: '#10AEFF',
            elevation: 0,         //去掉安卓导航条底部阴影
            shadowOpacity: 0,      //iOS去掉阴影
        },
        headerBackTitleStyle: {}, // 顶部header 返回文字 样式
        headerBackTitle: null,
        headerTintColor: '#fff', //返回箭头颜色
        headerRight: "",
        gesturesEnabled: true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭

        //TabNavigator
        tabBarVisible: true, //tab栏显示
        tabBarLabel: "",  //tabBar 名字
        tabBarIcon: (({tintColor, focused}) => {  //tabBar图标
            return (
                <View/>
            )
        }),
    };

    return Object.assign(defaultOpt, opt)
};

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

export default SocialScreenNavigator


