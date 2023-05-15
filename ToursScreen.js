import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const TourScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Tours and Workshops</Text>
      <Text style={styles.description}>
        Get to know Wollongong Botanic Garden better by taking a tour or walk with us. 
        We regularly hold tours at our main Garden, as well as the other natural sites we manage. 
        Our tours require a minimum of 15 people to run.{'\n\n'}
        For those who don’t find it easy to get around, our guided Garden Discovery Tours 
        in the electronic buggy are available for groups of up to 10 people.{'\n\n'}
        We also hold regular workshops to give people skills to live more sustainably. 
        Workshops are a fun way to learn how to compost or worm farm, grow and care for 
        plants in your own garden, or even become a chicken-keeper!{'\n\n'}
        Our planned activities are shown below, but if you have a special request for a 
        group tour or workshop, get in touch and we’ll try to meet your needs.
      </Text>
      <Text style={styles.subHeader}>Upcoming tours and workshops</Text>
      <View style={styles.imagesContainer}>
        <Image source={require('./assets/Tour/tour1.jpg')} style={styles.image} />
        <Image source={require('./assets/Tour/tour2.jpg')} style={styles.image} />
        <Image source={require('./assets/Tour/tour3.jpg')} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: Dimensions.get('window').width / 3.2,
    height: Dimensions.get('window').width / 4.3,
    resizeMode: 'cover',
  },
});

export default TourScreen;
