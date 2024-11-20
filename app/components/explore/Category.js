import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ResultsScreen from '../../screens/ResultsScreen';
import HomeScreen from '../../screens/HomeScreen';

const resultsName = 'Results';
const homeName = 'Home';
const Stack = createNativeStackNavigator();
function SearchClick() {
    const navigation = useNavigation();
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

class Category extends Component {
    render() {
        const {navigation} = this.props;
        const handleClick = (arg) => {
            console.log('Sent from home page:', arg);
            navigation.navigate('Results', {recipeQuery: arg });
          };        
        return(
            <TouchableOpacity style={style.ScrollStyle}
            onPress={() => handleClick(this.props.name)}   
            >
                                <View style={{flex: 2}}>
                                    <Image source ={this.props.imageUri}
                                        style = {style.Image}
                                        
                                    />
                                </View>
                                <View style={style.RecipeTitle}>
                                    <Text>
                                         {this.props.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
        );
    }
}

export default function (props) {
    const navigation = useNavigation();

    return <Category {...props} navigation={navigation} />
}


const style = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ScrollStyle: {
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.6,
        borderColor: '#2f4f4f'
    },
    Image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    RecipeTitle: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
        backgroundColor: '#f0ffff'
    }
})