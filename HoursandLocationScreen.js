import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Image } from 'react-native';

const HoursAndLocation = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/hoursAndLocation.jpg")}
      />
      <Text style={styles.text}>
        Entry to Wollongong Botanic Garden is free!{"\n"}
      </Text>
      <Text style={styles.heading}>Opening Hours</Text>
      <Text style={styles.text}>
        We are open daily (except Christmas Day and Good Friday).{"\n"}
      </Text>

      <Text>
        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Non-daylight saving hours{"\n"}From 2 April 2023</Text>
          <Text style={styles.cellText}>7am to 5pm daily</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Daylight saving hours{"\n"}From 1 October 2023</Text>
          <Text style={styles.cellText}>7am to 6.45pm weekends{"\n"} and public holidays</Text>
        </View>{"\n"}
      </Text>

      <Text style={styles.heading}>Location</Text>
      <Text style={styles.text}>Set on 27 hectares at the foot of Mount Keira, Wollongong Botanic Garden is a short distance from the City Centre, and next to the University of Wollongong’s main campus. We are located approximately 85 kilometres south of Sydney.</Text>
      <Image
        style={styles.image}
        source={require("./assets/locationMap.jpg")}
      />

      <Text style={styles.heading}>Getting here</Text>
      <Text style={styles.text}>When travelling from the north or south take the M1 Princes Motorway, 
        take the Keiraville exit and follow the signs to the Wollongong Botanic Garden.{"\n"}
        There are 7 different entry points to the Garden.{"\n"}</Text>
      <Text style={styles.subheading}>Parking</Text>
      <Text style={styles.text}>All parking is free.{"\n"}
        We have 5 car parks:{"\n"}
        ・40 Murphys Ave, Keiraville: 2 hour limit per day
        This is our main car park, and nearest to the kiosk and playground.{"\n"}
        ・29 Madoline St, Gwynneville: 2 hour limit per day{"\n"}
        ・Administration Centre: 15 minute limit
        Visitors to our Administration Centre at 61 Northfields Avenue, Keiraville can park for 15 minutes.{"\n"}
        ・Garden Nursery: Located at 65 Northfields Avenue, Keiraville. This car park is open on Plant Sale days only.{"\n"}
        ・Gleniffer Brae: Located at 48 Murphys Ave, Keiraville.{"\n"}{"\n"}
        Street parking is also available on surrounding streets. Check street signs for any time or other parking restrictions.{"\n"}</Text>
      <Text style={styles.subheading}>Public Transport</Text>
      <Text style={styles.text}>The free Gong Shuttle Bus makes it easy to reach the Botanic Garden, and links to the City Centre, beach, University, Innovation Campus and Fairy Meadow. Visit the Gong Shuttle site for details.
        The closest train station is North Wollongong. Plan your trip at Transport NSW.</Text>
      <Text style={styles.subheading}>Cycling</Text>
      <Text style={styles.text}>Bike racks are available at the Murphys Avenue entry.
        As part of our rules bicycles cannot be ridden in the Garden. Please leave your bike outside, or walk your bike if you are passing through.{"\n"}</Text>
      <Text style={styles.subheading}>Wheelchair and pram access</Text>
      <Text style={styles.text}>The best entry for wheelchair and pram access is via Murphys Avenue. 
        Accessible parking is available near this entrance. Accessible toilets and a baby change table are also available.
        Many of our paths are wheelchair and pram-friendly. Mobility scooters are available for hire and we have an All Abilities Playground.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 390,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "#696969",
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "#696969",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: "#696969",
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 8,
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
    width: 190, // Adjust the width of the cell
    height: 55, // Adjust the height of the cell
    textAlign: 'center', // Center the text inside the cell
}
});

export default HoursAndLocation;
