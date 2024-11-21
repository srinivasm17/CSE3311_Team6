import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Screens
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import HistoryScreen from './screens/HistoryScreen';
import ResultsScreen from './screens/ResultsScreen';
import BookmarkScreen from './screens/BookmarkScreen';

//Screen names
const homeName = 'Home';
const historyName = 'History';
const settingsName = 'Settings';
const resultsName = 'Results';

//Top tab
const TopTab = createMaterialTopTabNavigator();

//Stack
const Stack = createNativeStackNavigator();

//Bottom tab
const Tab = createBottomTabNavigator();

function TopTabs() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Recently searched" component={HistoryScreen}/>
            <TopTab.Screen name="Bookmarked" component={BookmarkScreen} />
        </TopTab.Navigator>
    )
}

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
                headerShown: true,
                tabBarHideOnKeyboard: true,
                headerTitleStyle: {
                    fontSize: 29, // Adjust the font size here
                    fontWeight: 'bold', // Optional: Adjust font weight
                  }
            })}>

            <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name={historyName} component={TopTabs}/>
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