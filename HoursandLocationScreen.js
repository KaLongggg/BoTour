import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HoursAndLocation() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hours and Location</Text>
      <Text style={styles.text}>
        Wollongong Botanic Garden is open every day of the year, except Christmas Day.
      </Text>
      <Text style={styles.text}>
        Summer (September - April)
        7:00am - 7:00pm
      </Text>
      <Text style={styles.text}>
        Winter (May - August)
        7:00am - 5:00pm
      </Text>
      <Text style={styles.text}>
        Wollongong Botanic Garden is located at the top of Kembla St, Wollongong.
      </Text>
      <Text style={styles.text}>
        The closest parking is available in the Botanic Garden car park.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginTop: 20,
  },
});
