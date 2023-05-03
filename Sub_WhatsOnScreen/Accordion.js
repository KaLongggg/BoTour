import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleAccordion}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.arrow}>{isOpen ? '-' : '+'}</Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
    paddingRight: 35,
    width: Dimensions.get('window').width,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    paddingRight:20,
    backgroundColor: '#d3d3d3',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  arrow: {
    fontSize: 24,
  },
  content: {
    paddingRight:0,
  },
  justifyText: {
    textAlign: 'justify',
    paddingHorizontal: 30,
    paddingBottom: 10,  
  },
})

export default Accordion;