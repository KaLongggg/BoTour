// CapturedImage.js
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CapturedImage = ({ route }) => {
  const { photoURI, plantClass, plantProbability, date, location } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={{ uri: photoURI }} style={styles.image} />
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
