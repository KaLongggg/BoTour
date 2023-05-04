import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Linking, Dimensions } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';

export default function WhatsOnScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={gridImages}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row} // Update this line
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => item.onPress(navigation)}>
            <Image source={item.source} style={styles.image} />
          </TouchableOpacity>
        )}
      />
      <BottomTabNavigator />
    </View>
  );
}

const gridImages = [
  {
    // title: 'Events Calendar',
    source: require('./assets/WhatsOn/EventsCalendar.jpg'),
    onPress: () => {
      Linking.openURL('https://wollongongbotanicgarden.com.au/events/calendar');
    },
  },
  {
    // title: 'Sculpture in the Garden',
    source: require('./assets/WhatsOn/SculptureInTheGarden.jpg'),
    onPress: () => {
      Linking.openURL('https://wollongongbotanicgarden.com.au/events/sculpture-in-the-garden');
    },
  },
  {
    // title: 'Plant Sales',
    // Create a page but omit 'Upcoming Sales'
    source: require('./assets/WhatsOn/PlantSales.jpg'),
    onPress: (navigation) => navigation.navigate('PlantSales'),
  },
  {
    // title: 'Botanic Gardens Day',
    //Create a page
    source: require('./assets/WhatsOn/BotanicGardensDay.jpg'),
    onPress: (navigation) => navigation.navigate('BotanicGardensDay'),
  },
  {
    // title: '50th Anniversary',
    //Create a page
    source: require('./assets/WhatsOn/Anniversary.jpg'),
    onPress: (navigation) => navigation.navigate('Anniversary'),
  },
  {
    // title: 'Spaces for Hire',
    //Create a page
    source: require('./assets/WhatsOn/SpacesForHire.jpg'),
    onPress: (navigation) => navigation.navigate('SpacesForHire'),
  },
  {
    // title: 'News',
    source: require('./assets/WhatsOn/News.jpg'),
    onPress: () => {
      Linking.openURL('https://wollongongbotanicgarden.com.au/events/news');
    },
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 14,
  },
  row: {
    flex: 1, // Add this line
    justifyContent: 'space-between', // Add this line
    marginBottom: 14, // Add this line
  },
  image: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 0,
    borderRadius: 10,
  },
});