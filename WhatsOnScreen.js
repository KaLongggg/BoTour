import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';


export default function WhatsOnScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={gridImages}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => item.onPress(navigation)}>
            <Image source={item.source} style={styles.image} />
          </TouchableOpacity>
        )}
      />
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
    onPress: (navigation) => navigation.navigate('PlantSales')
  },
  {
    // title: 'Botanic Gardens Day', 
    //Create a page 
    source: require('./assets/WhatsOn/BotanicGardernsDay.jpg'),
    onPress: (navigation) => navigation.navigate('BotanicGardensDay')
  },
  {
    // title: '50th Anniversary', 
    //Create a page 
    source: require('./assets/WhatsOn/50thAnniversary.jpg'),
    onPress: (navigation) => navigation.navigate('50thAnniversary')
  },
  {
    // title: 'Spaces for Hire', 
    //Create a page
    source: require('./assets/WhatsOn/SpacesForHire.jpg'),
    onPress: (navigation) => navigation.navigate('SpacesForHire')
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 14,
  },
  image: {
    width: '55%',
    aspectRatio: 0.9,
    margin: 7,
    height: 200,
    borderRadius: 10,
  },
});
