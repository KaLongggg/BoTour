import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import plantData from './plantData';

const PlantInfoScreen = ({ route }) => {
  const { plantClass, plantProbability, photoURI } = route.params; // Get plantProbability and photoURI
  const plantInfo = plantData[plantClass];

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
    <View style={styles.container}>
      <Image source={{ uri: photoURI }} style={styles.plantImage} /> 
      <Text style={styles.title}></Text>
      <Text style={styles.plantName}>{plantClass} ({plantProbability}%)</Text>
      <Text style={styles.title}></Text>
      <Text style={styles.description}>Description: {plantInfo.description}</Text>
      <Text style={styles.info}>Family: {plantInfo.family}</Text>
      <Text style={styles.info}>Plant Type: {plantInfo.type}</Text>
      <Text style={styles.info}>Season of Interest: {plantInfo.seasonOfInterest}</Text>
      <Text style={styles.info}>Height: {plantInfo.height}</Text>
    </View>
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
    borderColor: '#000',
    borderRadius: 5,
    width: 336,
    height: 336,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  plantName: {
    fontSize: 24,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'left',
    paddingHorizontal: 10,
  },
  info: {
    fontSize: 18,
    textAlign: 'left',
    paddingHorizontal: 10,
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default PlantInfoScreen;