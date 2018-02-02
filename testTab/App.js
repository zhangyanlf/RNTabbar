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


const tabbaroption = {
    activeTintColor: '#f3474b',
    inactiveTintColor: '#7b7b7b',
    showIcon: true,
    style: {
        backgroundColor:'white'
    },
    indicatorStyle: {
        opacity: 0
    },
    iconStyle:{
        paddingTop:0,
        padding:0,
        marginTop:0,
        width:SCALE(45),
        height:SCALE(45),
    },
    labelStyle:{
        marginTop:0,
        padding:0,
    },
    tabStyle: {
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
        swipeEnabled: false,
        tabBarComponent:props => <Tab {...props}/>,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        tabBarOptions: tabbaroption,
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
        initialRouteName: 'Index',
        headerMode: 'screen',
        mode: 'card',
        transitionConfig: TransitionConfiguration,
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
