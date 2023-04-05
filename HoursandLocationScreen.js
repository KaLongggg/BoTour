import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Image } from 'react-native';

const HoursAndLocation = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require("./assets/map.png")} style={{ width: "100%", height: 200 }} ></Image>
      <Text style={styles.subheading}>Opening Hours</Text>
      <Text style={styles.text}>
        We are open daily (except Christmas
        Day and Good Friday).
      </Text>
      <Text style={styles.text}>Daylight saving hours</Text>
      <Text style={styles.heading}>From 2 October 2022</Text>
      <Text style={styles.text}>- 7am to 6pm weekdays</Text>
      <Text style={styles.text}>- 7am to 6.45pm weekends and public holidays</Text>
      <Text style={styles.text}>
        Non-daylight saving hours
      </Text>
      <Text style={styles.subheading}>From 2 April 2023</Text>
      <Text style={styles.text}>- 7am to 5pm daily</Text>

      <Text style={styles.heading}>Location</Text>
      <Text style={styles.text}>Murphys Avenue, Keiraville</Text>

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
