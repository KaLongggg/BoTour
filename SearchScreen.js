// SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Linking, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // import the icon component

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    Linking.openURL(`https://wollongongbotanicgarden.com.au/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <FontAwesome name="search" size={20} color="white" />
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 20 }}>Suggestions:</Text>
      <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('https://wollongongbotanicgarden.com.au/bg-events/plant-sales/native-plant-sale11')}>
        <Image source={require('./assets/Search/native_plant_sale.jpg')} style={styles.image} />
        <Text style={styles.linkText}>Native plants sales</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('https://wollongongbotanicgarden.com.au/bg-events/botanic-gardens-day')}>
        <Image source={require('./assets/Search/botanic_garden_day.jpg')} style={styles.image} />
        <Text style={styles.linkText}>Botanic Garden Day</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('https://goslowforamo.com/wollongong-botanic-gardens-nature-wellness-trail/')}>
        <Image source={require('./assets/Search/go_slow_for_a_mo.jpg')} style={styles.image} />
        <Text style={styles.linkText}>Go Slow for a 'Mo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  searchButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D9970',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
  link: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  linkText: {
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: '100%', 
    height: 120, 
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default SearchScreen;