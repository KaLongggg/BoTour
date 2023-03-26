import React from 'react';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Linking, View } from 'react-native';



function SideMenu(props) {
  const drawerItemStyle = { marginRight: -50 };
  return (
    <View style={{ flex:  1}}>
    <DrawerContentScrollView {...props}>
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="ios-home" size={size} color={color} />}
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        labelStyle={{ fontSize: 16 }}
      />
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="calendar" size={size} color={color} />}
        label="What's On?"
        onPress={() => props.navigation.navigate("What's On?")}
        labelStyle={{ fontSize: 16 }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons name="collections" size={size} color={color} />
        )}
        label="Collection"
        onPress={() => props.navigation.navigate('Collection')}
        labelStyle={{ fontSize: 16 }}


      />
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="walk" size={size} color={color} />}
        label="Tours"
        onPress={() => props.navigation.navigate('Tours')}
        labelStyle={{ fontSize: 16 }}

      />
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="compass" size={size} color={color} />}
        label="Discover"
        onPress={() => props.navigation.navigate('Discover')}
        labelStyle={{ fontSize: 16 }}
      />
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="navigate" size={size} color={color} />}
        label="Hours and Location"
        onPress={() => props.navigation.navigate('Hours and Location')}
        labelStyle={{ fontSize: 16 }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="information-circle" size={size} color={color} />
        )}
        label="About"
        onPress={() => props.navigation.navigate('About')}
        labelStyle={{ fontSize: 16 }}
      />
    </DrawerContentScrollView>
    <View style={{ flexDirection: 'row'}}> 
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="logo-instagram" size={size} color={color} />
        )}
        label=""
        style={drawerItemStyle}
        onPress={() =>
          Linking.openURL('https://www.instagram.com/wollongongbotanicgarden/')
        }
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="logo-facebook" size={size} color={color} />
        )}
        label=""
        style={drawerItemStyle}
        onPress={() =>
          Linking.openURL('https://www.facebook.com/wollongongbotanicgarden/')
        }
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="youtube" size={size} color={color} />
        )}
        label=""
        style={drawerItemStyle}
        onPress={() => 
          Linking.openURL('https://www.youtube.com/channel/UCe0yl5iYHl5VqNogb6fN9QQ')}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons name="language" size={size} color={color} />
        )}
        label=""
        style={drawerItemStyle}
        onPress={() => {
          Linking.openURL('https://wollongongbotanicgarden.com.au/')
        }}
      />
    </View>
    
    
    
    </View>
  );
}

export default SideMenu;
