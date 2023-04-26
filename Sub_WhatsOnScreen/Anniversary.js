import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Linking } from 'react-native';

const Anniversary = () => {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{...styles.image}}
          source={require('../assets/WhatsOn/Anniversary.jpg')}
        />
        <Text style={styles.text}>
          We turned 50!{'\n'}{'\n'}
          2 January 2021 marked 50 years since Wollongong Botanic Garden opened daily to the public. Learn more about our history and timeline.{'\n'}{'\n'}
          We hosted birthday celebrations throughout 2021, encouraging people to  connect to nature in the serene surrounds of the Garden. Here are a few of the highlights from our 50th year...{'\n'}{'\n'}

          <Text style={styles.heading}>Poetry commissions</Text>{'\n'}

          <Image
            style={{...styles.image}}
            source={require('../assets/WhatsOn/Anniversary1.jpg')}
          />{'\n'}
          
          <Image
            style={{...styles.image}}
            source={require('../assets/WhatsOn/Anniversary2.jpg')}
          />{'\n'}

          <Image
            style={{...styles.image}}
            source={require('../assets/WhatsOn/Anniversary3.jpg')}
          />{'\n'}

          <Image
            style={{...styles.image}}
            source={require('../assets/WhatsOn/Anniversary4.jpg')}
          />{'\n'}
                            
            <Text>{"\n"}</Text> 
        </Text> 
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Anniversary;