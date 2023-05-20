# Wollongong Botanic Garden Mobile App

## Introduction

The Wollongong Botanic Garden Mobile App aims to enrich the visitor's experience at Wollongong Botanic Garden. It is designed for those who have a keen interest in botany or those who want to enjoy a self-guided tour of the garden. With key features like plant recognition, map navigation, search functionality, and informative pages, this app serves as a handy guide.

## Features

- **Plant Recognizer:** Snap a photo and identify various plant species with detailed information.
- **Map Function:** Never get lost in the garden with an interactive map to guide you.
- **Search Function:** Easily find plants, events, and features in the garden.
- **Informative Pages:** Learn about the garden's history, conservation efforts, and upcoming events.

## Technology Stack

- `React Native`: The app was built using React Native due to its cross-platform capabilities and extensive support for TensorFlow, which was integral for the implementation of the plant recognizer feature.
- `TensorFlow`: TensorFlow's comprehensive ecosystem of tools, libraries, and community resources were used to leverage machine learning for the plant recognizer feature.
- `Expo Go`: A mobile client app used for testing and previewing the project in real time. Also, the Expo CLI was used for project initialization, app building, bundling, app publishing, and dependency management.
- `React Navigation`: This was utilized for the app's navigation system, which included a bottom tab navigation system and a side menu.
- `Convolutional Neural Network (CNN)`: A custom CNN model was created using TensorFlow and a customized training dataset to recognize specific plant species found in the Wollongong Botanic Garden.
- `Python`: Used to train the CNN models with the custom dataset, where the Adam optimizer and categorical cross-entropy loss were used.
- `TensorFlow.js`: The trained CNN models were converted into a format compatible with TensorFlow.js for real-time plant recognition within the app.
- `React Native ImageBackground component`: Used for displaying a whole map picture in the map function.
- `expo-location`: The library used to request the users' consent for sharing their location data with the app and retrieve the user's location information.
- `React Native Marker component`: Built to represent an icon on the map, which displays relevant information about a plant collection when clicked.
- `JavaScript .map() function`: Used to iterate over the MarkerData.js file and retrieve information about different plant collections.
- `React useState() hook`: Utilized to manage the state of the user's search query in the search function.
- `React Native Image, StyleSheet, and Linking libraries`: Used for the implementation of informational pages like “Home”, “About”, “Hours and Location”, and “What's On”. The Image library was used for rendering images, StyleSheet for applying custom styles, and Linking for handling internal and external links.

## Prerequisites

- Node.js & npm installed on your system
- Expo CLI installed globally (`npm install -g expo-cli`)

## Installation

Navigate to the root directory of the app, and run these commands:

1. `npm install`
2. `expo start`

## App Testing - Expo Go

1. Install Expo Go on your iOS or Android device.
2. Connect your device to the same network as your development machine.
3. Open Expo Go on your device and scan the QR code displayed in the Metro Bundler interface.

For detailed instructions, refer to the official Expo documentation: https://docs.expo.dev/

## Screenshots

- Home Page:
  <img src="/assets/Screenshot/h.jpg" width="200">

- Side Menu:
  <img src="/assets/Screenshot/sm.jpg" width="200">

- Plant Recognizer
  <img src="/assets/Screenshot/Recog.jpg" width="200">

- Plant Information Page
  <img src="/assets/Screenshot/PlantInfo.jpg" width="200">

- Candidate Page
  <img src="/assets/Screenshot/Candidate.jpg" width="200">

- Map
  <img src="/assets/Screenshot/Map.jpg" width="200">

- Search
  <img src="/assets/Screenshot/se.jpg" width="200">

- Favorite
  <img src="/assets/Screenshot/Favourite.jpg" width="200">

- What's On
  <img src="/assets/Screenshot/WhatsOn.jpg" width="200">

## Contact

| Name    | Email                 |
| ------- | --------------------- |
| Ka Long | kly958@uowmail.edu.au |
| Saya    | sms595@uowmail.edu.au |
| Taobo   | tf181@uowmail.edu.au  |
| Xi      | xw776@uowmail.edu.au  |
