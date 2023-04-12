import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/about.png")} style={{ width: "100%", height: 200 }} ></Image>

      <Text style={styles.text}>
        Set on 27 hectares at the foot of Mount Keira, Wollongong Botanic Garden is a short distance from the City Centre, and next to the University of Wollongong's main campus. We are located approximately 85 kilometres south of Sydney.
      </Text>
       <Image source={require("./assets/about2.png")} style={{ width: "100%", height: 200, marginTop: 20 }} ></Image>

      <Text style={styles.text}>
        This beautiful garden features various themed areas, including a rose garden, a succulent garden, and a rainforest area. It offers a peaceful and serene environment for visitors to enjoy and explore.
      </Text>

      <Image source={require("./assets/about3.png")} style={{ width: "100%", height: 200, marginTop: 20 }} ></Image>

      <Text style={styles.text}>
        The garden hosts a range of events and activities throughout the year, including guided tours, workshops, and seasonal festivals. It is a popular destination for both locals and tourists alike.
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
