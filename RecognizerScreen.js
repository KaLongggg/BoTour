import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as jpeg from 'jpeg-js';
import * as FileSystem from 'expo-file-system';
import * as base64js from 'base64-js';
import base64 from 'react-native-base64';
import * as Asset from 'expo-asset'; // Import expo-asset

const loadWeightsBuffers = async () => {
  const assets = await Promise.all([
    Asset.loadAsync(require('./assets/tfjs_model/group1-shard1of5.bin')),
    Asset.loadAsync(require('./assets/tfjs_model/group1-shard2of5.bin')),
    Asset.loadAsync(require('./assets/tfjs_model/group1-shard3of5.bin')),
    Asset.loadAsync(require('./assets/tfjs_model/group1-shard4of5.bin')),
    Asset.loadAsync(require('./assets/tfjs_model/group1-shard5of5.bin')),
  ]);

  const arrayBuffers = await Promise.all(
    assets.map((asset) => FileSystem.readAsStringAsync(asset.localUri, { encoding: FileSystem.EncodingType.Base64 }))
  );

  return arrayBuffers.map((base64Data) => base64js.toByteArray(base64Data).buffer);
};


const mergeWeights = (weightsBuffers) => {
  const totalBytes = weightsBuffers.reduce((acc, arr) => acc + arr.byteLength, 0);
  const combinedWeights = new Uint8Array(totalBytes);
  let offset = 0;
  weightsBuffers.forEach((buffer) => {
    combinedWeights.set(new Uint8Array(buffer), offset);
    offset += buffer.byteLength;
  });
  return combinedWeights.buffer;
};


const RecognizerScreen = () => {
  const [isTfReady, setIsTfReady] = useState(false);
  const [model, setModel] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await tf.ready();
      setIsTfReady(true);
  
      const modelJson = require('./assets/tfjs_model/model.json');
      
      const modelWeightsBuffers = await loadWeightsBuffers(); // Load the weights buffers
  
      const combinedWeights = mergeWeights(modelWeightsBuffers);
  
      const model = await tf.loadLayersModel(bundleResourceIO(modelJson, combinedWeights));
      setModel(model);
    };
    init();
  }, []);


  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync({
        base64: true,
        quality: 0.8,
      });
  
      const rawImageData = base64.toByteArray(photo.base64);
      const { width, height, data } = jpeg.decode({ data: rawImageData, format: 'RGBA' }, { useTArray: true });
      const imageTensor = tf.browser.fromPixels({ data, width, height, numChannels: 4 }, 4);
      const resizedTensor = tf.image.resizeBilinear(imageTensor, [224, 224]);
      const processedTensor = resizedTensor.slice([0, 0, 0], [-1, -1, 3]).expandDims(0);
  
      if (model) {
        const prediction = model.predict(processedTensor);
        // Process the prediction and display the result
      }
    }
  };

  if (!isTfReady) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24 }}>Loading TensorFlow.js</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Recognizer Screen</Text>
      <Camera
        style={{ flex: 1, width: '100%' }}
        type={Camera.Constants.Type.back}
        autoFocus={Camera.Constants.AutoFocus.on}
        onCameraReady={() => {
          console.log('Camera ready');
          setIsCameraReady(true); // Update camera ready state
        }}
        ref={(ref) => setCameraRef(ref)}
      />
      <TouchableOpacity onPress={takePicture} style={{ alignSelf: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 20, color: 'white' }}>Take Picture</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecognizerScreen;