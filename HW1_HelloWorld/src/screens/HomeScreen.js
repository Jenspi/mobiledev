import React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";

const HomeScreen = () => {
  //const myText = '𝓙𝓮𝓷𝓷𝔂\n\nI visited Mackinaw Island this summer in northern Michigan. No cars are allowed on the entire island! :)\n\nMy favorite mobile application is Love & Pies... it\'s a merge game that I believe is supposed to be a mystery about who burned a café down, but I don\'t care about the dialogue so I don\'t really know what\'s going on.';
  const myHeader = '𝓙𝓮𝓷𝓷𝔂\n';
  const myText = 'test\n\ntest\n\ntest';
  return (
    <ScrollView style={styles.container}>
      <View style={styles.frame}></View>
        <Text style={styles.header}>{myHeader}</Text>
        <Text style={styles.text}>{myText}</Text>
        <View style={styles.frame}></View>
        <Image style={styles.logo}
                source={require('./favicon.png')}/>
        <View style={styles.frame}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkseagreen',
    padding: 25,
  },
  frame: {
    backgroundColor: 'darkseagreen',
    height: 20,
  },
  header: {
    fontFamily: 'Cochin',
    color: 'darkcyan',
    backgroundColor: 'darkseagreen',
    fontSize: 40,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  text: {
    fontFamily: 'Cochin',
    color: 'darkcyan',
    backgroundColor: 'darkseagreen',
    fontSize: 40,
    // fontWeight: 'bold',
    // fontStyle: 'italic',
    // textDecorationLine: 'underline',
    // textDecorationLine: 'line-through',
    // textDecorationLine: 'underline line-through',
  },
  logo: {
    height: '50%',
    width: '50%',
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 20,
  }
});

export default HomeScreen;
