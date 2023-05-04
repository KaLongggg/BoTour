import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import plantData from './plantData';
import { getPlantImageURI } from './TopCandidatesScreen';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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


const PlantInfoScreen = ({ route }) => {
  const { plantClass, plantProbability, photoURI } = route.params; // Get plantProbability and photoURI
  const plantInfo = plantData[plantClass];
  const plantImageURI = getPlantImageURI(plantClass);
  const navigation = useNavigation();

  if (!plantInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Plant Information</Text>
        <Image source={{ uri: photoURI }} style={styles.plantImage} /> 
        <Text style={styles.error}>Error: Plant data not found for {plantClass}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={plantImageURI} style={styles.plantImage} />
    <Text style={styles.title}></Text>
    <Text style={styles.plantName}>{plantClass} <Text style={ [{ color: getProbabilityColor(plantProbability) }]}>({plantProbability}%)
    </Text></Text>
    <Text style={styles.title}></Text>
      <View style={styles.infoContainer}>
        <Text style={styles.description}>Description: {plantInfo.description}</Text>
        <Text style={styles.info}>Family: {plantInfo.family}</Text>
        <Text style={styles.info}>Plant Type: {plantInfo.type}</Text>
        <Text style={styles.info}>Season of Interest: {plantInfo.seasonOfInterest}</Text>
        <Text style={styles.info}>Height: {plantInfo.height}</Text>
      </View>
      <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('CapturedImage', {
              photoURI,
              plantClass,
              plantProbability,
              date: 'Example Date', // Replace with actual date and time
              location: 'Example Location', // Replace with actual location
            })
          }
        >
          <Text style={styles.buttonText}>View your image</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  plantImage: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#ddf',
    borderRadius: 5,
    width: 268,
    height: 268,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  plantName: {
    fontSize: 24,
    textAlign: 'center',
  },
  probabilityText: {
    color: 'green',
  },
  infoContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'left',
  },
  info: {
    fontSize: 18,
    textAlign: 'left',
    marginTop: 8,
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    },
    buttonText: {
    color: '#fff',
    fontSize: 18,
    },
    });

export default PlantInfoScreen;