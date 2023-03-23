import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

const HoursAndLocation = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subheading}>Temporary traffic changes:</Text>
      <Text style={styles.text}>
      Starting from Monday, February 27, 2023, Transport for NSW will implement temporary traffic control measures near the University of Wollongong (UOW) and TAFE NSW to alleviate congestion and guarantee the safety of drivers. The traffic management will occur during weekday mornings, between 7.45am and 9.15am, and is expected to last for approximately six weeks. For further information, please visit the NSW Transport website.
      </Text>
      <Text style={styles.text}></Text>
      <Text style={styles.heading}>Entry to Wollongong Botanic Garden is free!</Text>
      <Text style={styles.heading}></Text>
      <Text style={styles.heading}>Hours</Text>
      <Text style={styles.text}>
        Open every day of the year, except for Christmas Day and Good Friday.
      </Text>
      <Text style={styles.subheading}>Daylight saving hours From 2 October 2022</Text>
      <Text style={styles.text}>7am to 6pm weekdays</Text>
      <Text style={styles.text}>7am to 6.45pm weekends and public holidays</Text>

      <Text style={styles.subheading}>Non-daylight saving hours From 2 April 2023</Text>
      <Text style={styles.text}>7am to 5pm daily</Text>

      <Text style={styles.heading}></Text>
      <Text style={styles.heading}>Location</Text>
      <Text style={styles.text}>
      The Wollongong Botanic Garden is situated at the base of Mount Keira, spanning 27 hectares and conveniently located close to the City Centre and the University of Wollongong's main campus. This beautiful garden can be found about 85 km to the south of Sydney.
      </Text>

      <Text style={styles.link} onPress={() => Linking.openURL('https://goo.gl/maps/wWPcomYXq2i9sfRB7')}>
        Open in Google Maps
      </Text>
      <Text style={styles.heading}></Text>
      <Text style={styles.heading}></Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
});

export default HoursAndLocation;
