# Wollongong Botanic Garden App

This mobile app is designed to enhance the visitor experience at the Wollongong Botanic Garden. It offers several key features including plant recognition, map navigation, search functionality, and informative pages sourced from the official Wollongong Botanic Garden website.

## Features

- Plant Recognizer: Identify plants by taking a photo, and receive detailed information about the plant species, including care instructions and interesting facts.
- Map Function: Find your way around the garden with an interactive map that highlights points of interest and provides directions to specific locations.
- Search Function: Quickly find information about plants, events, and other features within the garden.
- Informative Pages: Learn more about the garden's history, conservation efforts, and upcoming events directly from the Wollongong Botanic Garden's official website.

## Plant Recognizer

The Plant Recognizer uses a TensorFlow.js model to identify plants from images captured by the user's device. The model has been trained on a dataset of thousands of images, allowing it to recognize various plant species with high accuracy.

### Implementation Details

- The React Native Camera component is used to capture images.
- Images are resized and preprocessed using the `expo-image-manipulator` library.
- The TensorFlow.js model is loaded into the app using the `@tensorflow/tfjs-react-native` library.
- Predictions are made by running the captured image through the model and selecting the class with the highest probability.
- The app then displays the identified plant species, its probability, and additional information.

## Map navigation
The map navigation base on the core componets from React Native componets to design the map and using Expo third-party library to realize the the user location functionality. 

### Implementation Details

- The MapScreen function requests the user's location and displays it on the botanic garden map.
- The `expo-location library` is utilized to request and retrieve the user's location information.
- The getImageCoordinates(x, y) function transforms real-world geographic coordinates into corresponding position data.
- The app then presents the user's location using a red droplet-shaped marker by utilizing the transformed data.

