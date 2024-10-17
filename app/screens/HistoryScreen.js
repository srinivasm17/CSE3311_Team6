import React from 'react';
import {View, Text} from 'react-native'
import { StyleSheet } from 'react-native';


function HistoryScreen({navigation}) {
    return (
        <View style={style.history}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={style.TextStyle}>History Screen
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    history:{
        flex: 1,
        alignItems:'center',
        backgroundColor: '#f08080',
        justifyContent:'center'
    },
    TextStyle:{
        fontSize: 26,
        fontWeight:'bold'
    }

})

export default HistoryScreen;