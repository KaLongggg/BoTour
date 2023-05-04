import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './HomePage';
import RecognizerScreen from './RecognizerScreen';
import MapScreen from './MapScreen';
import SearchScreen from './SearchScreen';
import Favorite from './FavoriteScreen';
import React from 'react';
import { Text } from 'react-native';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') { 
            iconName = focused ? 'ios-home' : 'ios-home-outline'; 
          } else if (route.name === 'Recognizer') {
            iconName = focused ? 'ios-camera' : 'ios-camera-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'ios-map' : 'ios-map-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          return <Text style={{ fontSize: 15, color: focused ? 'blue' : 'gray' }}>{route.name}</Text>;
        },
        tabBarVisible: true,
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        tabBarStyle: {
          height: 80, 
        },
      })}
    >
      <BottomTab.Screen name="Home" component={HomePage}/> 
      <BottomTab.Screen name="Recognizer" component={RecognizerScreen} />
      <BottomTab.Screen name="Map" component={MapScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen name="Favorite" component={Favorite} />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
