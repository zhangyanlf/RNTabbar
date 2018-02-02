/**
 * Created by zhangyanlf on 2018/2/2.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';



export default class App extends Component<{}> {


    static navigationOptions = ({navigation})=> ({
        title:'新帖',
        tabBarLabel:'新帖',
        tabBarIcon: ({tintColor,focused}) => (
            <Image
                style={{width:45/2,height:41/2}}
                source={focused?AppImages.tab.new_active:AppImages.tab.new_unactive}/>
        ),


    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    新帖
                </Text>
                <Text style={styles.instructions}>
                    想看新东西！骚年，看剑！
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