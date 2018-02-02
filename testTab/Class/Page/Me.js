/**
 * Created by zhangyanlf on 2018/2/2.
 */
/**
 * Created by zhangyanlf on 2018/2/2.
 */


import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class App extends Component<{}> {
    static navigationOptions = ({navigation})=> ({
        title:'我',
        tabBarLabel:'我',
        tabBarIcon: ({ tintColor,focused }) => (
            <Image style={{width:42/2,height:43/2}}
                   source={focused?AppImages.tab.profile_active:AppImages.tab.profile_unactive}/>
        ),

    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    我
                </Text>
                <Text style={styles.instructions}>
                    在这里，是你的世界！
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
