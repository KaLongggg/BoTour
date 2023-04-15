import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/about.png")} style={{ width: "100%", height: 200 }} />

      <Text style={styles.heading}>Wollongong Botanic Garden</Text>

      <Text style={styles.text}>
        Set on 27 hectares at the foot of Mount Keira, Wollongong Botanic Garden is a short distance from the City Centre, and next to the University of Wollongong's main campus. We are located approximately 85 kilometres south of Sydney.
      </Text>

      <Image source={require("./assets/garden1.png")} style={styles.image} />

      <Text style={styles.subheading}>Garden Features</Text>

      <Text style={styles.text}>
        The Garden features a diverse range of native and exotic plant species, including the Rose Garden, Woodland Garden, Palm Garden, Rainforest Collection, and the Dryland Garden. The Garden is also home to a variety of wildlife such as birds, butterflies, and reptiles.
      </Text>

      <Image source={require("./assets/garden2.png")} style={styles.image} />

      <Text style={styles.subheading}>Activities and Events</Text>

      <Text style={styles.text}>
        Wollongong Botanic Garden offers a range of activities and events for visitors of all ages. These include guided walks, workshops, and special events like the popular Spring Festival and Sunset Cinema series.
      </Text>

      <Text style={styles.link} onPress={() => Linking.openURL('https://wollongongbotanicgarden.com.au/events')}>
        Visit our events page for more details
      </Text>

      <Image source={require("./assets/garden3.png")} style={styles.image} />

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
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 16,
    marginBottom: 16,
  },
});

export default About;
