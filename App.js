import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomePage from './HomePage';
// Import other screens here

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'More') {
            iconName = focused ? 'ios-menu' : 'ios-menu-outline';
          } else if (route.name === 'Recognizer') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'ios-map' : 'ios-map-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <BottomTab.Screen name="More" component={HomePage} />
      {/* Add other screens for Recognizer, Map, Search, and Favorite here */}
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomePage" component={BottomTabNavigator} />
        {/* Add other screens here */}
      </Stack.Navigator>
=======
    <View style={styles.container}>
      <Text>Hi Group 24</Text>
>>>>>>> 4b49c608dc1c5f7ef2e722f825dea349e818205e
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});