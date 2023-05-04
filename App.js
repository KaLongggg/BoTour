import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import * as tf from '@tensorflow/tfjs-react-native';
import { View } from 'react-native';


// Import screens here
import HomePage from './HomePage';
import RecognizerScreen from './RecognizerScreen';
import MapScreen from './MapScreen';
import SearchScreen from './SearchScreen';
import Favorite from './FavoriteScreen';
import SideMenu from './SideMenu';
import WhatsOnScreen from './WhatsOnScreen';
import CollectionScreen from './CollectionScreen';
import ToursScreen from './ToursScreen';
import HoursandLocationScreen from './HoursandLocationScreen';
import AboutScreen from './AboutScreen';
import PlantSales from './Sub_WhatsOnScreen/PlantSales';
import BotanicGardensDay from './Sub_WhatsOnScreen/BotanicGardensDay';
import Anniversary from './Sub_WhatsOnScreen/Anniversary';
import PlantInfoScreen from './PlantInfoScreen';
import TopCandidatesScreen from './TopCandidatesScreen';
import CapturedImage from './CapturedImage';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//Side menu
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <SideMenu {...props} />
    </DrawerContentScrollView>
  );
}

//Header
function MainStackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5F8575',
          height: 60,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
          alignSelf: 'flex-end',
        },
      }}
    >
      
      <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }}/>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="What's On?" component={WhatsOnScreen} options={{ title: "What's On"}} />
      <Stack.Screen name="Collection" component={CollectionScreen} />
      <Stack.Screen name="Tours" component={ToursScreen} />
      <Stack.Screen name="Hours and Location" component={HoursandLocationScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="PlantSales" component={PlantSales} />
      <Stack.Screen name="BotanicGardensDay" component={BotanicGardensDay} />
      <Stack.Screen name="Anniversary" component={Anniversary} /> 
      <Stack.Screen name="TopCandidates" component={TopCandidatesScreen} />
      <Stack.Screen name="PlantInfo" component={PlantInfoScreen} />
      <Stack.Screen name="CapturedImage" component={CapturedImage} options={{ title: 'Captured Image' }} />
      <Stack.Screen name="SideMenu" component={SideMenu} options={{ headerShown: false }} />

  
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  const navigationRef = React.useRef();
  
  // Add this function to handle the drawer toggle
  const toggleDrawer = () => {
    navigationRef.current?.toggleDrawer();
  };

    return (
    <BottomTab.Navigator
      ref={navigationRef}
      screenOptions={({ route }) => ({
        headerShown: false,
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

          
          if (route.name === 'Home') {
            return <Ionicons name={iconName} size={30} style={{paddingTop:10}} color={color} onPress={toggleDrawer} />;
          }

          return <Ionicons name={iconName} size={30} color={color} style={{paddingTop:10}}/>;
        },
        tabBarLabel: ({ focused, color }) => {
          return <Text style={{ fontSize: 15, color: focused ? 'blue' : 'gray', marginBottom:0 }}>{route.name}</Text>;
        },
        tabBarVisible: true,
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        tabBarStyle: {
          height: 90, // change this to your desired height
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

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
          name=" " 
          component={MainStackNavigator} 
          options={{
            drawerIcon: ({ focused, size }) => (  
              <Entypo 
                name="menu" 
                size={size + 20}  
              />
            ),
          }}
        />
      </Drawer.Navigator>
      
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
