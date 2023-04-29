import React from 'react';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Linking, View } from 'react-native';



function SideMenu(props) {
  const drawerItemStyle = { marginRight: -50 };
  return (
    <View style={{ flex:  1, backgroundColor: '#BCC6CC'}}>
    <DrawerContentScrollView {...props}>
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="ios-home" size={30} color={color} />}
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        labelStyle={{ fontSize: 17 }}
      />
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="calendar" size={30} color={color} />}
        label="What's On?"
        onPress={() => props.navigation.navigate("What's On?")}
        labelStyle={{ fontSize: 17 }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons name="collections" size={30} color={color} />
        )}
        label="Collection"
        onPress={() => props.navigation.navigate('Collection')}
        labelStyle={{ fontSize: 17 }}
      />
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="walk" size={30} color={color} />}
        label="Tours"
        onPress={() => props.navigation.navigate('Tours')}
        labelStyle={{ fontSize: 17 }}
      />
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="navigate" size={30} color={color} />}
        label="Hours and Location"
        onPress={() => props.navigation.navigate('Hours and Location')}
        labelStyle={{ fontSize: 17 }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="information-circle" size={30} color={color} />
        )}
        label="About"
        onPress={() => props.navigation.navigate('About')}
        labelStyle={{ fontSize: 17 }}
      />
    </DrawerContentScrollView>

    <View style={{ flexDirection: 'row'}}> 
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="logo-instagram" size={30} color={color} />
        )}
        label=""
        style={drawerItemStyle}
        onPress={() =>
          Linking.openURL('https://www.instagram.com/wollongongbotanicgarden/')
        }
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="logo-facebook" size={30} color={color} />
        )}
        label=""
        style={drawerItemStyle}
        onPress={() =>
          Linking.openURL('https://www.facebook.com/wollongongbotanicgarden/')
        }
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="youtube" size={30} color={color} />
        )}
        label=""
        style={drawerItemStyle}
        onPress={() => 
          Linking.openURL('https://www.youtube.com/@wollongongbotanicgarden8728')}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons name="language" size={30} color={color} />
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


