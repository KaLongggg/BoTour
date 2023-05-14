import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking } from 'react-native';

const About = () => {
  const openPdfLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={require("./assets/about.jpg")} style={styles.image} />
      <Text style={styles.text}>
        We officially opened to the public in January 1971. See our&nbsp;
        <Text style={styles.link} onPress={() => Linking.openURL('https://wollongongbotanicgarden.com.au/learn/history')}>History page</Text>          
      &nbsp;to learn more about the Garden's fascinating past.{"\n"}{"\n"}
        Wollongong Botanic Garden is a service of Wollongong City Council. The way we operate is guided by Council's policies and Plans of Management. You can read these Plans below:{"\n"}{"\n"}
        <Text
            style={styles.link}
            onPress={() =>
              openPdfLink(
                'https://wollongong.nsw.gov.au/__data/assets/pdf_file/0011/31007/Wollongong-Botanic-Garden-Plan-of-Management-2020.pdf' // Replace with your actual PDF URL
              )
            }
          >
            ・Wollongong Botanic Garden and Gleniffer Brae Plan of Management PDF, 1871.19 KB
          </Text>{"\n"}{"\n"}
          <Text
            style={styles.link}
            onPress={() =>
              openPdfLink(
                'https://wollongong.nsw.gov.au/__data/assets/pdf_file/0027/67563/Mount-Keira-Summit-Park-Plan-of-Management.PDF' // Replace with your actual PDF URL
              )
            }
          >
            ・Mount Keira Summit Park Plan of Management PDF, 3544.06 KB
          </Text>
          {"\n"}
          {"\n"}

        If you have any questions, comments of feedback about Wollongong Botanic Garden, please see our&nbsp;
          <Text style={styles.link} onPress={() => Linking.openURL('https://wollongongbotanicgarden.com.au/visit/hours-and-location/contact-us')}>Contact Us</Text>
          &nbsp;page for ways you can get in touch.
      </Text>
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
    width: 395,
    height: 220,
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
    marginTop: 8,
    marginBottom: 4,
    color: "#696969",
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    marginTop: 10,
    textAlign: 'justify',
    color: "#696969",
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
});

export default About;
