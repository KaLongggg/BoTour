import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import plantData from './plantData';
import { getPlantImageURI } from './TopCandidatesScreen';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
      <Text style={styles.plantName}>{plantClass} ({plantProbability}%)</Text>
      <Text style={styles.title}></Text>
      <Text style={styles.description}>Description: {plantInfo.description}</Text>
      <Text style={styles.info}>Family: {plantInfo.family}</Text>
      <Text style={styles.info}>Plant Type: {plantInfo.type}</Text>
      <Text style={styles.info}>Season of Interest: {plantInfo.seasonOfInterest}</Text>
      <Text style={styles.info}>Height: {plantInfo.height}</Text>
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
    width: 336,
    height: 336,
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