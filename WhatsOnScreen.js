import React from 'react';
import { View, Text } from 'react-native';
import { FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function WhatsOnScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={gridImages}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
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
    onPress: (navigation) => navigation.navigate('EventsCalendar')
  },
  {
    // title: 'Sculpture in the Garden',
    source: require('./assets/WhatsOn/SculptureInTheGarden.jpg'),
    onPress: (navigation) => navigation.navigate('SculptureInTheGarden')
  },
  {
    // title: 'Plant Sales',
    source: require('./assets/WhatsOn/PlantSales.jpg'),
    onPress: (navigation) => navigation.navigate('PlantSales')
  },
  {
    // title: 'Botanic Gardens Day',
    source: require('./assets/WhatsOn/BotanicGardernsDay.jpg'),
    onPress: (navigation) => navigation.navigate('BotanicGardensDay')
  },
  {
    // title: '50th Anniversary',
    source: require('./assets/WhatsOn/50thAnniversary.jpg'),
    onPress: (navigation) => navigation.navigate('50thAnniversary')
  },
  {
    // title: 'Spaces for Hire',
    source: require('./assets/WhatsOn/SpacesForHire.jpg'),
    onPress: (navigation) => navigation.navigate('SpacesForHire')
  },
  {
    // title: 'News',
    source: require('./assets/WhatsOn/News.jpg'),
    onPress: (navigation) => navigation.navigate('News')
  },
];

const images = [
  {
    source: require('./assets/WhatsOn/EventsCalendar.jpg'),
  },
  {
    source: require('./assets/WhatsOn/SculptureInTheGarden.jpg'),
  },
  {
    source: require('./assets/WhatsOn/PlantSales.jpg'),
  },
  {
    source: require('./assets/WhatsOn/BotanicGardernsDay.jpg'),
  },
  {
    source: require('./assets/WhatsOn/50thAnniversary.jpg'),
  },
  {
    source: require('./assets/WhatsOn/SpacesForHire.jpg'),
  },
  {
    source: require('./assets/WhatsOn/News.jpg'),
  },
];

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: '40%',
    aspectRatio: 0.8,
    margin: 8,
  },
});