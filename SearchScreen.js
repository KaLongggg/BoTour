import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const updateSearch = (search) => {
    setSearch(search);
    // 在此处添加数据过滤和搜索逻辑
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
        round
      />
      <FlatList
        data={data}
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
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 16,
  },
  itemText: {
    fontSize: 18,
  },
});

export default SearchScreen;
