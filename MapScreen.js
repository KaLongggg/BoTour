import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Image, ScrollView, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MarkerData from './MakerData';
import Marker from './Maker';

function getImageCoordinates(x, y) {
  const sin = 105.26/630.43 ; 
  const cos= 622.41/630.43  ; 
  const tan= 105.26/622.41  ;
  const originLo = 150.871413;  
  const originLa = -34.411958;  
  const x_ = (x - originLo)*91.7*1000;  
  const y_ = (y - originLa)*110.270*1000;  
  const X = 630.43 - ((y_ - ((622.41 - x_)*tan))*sin + (622.41 - x_)/cos );  
  const Y = (y_ - ((622.41 - x_)*tan))*cos;  
  return { x: X, y: Y }; 
}

export default function MapScreen() {
  const [location, setLocation] = useState(null);

  
  useEffect(() => {
    const askForLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync();
        setLocation(location);
      }
    };
    askForLocationPermission();
  }, []);
  const x = location ? location.coords.longitude : null;
  const y = location ? location.coords.latitude : null;

  //this only for test, you can chagne the longitude & latitude from google map to test
   //const { x: X, y: Y } = getImageCoordinates(150.875106, -34.409332) || { x: null, y: null };
   // this only for test, you can chagne the longitude & latitude from google map to test

  //this is the reall code, you require to deleted "//" when using the app
  const { x: X, y: Y } = x && y ? getImageCoordinates(x, y) : { x: null, y: null };
  //this is the reall code

  const markerElements = MarkerData.map((marker, index) => {
    return (
      <Marker key={index} lo={marker.lo} la={marker.la} icon={marker.icon} tl={marker.tl} ds={marker.ds} />
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <ImageBackground
          style={styles.image}
          source={require('./assets/c.png')}
        >
          {markerElements}
          <Image source={require('./assets/location.png')} 
          style={[styles.origin, { bottom: Y *1.65 , left: X*1.65}]} /> 
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 630.43 * 1.75,  
    height: 402.78 * 1.75, 
    resizeMode: 'cover',
    bottom: 0, 
    left: 0, 
    
  },
  origin: {
    position: 'absolute',
    bottom: 0, 
    left: 0, 
    width: 30, 
    height: 30, 
  },
});
