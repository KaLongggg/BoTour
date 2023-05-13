import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const plantImages = {
  Lavender: require('./assets/PlantImage/lavender.jpg'),
  Coleus: require('./assets/PlantImage/coleus.jpg'),
  Lagerstroemia_Lipan: require('./assets/PlantImage/lagerstroemia_lipan.jpg'),
  Centaurea: require('./assets/PlantImage/centaurea.jpg'),
  Lucky_Nut: require('./assets/PlantImage/lucky_nut.jpg'),
  Aloe_Cameronii: require('./assets/PlantImage/aloe_cameronii.jpg'),
  Aloe_Maculata: require('./assets/PlantImage/aloe_maculata.jpg'),
  Camellia: require('./assets/PlantImage/camellia.jpg'),
  Dracaena_Draco: require('./assets/PlantImage/dracaena_draco.jpg'),
  Hibiscus: require('./assets/PlantImage/hibiscus.jpg'),
  Salvia: require('./assets/PlantImage/salvia.jpg'),
  Sandburs: require('./assets/PlantImage/sandburs.jpg'),
};

const getProbabilityColor = (probability) => {
  if (probability >= 90) {
    return 'green';
  } else if (probability >= 80) {
    return 'limegreen';
  } else if (probability >= 70) {
    return 'lightgreen';
  } else if (probability >= 60) {
    return 'yellowgreen';
  } else if (probability >= 50) {
    return 'yellow';
  } else if (probability >= 40) {
    return 'gold';
  } else if (probability >= 30) {
    return 'orange';
  } else if (probability >= 20) {
    return 'orangered';
  } else if (probability >= 10) {
    return 'red';
  } else {
    return 'darkred';
  }
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
      onPress={() =>
        navigation.navigate('PlantInfo', {
          plantClass: item.plantClass,
          plantProbability: (item.probability * 100).toFixed(0),
          photoURI,
        })
      }
    >
      <Image source={getPlantImageURI(item.plantClass)} style={styles.smallPlantImage} />
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.plantClass}:<Text
          style={[
            styles.itemText,
            { color: getProbabilityColor((item.probability * 100).toFixed(0)) },
          ]}
        >
          {(item.probability * 100).toFixed(0)}%
        </Text></Text>
        
      </View>
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
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  smallPlantImage: {
    width: 98,
    height: 98,
    borderRadius: 5,
    resizeMode: 'contain',
  },
});
