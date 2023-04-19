import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PlantSales = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/WhatsOn/PlantSales.jpg')}
      />
      <Text style={styles.text}>
        Make your garden greener by picking up some gems from our Nursery's Plant Sales.
        {'\n'}{'\n'}
        We offer a wide range of ground covers, grasses, trees and shrubs that are native to the Wollongong area, as well as other Australian natives. You can check our plant list below a week before each sale to find out what will be available.  Worm farms and compost bins can also be bought at our sales.
        {'\n'}{'\n'}
        Our expert horticulturalists are on hand at each sale to help with advice about plant selection for your garden.
        {'\n'}{'\n'}
        <Text style={{fontWeight: 'bold'}}>Please note:</Text> this Plant Sale is only open to residents of the Wollongong City Council area. Refer to 'Payment methods' below for more detail.
        
        
        {'\n'}{'\n'}
        <Text style={styles.heading}>Location</Text>{'\n'}
        65 Northfields Avenue, Keiraville{'\n'}
        (please note: there is no access to the Nursery from within the Garden, you must enter via Northfields Ave).

        {'\n'}{'\n'}
        <Text style={styles.heading}>Upcoming Sales</Text>{'\n'}
        Our next plant sales are shown in {'\b'}
          <Text
            style={{ textDecorationLine: 'underline' }}
            onPress={() => Linking.openURL('https://wollongongbotanicgarden.com.au/events/calendar')}
          >
          our calendar
          </Text>.    
      </Text>

      
    </View>
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
    borderRadius: 10,
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

export default PlantSales;