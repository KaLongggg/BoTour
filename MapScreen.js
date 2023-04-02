import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: -34.461818,
        longitude: 150.875984,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      
    >
      <Marker
        coordinate={{
          latitude: -34.461818,
          longitude: 150.875984,
        }}
        title="My Marker"
        description="Some description"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;
