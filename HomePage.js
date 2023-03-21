import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const images = [
  {
    source: require('./assets/image1_HomePage.jpeg'),
  },
  {
    source: require('./assets/image2_HomePage.jpg'),
  },
  {
    source: require('./assets/image3_HomePage.jpg'),
  },
];

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.source} style={styles.carouselImage} />
        <Text style={styles.carouselTitle}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          data={images}
          renderItem={this._renderItem.bind(this)}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width * 0.75}
          layout={'default'}
          loop={true}
          autoplay={true}
          autoplayDelay={2000}
          autoplayInterval={4000}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  carouselItem: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: Dimensions.get('window').height * 0.3,
    paddingTop: 10,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
});