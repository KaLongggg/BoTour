import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Linking, Dimensions } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';

export default function Collection({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={gridImages}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={
          <>
            <Text style={styles.description}>Wollongong Botanic Garden has a range of varied collections, or groups of plants to explore.
                Each collection includes plants that are either similar to each other, or would naturally live together in the ‘real’ world.
                Pick a collection below to learn more, or use our garden map to explore it for yourself!</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://wollongongbotanicgarden.com.au/__data/assets/pdf_file/0026/98441/Botanic-Garden-Web-Map-2023.pdf')}>
              <Text style={styles.link}>Wollongong Botanic Garden map PDF, 74.02 KB</Text>
            </TouchableOpacity>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image source={item.source} style={styles.image} />
          </TouchableOpacity>
        )}
      />
      <BottomTabNavigator />
    </View>
  );
}

const gridImages = [
  { source: require('./assets/Collection/garden1.jpg') },
  { source: require('./assets/Collection/garden2.jpg') },
  { source: require('./assets/Collection/garden3.jpg') },
  { source: require('./assets/Collection/garden4.jpg') },
  { source: require('./assets/Collection/garden5.jpg') },
  { source: require('./assets/Collection/garden6.jpg') },
  { source: require('./assets/Collection/garden7.jpg') },
  { source: require('./assets/Collection/garden8.jpg') },
  { source: require('./assets/Collection/garden9.jpg') },
  { source: require('./assets/Collection/garden10.jpg') },
  { source: require('./assets/Collection/garden11.jpg') },
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    padding: 10,
    textAlign: "justify",
    
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    padding: 10,
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