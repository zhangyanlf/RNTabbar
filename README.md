# RNTabbar
TabBar（Android/iOS按钮突出效果）

## 运行工程 
#### 1.cd进入testTab根目录
#### 2.npm install
#### 3.npm start
#### 4.Xcode/Android Studio 运行项目

## 效果如图
# ![image](https://github.com/zhangyanlf/RNTabbar/blob/master/testTab/Class/image/iOS效果图.png) # ![image](https://github.com/zhangyanlf/RNTabbar/blob/master/testTab/Class/image/安卓效果图.png)


##代码实现
``` React-Native
import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NativeModules,
    ImageBackground,
    DeviceEventEmitter
} from 'react-native';

export default class Tab extends Component {
    renderItem = (route, index) => {
        const {
            navigation,
            jumpToIndex,
        } = this.props;

        const focused = index === navigation.state.index;
        const color = focused ? this.props.activeTintColor : this.props.inactiveTintColor;
        let TabScene = {
            focused:focused,
            route:route,
            tintColor:color
        };

        if(index === 2){
            return (<View
                    key={route.key}
                    style={[styles.tabItem,{backgroundColor:'transparent'}]}>
                </View>
            );
        }

        return (
            <TouchableOpacity
                key={route.key}
                style={styles.tabItem}
                onPress={() => jumpToIndex(index)}
            >
                <View
                    style={styles.tabItem}>
                    {this.props.renderIcon(TabScene)}
                    <Text style={{ ...styles.tabText,marginTop:SCALE(10),color }}>{this.props.getLabel(TabScene)}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    render(){
        const {navigation,jumpToIndex} = this.props;
        const {routes,} = navigation.state;
        const focused = 2 === navigation.state.index;
        const color = focused ? this.props.activeTintColor : this.props.inactiveTintColor;
        let TabScene = {
            focused:focused,
            route:routes[2],
            tintColor:color
        };
        return (<View style={{width:WIDTH}}>
            <View style={styles.tab}>
                {routes && routes.map((route,index) => this.renderItem(route, index))}
            </View>
            {/*设置中间按钮凸出样式  使用绝对定位*/}
            <TouchableOpacity
                key={"centerView"}

                style={[styles.tabItem,{position:'absolute',bottom:0,left:(WIDTH-SCALE(100))/2,right:WIDTH-SCALE(100),height:SCALE(120)}]}
                onPress={() => jumpToIndex(2)}>
                <View
                    style={styles.tabItem}>
                    {this.props.renderIcon(TabScene)}
                    <Text style={{ ...styles.tabText,marginTop:SCALE(10),color }}>{this.props.getLabel(TabScene)}</Text>
                </View>
            </TouchableOpacity>
        </View>);
    }
}
const styles = {
    tab:{
        width:WIDTH,
        backgroundColor:'transparent',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end'
    },
    tabItem:{
        height:SCALE(80),
        width:SCALE(100),
        alignItems:'center',
        justifyContent:'center'
    },
    tabText:{
        marginTop:SCALE(13),
        fontSize:FONT(10),
        color:'#7b7b7b'
    },
    tabTextChoose:{
        color:'#f3474b'
    },
    tabImage:{
        width:SCALE(42),
        height:SCALE(42),
    },
};

```

##  推荐react-navigation 中文翻译：  [reactnavigation]: https://www.reactnavigation.org.cn       "reactnavigation"
## PS：运用 react-navigation 是问题记录

#### 1.Android 导航栏文字居中效果
#### node_modules -- react-navigation -- src -- views -- Header -- Header.js 修改368行 将  alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start' 改为 'center'即可 （遇到的问题后续还会持续更新）
```
title: {
        bottom: 0,
        left: TITLE_OFFSET,
        right: TITLE_OFFSET,
        top: 0,
        position: 'absolute',
        alignItems: 'center'//Platform.OS === 'ios' ? 'center' : 'flex-start',
  }
```

