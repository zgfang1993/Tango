import React from 'react';
import {
    Image,
    StyleSheet
} from 'react-native';
import {TabNavigator, StackNavigator} from "react-navigation";
import Keep from './view/Keep'
import Add from '../App/view/Add'
import Service from '../App/view/Service'
import Mine from '../App/view/Mine'
import SocialScreenNavigator from '../App/view/Social'

//tab的定义
const TangoTab = TabNavigator({
    Social: {
        screen: SocialScreenNavigator,
        navigationOptions: () => navigationOpts({
            tabBarLabel: '社区',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/footer/social.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        })
    },
    Keep: {
        screen: Keep,
        navigationOptions: () => navigationOpts({
            tabBarLabel: '养宠',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/footer/home.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        })
    },
    Add: {
        screen: Add,
        navigationOptions: () => navigationOpts({
            tabBarLabel: '',
            showLabel: false,
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/footer/add.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        })
    },
    Service: {
        screen: Service,
        navigationOptions: () => navigationOpts({
            tabBarLabel: '服务',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/footer/service.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        })
    },
    Mine: {
        screen: Mine,
        navigationOptions: () => navigationOpts({
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/footer/mine.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        })
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    tabBarOptions: {
        activeTintColor: '#FFA500',
    },
});

//所有要跳转的页面在这里注册
const Tango = StackNavigator({
    TangoTab: {
        screen: TangoTab
    },
    Mine: {
        screen: Mine
    },
    Service: {
        screen: Service
    },
    Social: {
        screen: SocialScreenNavigator
    },
    Add: {
        screen: Add
    }
});

//公共导航类,可选择性覆盖
const navigationOpts = (opt) => {
    let defaultOpt = {
        //StackNavigator
        header: null,
        headerTitle: "宠爱",     //顶部header名字
        headerTitleStyle: { //顶部header名字样式。
            fontSize: 18,
            color: '#fff',
            alignSelf: 'center' //安卓上文字居中
        },
        headerStyle: {         // header样式
            backgroundColor: '#10AEFF',
            elevation: 0,         //去掉安卓导航条底部阴影
            shadowOpacity: 0      //iOS去掉阴影
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
                <IconFont name="profile" style={{color: tintColor, fontSize: 24}}/>
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

export default Tango