import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const gridImages = [
  {
    // title: 'Collection',
    source: require('./assets/HomePage/Collection.jpg'),
    onPress: (navigation) => navigation.navigate('Collection')
      // Handle navigation to the corresponding page
  },
  {
    // title: 'Tours',
    source: require('./assets/HomePage/Tours.jpg'),
    onPress: (navigation) => navigation.navigate('Tours'),
  },
  
  {
    // title: "What's on",
    source: require('./assets/HomePage/Whatson.jpg'),
    onPress: (navigation) => navigation.navigate("What's On?")
  },
  {
    // title: 'Recognizer',
    source: require('./assets/HomePage/Camera.jpg'),
    onPress: (navigation) => navigation.navigate("Recognizer")
  },
];

const images = [
  {
    title: 'Duck Pond Rotunda',
    source: require('./assets/HomePage/image1_HomePage.jpg'),
  },
  {
    title: 'Mount Keira Summit Park',
    source: require('./assets/HomePage/image2_HomePage.jpg'),
  },
  {
    title: 'Explore Sculpture in the Garden',
    source: require('./assets/HomePage/image3_HomePage.jpg'),
  },
  {
    title: 'Kawasaki Bridge',
    source: require('./assets/HomePage/image4_HomePage.jpeg'),
  },
];

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.source} style={styles.carouselImage} />
        <Text style={styles.carouselTitle}>{item.title}</Text>
      </View>
    );
  }
  _renderGridItem(item, navigation) {
    return (
      <TouchableOpacity onPress={() => item.onPress(navigation)} style={styles.gridItem}>
        <Image source={item.source} style={styles.gridImage} />
      </TouchableOpacity>
    );
  }
  
  renderPagination() {
    const { activeIndex } = this.state;
    return (
      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex ? styles.activePaginationDot : styles.inactivePaginationDot,
            ]}
          />
        ))}
      </View>
    );
  }
  
  
  handleSnapToItem = (index) => {
    this.setState({ activeIndex: index });
  };
  
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
          onSnapToItem={this.handleSnapToItem}
        />
        {this.renderPagination()}
        <View style={styles.gridContainer}>
          {gridImages.map((item, index) => (
            <React.Fragment key={index}>
              {this._renderGridItem(item, this.props.navigation)}
            </React.Fragment>
        ))}
        </View>

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
    backgroundColor: 'Grey',
    borderRadius: 15,
    height: Dimensions.get('window').height * 0.3,
    paddingTop: 10,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  carouselImage: {
    width: '100%',
    height: '90%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  carouselTitle: {
    fontSize: 18, // Change font size
    color: 'black', // Change font color
    marginTop: 5,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // Add text shadow
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  gridItem: {
    width: Dimensions.get('window').width * 0.49,
    height: Dimensions.get('window').height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  gridImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  gridTitle: {
    fontSize: 14,
    marginTop: 0,
    textAlign: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  activePaginationDot: {
    backgroundColor: 'blue',
  },
  inactivePaginationDot: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
