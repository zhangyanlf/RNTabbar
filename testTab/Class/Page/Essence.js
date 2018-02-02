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
    TouchableOpacity,
    StatusBar
} from 'react-native';



export default class App extends Component<{}> {


    static navigationOptions = ({navigation})=> ({
        title:'精华',
        tabBarLabel:'精华',
        tabBarIcon: ({tintColor,focused}) => (
            <Image
                style={{width:45/2,height:41/2}}
                source={focused?AppImages.tab.home_active:AppImages.tab.home_unactive}/>
        ),


    });

    render() {

        let statusBar;
        if (Platform.OS==='ios') {
            statusBar = (
                <StatusBar
                    barStyle="light-content"
                    animated={true}
                />
            );
        } else {
            statusBar = (
                <StatusBar
                    backgroundColor={'#eb0f44'}
                />
            );
        }
        return (
            <View style={styles.container}>
                {statusBar}
                <Text style={styles.welcome}>
                    精华
                </Text>
                <Text style={styles.instructions}>
                    茫茫人海，这里汇聚了最精彩的内容！
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
