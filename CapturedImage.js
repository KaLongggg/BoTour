// CapturedImage.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const CapturedImage = ({ route }) => {
    const { photoURI, plantClass, plantProbability, date, location } = route.params;
    const navigation = useNavigation();
  
    const [isFavorite, setIsFavorite] = useState(false);
    const [favoriteId, setFavoriteId] = useState(null);
  
    useEffect(() => {
      const checkIsFavorite = async () => {
        const favorites = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
        const index = favorites.findIndex((item) => item.photoURI === photoURI);
        if (index !== -1) {
          setIsFavorite(true);
          setFavoriteId(favorites[index].id);
        }
      };
  
      checkIsFavorite();
    }, [photoURI]);
  
    const addToFavorites = async (photoURI, plantClass, plantProbability, date, location) => {
      try {
        const favorites = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
        const newFavorite = {
          id: Date.now(),
          photoURI,
          plantClass,
          plantProbability,
          date,
          location,
        };
        favorites.push(newFavorite);
        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(true);
        setFavoriteId(newFavorite.id);
        alert('Added to favorites!');
      } catch (error) {
        console.error(error);
        alert('Failed to add to favorites');
      }
    };
  
    const removeFromFavorites = async (favoriteId) => {
      try {
        const favorites = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
        const newFavorites = favorites.filter((item) => item.id !== favoriteId);
        await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
        setIsFavorite(false);
        setFavoriteId(null);
        alert('Removed from favorites!');
      } catch (error) {
        console.error(error);
        alert('Failed to remove from favorites');
      }
    };
  
    return (
      <View style={styles.container}>
        <Image source={{ uri: photoURI }} style={styles.image} />
        {isFavorite ? (
          <TouchableOpacity style={styles.button} onPress={() => removeFromFavorites(favoriteId)}>
            <MaterialIcons name="favorite" size={24} color="red" />
            <Text style={styles.buttonText}>Remove from favorites</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => addToFavorites(photoURI, plantClass, plantProbability, date, location)}>
            <MaterialIcons name="favorite" size={24} color="white" />
            <Text style={styles.buttonText}>Add to favorites</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  image: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#ddf',
    borderRadius: 5,
    width: 336,
    height: 336,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
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

export default CapturedImage;
