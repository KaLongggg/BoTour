import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const images = [
  {
    source: require('./assets/image1_HomePage.png'),
    title: 'News',
    screen: 'NewsScreen'
  },
  {
    source: require('./assets/image2_HomePage.png'),
    title: 'Collections & Conservation',
    screen: 'CollectionsScreen'
  },
  // Add more images and corresponding screens here
];

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem({ item, index }) {
    return (
      <TouchableOpacity
        style={styles.carouselItem}
        onPress={() => this.props.navigation.navigate(item.screen)}
      >
        <Image source={item.source} style={styles.carouselImage} />
        <Text style={styles.carouselTitle}>{item.title}</Text>
      </TouchableOpacity>
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
    borderRadius: 5,
    height: '80%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});