/**
 * Created by zhangyanlf on 2018/2/2.
 */


import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';


export default class App extends Component<{}> {

    static navigationOptions = ({navigation})=> ({
        title:'撰写',
        tabBarLabel:'撰写',
        tabBarIcon: ({ tintColor,focused }) => (
            <Image style={{width:40,height:40}}
                   source={focused?AppImages.tab.project_active:AppImages.tab.project_unactive}/>
        ),
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    撰写
                </Text>
                <Text style={styles.instructions}>
                    有什么想说的，来者不拒！
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
