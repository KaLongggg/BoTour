import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Linking } from 'react-native';

function SideMenu(props) {
  return (
    <DrawerContentScrollView {...props}>
        <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="ios-home" size={size} color={color} />
        )}
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
        <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="calendar" size={size} color={color} />
        )}
        label="What's On?"
        onPress={() => props.navigation.navigate("What's On?")}
      />
        <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="book" size={size} color={color} />
        )}
        label="My Journal"
        onPress={() => props.navigation.navigate('My Journal')}
      />
        <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="walk" size={size} color={color} />
        )}
        label="Tours"
        onPress={() => props.navigation.navigate('Tours')}
      />
        <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="compass" size={size} color={color} />
        )}
        label="Discover"
        onPress={() => props.navigation.navigate('Discover')}
      />
        <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="navigate" size={size} color={color} />
        )}
        label="Getting Here"
        onPress={() => props.navigation.navigate('Getting Here')}
      />
        <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="information-circle" size={size} color={color} />
        )}
        label="About"
        onPress={() => props.navigation.navigate('About')}
      />
        <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons name="language" size={size} color={color} />
        )}
        label="Language"
        onPress={() => {
          // Implement language selection functionality here
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="logo-instagram" size={size} color={color} />
        )}
        label="Instagram"
        onPress={() =>
          Linking.openURL(
            'https://www.instagram.com/wollongongbotanicgarden/'
          )
        }
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="logo-facebook" size={size} color={color} />
        )}
        label="Facebook"
        onPress={() =>
          Linking.openURL(
            'https://www.facebook.com/wollongongbotanicgarden/'
          )
        }
      />
    </DrawerContentScrollView>
  );
}

export default SideMenu;