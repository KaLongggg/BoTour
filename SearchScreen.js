import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // 在这里实现搜索功能，例如从API获取数据
    // 这里仅模拟数据
    const mockData = [
      { id: '1', title: 'Result 1' },
      { id: '2', title: 'Result 2' },
      { id: '3', title: 'Result 3' },
    ];

    setSearchResults(mockData);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          onChangeText={setSearchText}
          value={searchText}
          placeholder="Search"
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="ios-search" size={30} color="blue" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemText: {
    fontSize: 16,
  },
});
export default SearchScreen;
