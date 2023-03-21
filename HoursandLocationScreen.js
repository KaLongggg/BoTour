import React from 'react';
import { View, Text } from 'react-native';

export default function HoursandLocationScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'top' }}>
      <Text style={{ fontSize: 30, padding: 10 }}>Hours and Location</Text>
      <Text style={{ fontSize: 24 }}></Text>
      <Text style={{ fontSize: 24, padding: 10  }}>Temporary traffic changes:</Text>
      <Text style={{ fontSize: 15, padding: 10 }}>Transport for NSW will carry out temporary traffic management activities around the University of Wollongong (UOW) and TAFE NSW from Monday 27 February 2023, to reduce congestion and ensure the safety of road users. Traffic Management will be in place weekday mornings from 7.45am to 9.15am for around six weeks. For more details visit the NSW Transport website.</Text>
      <Text style={{ fontSize: 24, padding: 10 }}>Entry to Wollongong Botanic Garden is free!</Text>


    </View>
  );
}