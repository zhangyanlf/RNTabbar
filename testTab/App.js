/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 *
 * 安卓导航栏文字居中  修改源码alignItems
 * node_modules -- react-navigation -- src -- views -- Header.js
 *  title: {
        bottom: 0,
        left: TITLE_OFFSET,
        right: TITLE_OFFSET,
        top: 0,
        position: 'absolute',
        alignItems: 'center'//Platform.OS === 'ios' ? 'center' : 'flex-start',
  },
 */

import React, {Component} from 'react';
import {
    Platform,
    View,
    I18nManager,
    TouchableOpacity,
    Easing,
    StatusBar,
    Animated,
    DeviceEventEmitter,
    Image,
} from 'react-native';
import { StackNavigator,TabNavigator,NavigationActions } from 'react-navigation';
import Tab from './Class/Component/Tab';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import One from './Class/Page/Essence';
import Two from './Class/Page/Compile';
import Three from './Class/Page/Me';
import New from './Class/Page/New';
import Friend from './Class/Page/Friend';
import NavigationManager from './NavigationManager';
const Routes = {
    One:{screen: One},
    New:{screen: New},
    Two:{screen: Two},
    Friend:{screen: Friend},
    Three:{screen: Three},
};


const tabbaroption = {//tab的样式等配置
    activeTintColor: '#f3474b', // 当前选中的tab bar的文本颜色和图标颜色
    inactiveTintColor: '#7b7b7b',//当前未选中的tab bar的文本颜色和图标颜色
    showIcon: true,
    style: { //tab bar的样式
        backgroundColor:'white'
    },
    indicatorStyle: { // tab 页指示符的样式 (tab页下面的一条线).
        opacity: 0
    },
    iconStyle:{//tab bar的图标样式
        paddingTop:0,
        padding:0,
        marginTop:0,
        width:SCALE(45),
        height:SCALE(45),
    },
    labelStyle:{ //tab bar的文本样式
        marginTop:0,
        padding:0,
    },
    tabStyle: {//tab页的样式
        height:Platform.OS==='ios'?SCALE(90):SCALE(100),
        alignItems:'center',
        justifyContent:'center',

    }
};

const Index = TabNavigator(
    {
        One:{screen: One},
        New:{screen: New},
        Two:{screen: Two},
        Friend:{screen: Friend},
        Three:{screen: Three},


    },
    {
        lazy: true,
        swipeEnabled: false,//是否可以滑动切换tab
        tabBarComponent:props => <Tab {...props}/>,//用作渲染tab bar的组件
        tabBarPosition: 'bottom',//tab bar的位置, 可选值： 'top' or 'bottom'
        animationEnabled: false,//点击选项卡切换界面是否需要动画
        tabBarOptions: tabbaroption,//tab的样式等配置
        headerLeft:null,
    });

//实现定义某个页面的动画效果
const TransitionConfiguration = () => {
    return {
        transitionSpec: {
            duration: 300,
            easing: Easing.linear(),
            timing: Animated.timing,
        },
        screenInterpolator:CardStackStyleInterpolator.forHorizontal,
        // screenInterpolator:freeStyle,
    };
};

const StackOptions = ({navigation}) => {
    const gesturesEnabled = true;
    const headerStyle= {
        height:SCALE(80),
        backgroundColor: '#eb0f44',
        borderWidth:0,
        borderBottomWidth:0,
    };
    const headerTitleStyle = {
        fontSize: FONT(17),
        color: 'white',
        alignSelf:'center'
    };
    const headerTintColor= 'white';
    const headerLeft = null;
    const headerRight= null;
    //</View>);
    return {headerLeft,headerRight,headerStyle,gesturesEnabled,headerTitleStyle,headerTintColor,}
};

const AppNavigator = StackNavigator(
    {
        ...Routes,
        Index: {
            screen: Index,
        },
    },
    {
        initialRouteName: 'Index',//设置堆栈的默认页面
        headerMode: 'screen',// 定义标题该如何渲染
        mode: 'card', //定义页面渲染和转换的风格
        transitionConfig: TransitionConfiguration, // 返回一个与默认页面的transitionConfig合并的对象的函数
        navigationOptions: ({navigation}) => StackOptions({navigation}),
    }
);

export default class App extends Component {


    componentDidMount() {
        NavigationManager.drawerNavigation = this.props.navigation;

    }

    constructor(props) {
        super(props);
        this.state = { user: ''};
    }

    render() {


        return(
            <AppNavigator/>
        );
    }
}
