// Jenny Spicer / 4661 / August 17, 2023
import React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";

const HomeScreen = () => {
  const myHeader = '𝓙𝓮𝓷𝓷𝔂';
  const myText1 = 'My boyfriend and I visited Mackinaw Island this summer in northern Michigan. No cars are allowed on the entire island! :)\n\n\n';
  const myText2 = '\nMy current favorite mobile application is Love & Pies... It\'s a merge game that I believe is supposed to be a mystery about who burned a café down or something, but I skip the dialogue (as one does) so I don\'t really know what\'s going on lore-wise.'

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.frame}></View>
        <Text style={styles.header}>{myHeader}</Text>

        <Image style={styles.logo} source={require('../../assets/images/summer/arch.png')}/>
        <Text style={styles.text}>{myText1}</Text>

        <Image style={styles.logo} source={require('../../assets/images/summer/merge.png')}/>
        <Text style={styles.text}>{myText2}</Text>

        <View style={styles.frame}></View>
      <View style={styles.frame}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkseagreen',
    padding: 25,
    //needed to be able to scroll all the way down:
    alignItems : "center",
    justifyContent : "center",
    
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
    fontSize: 30,
    textAlign: 'center',
    // fontWeight: 'bold',
    // fontStyle: 'italic',
    // textDecorationLine: 'underline',
    // textDecorationLine: 'line-through',
    // textDecorationLine: 'underline line-through',
  },
  logo: {
    //using percentages below won't allow photos to show
    height: 400,
    width: 400,
    alignSelf: 'center',
    resizeMode: 'contain',
    //to make edges round:
    //borderRadius: 20,
  }
});

export default HomeScreen;
