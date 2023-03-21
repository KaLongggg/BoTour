import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens here
import HomePage from './HomePage';
import RecognizerScreen from './RecognizerScreen';
import MapScreen from './MapScreen';
import SearchScreen from './SearchScreen';
import FavoriteScreen from './FavoriteScreen';


const Stack = createStackNavigator();
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
        tabBarLabel: ({ focused, color }) => {
          return <Text style={{ color: focused ? 'blue' : 'gray' }}>{route.name}</Text>;
        },
        tabBarVisible: true,
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      })}
    >
      <BottomTab.Screen name="Home" component={HomePage} />
      <BottomTab.Screen name="Recognizer" component={RecognizerScreen} />
      <BottomTab.Screen name="Map" component={MapScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen name="Favorite" component={FavoriteScreen} />

    </BottomTab.Navigator>
  );
}
export default function App() {
  return (
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