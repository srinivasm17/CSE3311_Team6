import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import SearchBar from '../components/SearchBar';

export default function HomeScreen(props) {
    return (
        <View style={style.BG}>
            <SearchBar/>
            <Text
                onPress={() => alert('This is the Home page (placeholder).')}
                style={style.HomeText}>Home Screen
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    BG: {
        backgroundColor: '#b0c4de',
        flex: 1
    },
    HomeText:{
        fontSize: 26,
        fontWeight:'bold',
        justifyContent:'center',
        textAlign:'center'
    }
})
