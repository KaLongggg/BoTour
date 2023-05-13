import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Modal, ActivityIndicator} from 'react-native';
import { Camera } from 'expo-camera';
import * as tf from '@tensorflow/tfjs';
import { fetch, bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as jpeg from 'jpeg-js';
import * as Buffer from 'buffer';
import "@tensorflow/tfjs-react-native";
import * as ImageManipulator from 'expo-image-manipulator';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const navigateToPlantInfo = (navigation, plantClass, plantProbability, resizedPhotoUri) => {
  navigation.navigate('PlantInfo', { plantClass, plantProbability, photoURI: resizedPhotoUri });
};

export default function RecognizerScreen() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [plantResult, setPlantResult] = useState('Capture an image to recognize the plant');
  const [model, setModel] = useState(null);
  const [loadingModel, setLoadingModel] = useState(true);

  class L2 {

    static className = 'L2';

    constructor(config) {
       return tf.regularizers.l1l2(config)
    }
}

tf.serialization.registerClass(L2);
useEffect(() => {
  (async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');

    // Initialize TensorFlow.js
    await tf.ready();
    console.log('TensorFlow ready:', tf.version.tfjs);

    // Load the model
    const modelJson = require('./assets/tfjs_model/model.json');
    const modelWeight = require('./assets/tfjs_model/group1-shard.bin');
    const loadedModel = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));
    setModel(loadedModel);
    setLoadingModel(false);
    Alert.alert('Model is ready!', 'You can now capture an image for prediction.');
  })();
}, []);


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  
  const imageToTensor = (rawImageData) => {
  const { width, height, data } = jpeg.decode(rawImageData, true);
  const buffer = new Float32Array(width * height * 3);
  let offset = 0;

  for (let i = 0; i < buffer.length; i += 3) {
    buffer[i] = (data[offset] / 127.5) - 1;
    buffer[i + 1] = (data[offset + 1] / 127.5) - 1;
    buffer[i + 2] = (data[offset + 2] / 127.5) - 1;
    offset += 4;
  }

  return tf.tensor3d(buffer, [height, width, 3]);
};


  const plantClasses = ['Lavender', 'Coleus', 'Lagerstroemia Lipan', 'Centaurea', 'Lucky Nut', 'Aloe Cameronii','Aloe Maculata', 'Camellia', 'Dracaena Draco', 'Hibiscus', 'Salvia', 'Sandburs', 'Fountain Grass'];
  const captureAndPredict = async () => {
    if (cameraRef && model) {
      console.log('Model is loaded');
      const photo = await cameraRef.takePictureAsync({ base64: true });
      const resizedPhoto = await ImageManipulator.manipulateAsync(
        photo.uri,
        [{ resize: { width: 224, height: 224 } }],
        { format: ImageManipulator.SaveFormat.JPEG, base64: true }
      );
      const rawImageData = Buffer.Buffer.from(resizedPhoto.base64, 'base64');
      const imageTensor = imageToTensor(rawImageData);
      const resizedImageTensor = tf.image.resizeBilinear(imageTensor, [224, 224]);
      const batchedImageTensor = tf.stack([resizedImageTensor]);
      const prediction = await model.predict(batchedImageTensor).data();
      const plantClassIndex = prediction.indexOf(Math.max(...prediction));
      const plantProbability = (prediction[plantClassIndex] * 100).toFixed(0); // Get the probability in percentage
      plantClasses.forEach((className, index) => {
        console.log(`${className}: ${prediction[index] * 100}%`);
      });

      console.log(plantClasses[plantClassIndex]);

      if (plantProbability > 80) {
        navigateToPlantInfo(navigation, plantClasses[plantClassIndex], plantProbability, resizedPhoto.uri);
      } else {
        const topCandidates = Array.from(prediction)
          .map((prob, index) => ({ plantClass: plantClasses[index], probability: prob }))
          .filter((item) => item.probability > 0.05)
          .sort((a, b) => b.probability - a.probability);
        const serializableTopCandidates = topCandidates.map((candidate) => ({
          plantClass: candidate.plantClass,
          probability: candidate.probability,
          }));
        navigation.navigate('TopCandidates', { topCandidates, photoURI: resizedPhoto.uri });
      }

    } else {
      console.log('Model is not loaded yet');
    }
  };
  


  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={loadingModel}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Loading model...</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </View>
      </Modal>
      <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)} />
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={captureAndPredict}
        style={styles.captureButton}
      >
          <Ionicons name="md-camera-outline" size={44} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.resultText}>{plantResult}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 3,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'center',
  },
  captureButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Change the background color to make the button more visible
    padding: 10,
    borderRadius: 50, // Updated to make the button circular
    borderWidth: 2, // Add a border
    borderColor: 'black', // Set the border color to white
    margin: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  resultText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});
