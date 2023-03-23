import React from 'react';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Linking } from 'react-native';

function SideMenu(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="ios-home" size={size} color={color} />}
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="calendar" size={size} color={color} />}
        label="What's On?"
        onPress={() => props.navigation.navigate("What's On?")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons name="collections" size={size} color={color} />
        )}
        label="Collection"
        onPress={() => props.navigation.navigate('Collection')}
      />
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="walk" size={size} color={color} />}
        label="Tours"
        onPress={() => props.navigation.navigate('Tours')}
      />
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="compass" size={size} color={color} />}
        label="Discover"
        onPress={() => props.navigation.navigate('Discover')}
      />
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="navigate" size={size} color={color} />}
        label="Hours and Location"
        onPress={() => props.navigation.navigate('Hours and Location')}
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
        onPress={() => Linking.openURL('https://www.instagram.com/wollongongbotanicgarden/')}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="logo-facebook" size={size} color={color} />
        )}
        label="Facebook"
        onPress={() => Linking.openURL('https://www.facebook.com/wollongongbotanicgarden/')}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="logo-twitter" size={size} color={color} />
        )}
        label="Twitter"
        onPress={() => Linking.openURL('https://twitter.com/Wollongong_City')}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="youtube" size={size} color={color} />
        )}
        label="YouTube"
        onPress={() => Linking.openURL('https://www.youtube.com/user/WollongongCity')}
      />
    </DrawerContentScrollView>
  );
}

export default SideMenu;
