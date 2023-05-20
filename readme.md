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

## “Expo go” Server Setup and App Testing Guide

An instructions on how to start the server using the command "expo start" and how to test the app using the "expo go" tool.

### Starting the Server - expo start

To start the server for your app, follow these steps:

1.Make sure you have Expo CLI installed on your system. If not, you can install it by running the following command:

**- npm install -g expo-cli -**

2.Navigate to the root directory of your app using the command line.

3.Run the following command to install the required dependencies:

**- npm install -**

4.Once the dependencies are installed, you can start the server by running the following command:

**- expo start -**

5.The Expo CLI will start building the JavaScript bundle and launch a Metro Bundler interface in your default web browser.

6.In the Metro Bundler interface, you'll see a QR code on the left side of the screen.

7.You can now open the app on your device by using one of the following options:

**[Physical Device:]** Install the Expo Go app from the App Store (iOS) or Google Play Store (Android) on your device. Then, scan the QR code using the Expo Go app.

**[Simulator / Emulator:]** If you have a simulator/emulator set up, you can click on the appropriate option in the Metro Bundler interface to open the app.

8.The app should now launch on your device or simulator/emulator, allowing you to test it.

### App Testing - expo go

To test the app on a physical device using Expo Go, follow these steps:

1.Install the Expo Go app from the App Store (iOS) or Google Play Store (Android) on your device.

2.Make sure your device is connected to the same network as the machine running the Expo server.

3.Open the Expo Go app on your device.

4.Tap on the Scan QR Code option within the Expo Go app.

5.In the Metro Bundler interface on your computer (launched using "expo start"), you'll see a QR code on the left side of the screen.

6.Scan the QR code using the Expo Go app on your device.

7.The app should now launch on your device, allowing you to test it.

Please note that in order to use Expo Go for testing, your machine running the Expo server and your device should be connected to the same network.

For additional information on using Expo, refer to the official Expo documentation: https://docs.expo.dev/
