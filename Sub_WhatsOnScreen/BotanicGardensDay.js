import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Linking, Dimensions } from 'react-native';
import Accordion from './Accordion'

const BotanicGardensDay = () => {

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/WhatsOn/BotanicGardensDay.jpg')}
        />
        <Text style={styles.text}>
            <Text style={styles.heading}>Power of Plants!</Text>{'\n'}{'\n'}
          
            <Text style={{fontWeight: 'bold'}}>Sunday 28 May, 10am to 2pm</Text>{'\n'}{'\n'}
            Botanic Gardens Day is an annual day of celebration to shed light on the role of plants in our lives and the important work botanic gardens undertake every day to conserve them for future generations.{'\n'}{'\n'}
            This year we will be running a number of behind the scene tours, workshops and guided tours of the Garden. We'll also have a botanic art exhibition at our Towri Centre.{'\n'}{'\n'}
            You can also check out
                <Text
                style={{ textDecorationLine: 'underline' }}
                onPress={() => Linking.openURL('https://www.facebook.com/WollongongBotanicGarden')}
                >Facebook
                </Text>        
            or 
                <Text
                style={{ textDecorationLine: 'underline' }}
                onPress={() => Linking.openURL('https://www.instagram.com/wollongongbotanicgarden/')}
                >Instagram
                </Text>               
            for event updates and other plant power videos from our staff.{'\n'}{'\n'}
                            
            <Accordion title="Free Activities">
              <Text>
              <Image
                style={{...styles.activity}}
                source={require('../assets/WhatsOn/FreeActivity.jpg')}
              />
              </Text>
            </Accordion>
            <Text>{"\n"}</Text>

            <Accordion title="Plan Your Visit">
              <Text>
                The main hub of activity will be around the Towri Centre, with self-guided trails and tours taking you for a trip around the Garden!{"\n"}{"\n"}
                Public Transport: The best way to arrive is via public transport with the free shuttle bus stopping at Northfields Ave and connecting to North Wollongong train station.{"\n"}
                Driving: A limited number of car spaces are available at our car parks off Madoline Street or Murphys Avenue, or street parking is also available.{"\n"}
                Cycling: we have a number of bike racks at Garden entrances.{"\n"}
                Download our Garden map PDF, 74.02 KB and find full details (including access and mobility) on getting here.
              </Text>
            </Accordion>
            <Text>{"\n"}</Text>

            <Accordion title="About Botanic Gardens Day">
              <Text>
                More than 100 botanic gardens, arboreta and gardens across Australia and New Zealand participate in this national event to highlight the significant work undertaken at botanic gardens to ensure plants survive into the future.{'\n'}{'\n'}
                For more information visit BGANZ (Botanic Gardens Australia and New Zealand Inc.)
              </Text>
            </Accordion>
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
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  activity:{
    width: Dimensions.get('window').width,
    height: 600,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default BotanicGardensDay;
