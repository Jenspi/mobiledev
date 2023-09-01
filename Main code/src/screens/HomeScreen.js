import React from "react";
import { Text, StyleSheet, TouchableOpacity, Button, View, Alert, SafeAreaView } from "react-native";

//Reusable Component:
const Separator = () => <View style={styles.separator}/>;

//Learning about Interactive Components (Buttons)
const HomeScreen = (props) => {
 //can use destructuring to say: const HomeScreen = ({navigation}) => {
  return <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.text}>Click below to see my first homework:</Text>
              <Button
                onPress={()=>{props.navigation.navigate("Components")
                              Alert.alert('Hello World!')}}
                title="Homework 1: Hello World!"
                color="mediumpurple"
              />
          </View>
            <Separator/>
          <View>
            <Text style={styles.text}>Click below to see my implementation of a FlatList:</Text>
              <TouchableOpacity onPress={()=>{props.navigation.navigate("FlatL")}}>
                  <Text style={styles.buttonText}>Practicing FlatLists</Text>
              </TouchableOpacity>
          </View>
            <Separator/>
          <View>
            <Text style={styles.text}>Currently locked:</Text>
              <Button
                onPress={()=>{props.navigation.navigate("Components")}}
                title="LOCKED"
                disabled
              />
          </View>
            <Separator/>
          <View>
            <Text style={styles.text}>Currently locked:</Text>
              <Button
                onPress={()=>{props.navigation.navigate("Menu")}}
                title="Learning Reusable Components"
              />
          </View>
          </SafeAreaView>
}
//todo: add ImageScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor : "mistyrose",
    flex : 1,
    justifyContent : "center",
    //flexDirection: 'row',
    //justifyContent: 'space-between',
  },
  text: {
    fontSize : 20,
    textAlign: 'center',
    // extras:
    //fontWeight: 'bold',
    // fontStyle: 'italic',
    //textDecorationLine: 'underline',
    // textDecorationLine: 'line-through',
    // textDecorationLine: 'underline line-through',
    // backgroundColor: "blue",
    // flexDirection: "row"
  },
  buttonText: {
    fontSize : 20,
    color: "mediumpurple",
    textAlign: 'center',
    // extras:
    fontWeight: 'bold',
    //textDecorationLine: 'underline',
    // fontStyle: 'italic',
    // textDecorationLine: 'line-through',
    // textDecorationLine: 'underline line-through',
    //backgroundColor: "blue",
    flexDirection: "row"
  },
  separator : {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default HomeScreen
// sources:
// https://reactnative.dev/docs/button
// https://reactnative.dev/docs/touchableopacity