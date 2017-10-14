
import React, { Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const loading = require('../images/banner/loading.gif');
const banner_holder = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505590344410&di=c88e60738c4502c78922f764d1b76de4&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F58268df47544e.jpg";

const Slide = props => {
    return (
        <View style={styles.slide}>
            <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
            {
                !props.loaded && <View style={styles.loadingView}>
                    <Image style={styles.loadingImage} source={loading} />
                </View>
            }
        </View>
    )
};

export default class Banner extends Component {
    constructor (props) {
        super(props);
        this.state = {
            imgList: [
                banner_holder,
                banner_holder,
                banner_holder,
                banner_holder,
                ],
            loadQueue: [0, 0, 0, 0]
        };
        this.loadHandle = this.loadHandle.bind(this)
    }

    loadHandle (i) {
        let loadQueue = this.state.loadQueue;
        loadQueue[i] = 1;
        this.setState({
            loadQueue
        })
    }

    render(){
        return (
            <View style={{height: 200}}>
                <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={false} autoplay={true}>
                    {
                        this.state.imgList.map((item, i) =>
                            <Slide
                                loadHandle={this.loadHandle}
                                loaded={!!this.state.loadQueue[i]}
                                uri={item}
                                i={i}
                                key={i} />
                        )
                    }
                </Swiper>
            </View>

        )
    }
}

let styles = StyleSheet.create({
    wrapper: {
        height: 200
    },

    slide: {
        width: 375,
        height: 200,
        backgroundColor: 'transparent'
    },
    image: {
        flex: 1,
        backgroundColor: 'transparent'
    },

    loadingView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },

    loadingImage: {
        width: 60,
        height: 60
    }
});
