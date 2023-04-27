import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const plantImages = {
    Lavender: require('./assets/PlantImage/lavender.jpg'),
    Coleus: require('./assets/PlantImage/coleus.jpg'),
    Lagerstroemia_Lipan: require('./assets/PlantImage/lagerstroemia_lipan.jpg'),
    Cantaurea: require('./assets/PlantImage/cantaurea.jpg'),
    Lucky_Nut: require('./assets/PlantImage/lucky_nut.jpg'),
  };

export const getPlantImageURI = (plantClass) => {
    const formattedPlantClass = plantClass.replace(' ', '_');
    return plantImages[formattedPlantClass];
  };

export default function TopCandidatesScreen({ route }) {
  const { topCandidates, photoURI } = route.params;
  console.log("Top Candidates:", topCandidates);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('PlantInfo', { plantClass: item.plantClass, plantProbability: (item.probability * 100).toFixed(0), photoURI })}
    >
      <Image source={getPlantImageURI(item.plantClass)} style={styles.smallPlantImage} />
      <Text style={styles.itemText}>{`${item.plantClass}: ${(item.probability * 100).toFixed(0)}%`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: photoURI }} style={styles.plantImage} />
      <Text style={styles.title}>
        Prediction Result:
      </Text>
      <FlatList
        data={topCandidates}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text>
      Click to see the information about the plant
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
  },
  itemContainer: {
    backgroundColor: '#f5f5f2',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
  },
  title:{
    fontSize: 24,
  },
  plantImage: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#ddf',
    borderRadius: 8,
    width: 224,
    height: 224,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  smallPlantImage: {
    width: 112,
    height: 112,
    borderRadius: 5,
    resizeMode: 'contain',
  },
});
