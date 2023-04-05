import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/about.png")} style={{ width: "100%", height: 200 }} ></Image>

      <Text style={styles.text}>
        Set on 27 hectares at the foot of Mount Keira, Wollongong Botanic Garden is a short distance from the City Centre, and next to the University of Wollongong's main campus. We are located approximately 85 kilometres south of Sydney.
      </Text>

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
    fontSize: 18,
    lineHeight: 24,
    marginTop: 10
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
});

export default About;
