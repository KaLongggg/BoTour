import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, FlatList, Linking, ScrollView } from 'react-native';
import Accordion from './Accordion'

const BotanicGardensDay = () => {

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const data = [
        {
            title: 'Free Activities',
            content: (
                <Text>{"\n"}
                <View style={styles.tableHeader}>
                    <Text style={styles.headerText}>Time</Text>
                    <Text style={styles.headerText}>Activity</Text>
                    <Text style={styles.headerText}>Location</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.cellText}>10am to 2pm</Text>
                    <Text style={styles.cellText}>Native Plant Sale</Text>
                    <Text style={styles.cellText}>Towri Centre</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.cellText}>11am</Text>
                    <Text style={styles.cellText}>Verge Garden Sit n' Chat</Text>
                    <Text style={styles.cellText}>Eucalyptus Lawn</Text>
                </View>
                </Text>
            ),
        },
        {
            title: 'Plan Your Visit',
            content: (
                <Text>{"\n"}
                The main hub of activity will be around the Towri Centre, with self-guided trails and tours taking you for a trip around the Garden!{"\n"}{"\n"}
                Public Transport: The best way to arrive is via public transport with the free shuttle bus stopping at Northfields Ave and connecting to North Wollongong train station.{"\n"}
                Driving: A limited number of car spaces are available at our car parks off Madoline Street or Murphys Avenue, or street parking is also available.{"\n"}
                Cycling: we have a number of bike racks at Garden entrances.{"\n"}
                Download our Garden map PDF, 74.02 KB and find full details (including access and mobility) on getting here.
                </Text>
            ),
        },
        {
            title: 'About Botanic Gardens Day',
            content: (
                <Text>{"\n"}
                More than 100 botanic gardens, arboreta and gardens across Australia and New Zealand participate in this national event to highlight the significant work undertaken at botanic gardens to ensure plants survive into the future.{'\n'}{'\n'}
                For more information visit BGANZ (Botanic Gardens Australia and New Zealand Inc.)
                </Text>
            ),
        },
    ];

    const renderItem = ({ item }) => (
        <Accordion title={item.title}>
            {item.content}
        </Accordion>
    );

  return (
    <FlatList
            ListHeaderComponent={
              <>
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
            You can also check out &nbsp;
                <Text
                style={{ textDecorationLine: 'underline' }}
                onPress={() => Linking.openURL('https://www.facebook.com/WollongongBotanicGarden')}
                >Facebook
                </Text>        
            &nbsp; or &nbsp;
                <Text
                style={{ textDecorationLine: 'underline' }}
                onPress={() => Linking.openURL('https://www.instagram.com/wollongongbotanicgarden/')}
                >Instagram
            &nbsp;</Text>               
            for event updates and other plant power videos from our staff.{'\n'}{'\n'}
        </Text>
        </View>
        </>
        }

            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />
  );
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
  },
  image: {
    width: 370,
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
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
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: 'black',
    paddingBottom: 5,
    marginBottom: 5,
    backgroundColor: '#ffffff',
    width: 360,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cellText: {
    fontSize: 14,
    borderColor: 'black', // Set border color
    width: 120, // Adjust the width of the cell
    height: 55, // Adjust the height of the cell
    textAlign: 'center', // Center the text inside the cell
  },
});

export default BotanicGardensDay;
