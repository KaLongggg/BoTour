import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>About Us</Text>
      <Text style={styles.paragraph}>
        Set on 27 hectares at the foot of Mount Keira, Wollngong Botanic garden is a short distance from 
        the City Central, and next to the University of Wollngong's main campus. We are located approximately 85 
        kilometres south of Sydney.
      </Text>
      <Text style={styles.paragraph}>
        Our mission is to empower businesses with innovative and efficient
        software solutions, helping them achieve their goals and stay ahead of
        the competition. We strive for excellence in everything we do and
        always put our customers first.
      </Text>
      <Text style={styles.paragraph}>
        If you have any questions or would like to learn more about our
        services, please feel free to contact us. We'd be more than happy to
        assist you.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default About;
