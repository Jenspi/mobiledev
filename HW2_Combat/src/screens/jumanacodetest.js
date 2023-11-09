import React from "react";
import { Text, StyleSheet, ImageBackground, View, Image,TouchableOpacity } from "react-native";

const jumanacodetest = (props) => {
  console.log(props);

  return (
    <View style={styles.container}>
      {/* Background image */}
      <ImageBackground
        source={require("../../assets/welcome.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.imageContainer}>
          {/* Second image on top of the background */}
          <TouchableOpacity onPress= {function(){props.navigation.navigate("Combat")}} style={styles.buttonContainer}>
          <Image
          source={require("../../assets/play.png")} // Button image path
          style={styles.buttonImage}
         />
        </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Button at the very bottom */}
      <Image
        source={require("../../assets/play.png")} // Button image path
        style={styles.buttonImage}
      />
      
      {/* Add any content you want on top of the images here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  secondImage: {
    top: 25,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  buttonImage: {
    position: "absolute",
    bottom: 70,
    left: 0,
    width: "100%",
    height: 90, 
    resizeMode: "contain", // Ensure the button image fits within the height
  },
  
});

export default jumanacodetest;