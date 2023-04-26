import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import * as tf from '@tensorflow/tfjs-react-native';


// Import screens here
import HomePage from './HomePage';
import RecognizerScreen from './RecognizerScreen';
import MapScreen from './MapScreen';
import SearchScreen from './SearchScreen';
import FavoriteScreen from './FavoriteScreen';
import SideMenu from './SideMenu';
import WhatsOnScreen from './WhatsOnScreen';
import CollectionScreen from './CollectionScreen';
import ToursScreen from './ToursScreen';
import HoursandLocationScreen from './HoursandLocationScreen';
import AboutScreen from './AboutScreen';
import PlantInfoScreen from './PlantInfoScreen';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'More') {
            iconName = focused ? 'ios-menu' : 'ios-menu-outline';
          } else if (route.name === 'Recognizer') {
            iconName = focused ? 'ios-camera' : 'ios-camera-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'ios-map' : 'ios-map-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
          }

          return <Ionicons name={iconName} size={35} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          return <Text style={{ fontSize: 15, color: focused ? 'blue' : 'gray' }}>{route.name}</Text>;
        },
        tabBarVisible: true,
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        tabBarStyle: {
          height: 80, // change this to your desired height
        },
      })}
    >
      {/* <BottomTab.Screen name="Home" component={(props) => <HomePage {...props} />} /> */}
      <BottomTab.Screen name="More" component={HomePage} />
      <BottomTab.Screen name="Recognizer" component={RecognizerScreen} />
      <BottomTab.Screen name="Map" component={MapScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen name="Favorite" component={FavoriteScreen} />
      
    </BottomTab.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Main"
      screenOptions={{
      headerShown: false,
      }}
    >
      
      <Stack.Screen name="Main" component={BottomTabNavigator} />
      <Stack.Screen name="What's On?" component={WhatsOnScreen} />
      <Stack.Screen name="Collection" component={CollectionScreen} />
      <Stack.Screen name="Tours" component={ToursScreen} />
      <Stack.Screen name="Hours and Location" component={HoursandLocationScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="PlantInfo" component={PlantInfoScreen} />
  
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        drawerContent={(props) => <SideMenu {...props} />}
        screenOptions={({ route }) => ({
          headerTitle: route.name,
        })}
      >
        <Drawer.Screen name="BoTour" component={MainStackNavigator} />
      </Drawer.Navigator>
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
