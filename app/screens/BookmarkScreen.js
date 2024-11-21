import React from 'react';
import {View, Text} from 'react-native'
import { StyleSheet } from 'react-native';


function BookmarkScreen({navigation}) {
    return (
        <View style={style.bookmarked}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={style.TextStyle}>Bookmarked Screen
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    bookmarked:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    TextStyle:{
        fontSize: 26,
        fontWeight:'bold'
    }

})

export default BookmarkScreen;