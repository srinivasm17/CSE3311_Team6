import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import HistoryScreen from './screens/HistoryScreen';
import ResultsScreen from './screens/ResultsScreen';

//Screen names
const homeName = 'Home';
const historyName = 'History';
const settingsName = 'Settings';
const resultsName = 'Results';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === historyName) {
                        iconName = focused ? 'time' : 'time-outline'
                    } else if (rn === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={'black'}/>
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'grey',
                headerShown: false,
                tabBarHideOnKeyboard: true
            })}>

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={historyName} component={HistoryScreen}/>
            <Tab.Screen name={settingsName} component={SettingsScreen}/>

        </Tab.Navigator>
    );
}

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName={homeName}
            screenOptions={{
                headerShown: false
              }}
            >
                <Stack.Screen name={homeName} component={Tabs}/>
                <Stack.Screen name={historyName} component={Tabs}/>
                <Stack.Screen name={settingsName} component={Tabs}/>
                <Stack.Screen name={resultsName} component={ResultsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}