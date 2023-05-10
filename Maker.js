import React, { useState } from 'react';
import { View,  TouchableWithoutFeedback, Image,  Text, StyleSheet } from 'react-native';

function getImageCoordinates(x, y) {
    const sin = 105.26/630.43 ; 
    const cos= 622.41/630.43  ; 
    const tan= 105.26/622.41  ;
    const originLo = 150.871413;  
    const originLa = -34.411958;  
    const x_ = (x - originLo)*91.7*1000;  
    const y_ = (y - originLa)*110.270*1000;  
    const X = 630.43 - ((y_ - ((622.41 - x_)*tan))*sin + (622.41 - x_)/cos );  
    const Y = (y_ - ((622.41 - x_)*tan))*cos; 
    return { x: X, y: Y }; 
  }

export default function Marker(props) {
    const { x: m, y } = getImageCoordinates(props.lo, props.la)
    const [showText, setShowText] = useState(false);

    const handlePress = () => {
      setShowText(!showText);
    };

    return(
        <View style={[styles.Woodland_Garden, { bottom: y*1.75 , left: m*1.75}]}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container2}>
          <Image
            source={props.icon}
            style={styles.image2}
          />
          {showText && (
            <View style={styles.textContainer}>
              <Text style={styles.title}>{props.tl}</Text>
              <Text style={styles.description}>{props.ds}</Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
    )
}

const styles = StyleSheet.create({
    Woodland_Garden: {
      position: 'absolute',
      bottom: 0, 
      left: 0, 
      width: 10, 
      height: 10, 
    },
    container2: {
      position: 'relative',
      width: 20,
      height: 20,
    },
    image2: {
      width: 30,
      height: 30,
    },
    textContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      top: -50, 
      left: -50,
    },
    title: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 9,
      //justifyContent: 'center',
      //marginBottom: 0,
      marginTop: 10,
      marginLeft: 5,
    },
  });