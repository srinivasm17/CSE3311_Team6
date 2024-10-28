import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, Image, ImageBackground} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

import ResultsScreen from '../screens/ResultsScreen';
import HomeScreen from '../screens/HomeScreen';

const resultsName = 'Results';
const homeName = 'Home';
const Stack = createNativeStackNavigator();

function SearchClick() {
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName={resultsName}
            screenOptions={{
                headerShown: false
              }}>
                <Stack.Screen name={resultsName} component={ResultsScreen}/>
                <Stack.Screen name={homeName} component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default function SearchBar() {
    const [text, setText] = useState("");
    const navigation = useNavigation();


    const handleInputChange = (text) => {
        setText(text);
      }

      const ButtonHandler = () =>{
        console.log('Submitted text:', text)
        navigation.navigate('Results', {recipeQuery: text });
        setText('');
      }

    return (
        <View style={style.Assembler}>
        <View style={style.Main}>
            <TextInput 
                style={style.Input}
                placeholder='Ask EasyChef...' 
                value = {text}
                onChangeText={handleInputChange}
                onSubmitEditing={ButtonHandler}
                />
        </View>
        <View style={style.buttonP}>
                <TouchableOpacity
                    onPress={ButtonHandler}>
                    <AntDesign style={style.icon} name='search1' size={25}/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
  }

  const style = StyleSheet.create({
    Assembler:{
        flexDirection: 'row',
        marginTop: 30,
        justifyContent:'center'
    },
    Main:{
        backgroundColor: '#FFF',
        width: 250,
        height: 50,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderWidth: 2,
        borderColor: '#C0C0C0',
 
    },
    Input:{
        marginLeft: 10,
        marginTop: 9,
        fontSize: 18
    },
    buttonP:{
        height: 50,
        width: 70,
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderColor: '#C0C0C0',
        alignItems:'center',
        justifyContent:'center'

    },
    icon:{
        marginRight: 5
    }
    
  })