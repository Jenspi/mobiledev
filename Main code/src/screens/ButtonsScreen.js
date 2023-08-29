import React from "react";
import { Text, StyleSheet, TouchableOpacity, Button, View } from "react-native";

//Learning about Interactive Components (Buttons)
const ButtonsScreen = (props) => {
 //can use destructuring to say: const ButtonsScreen = ({navigation}) => {
    //console.log(props)
    //what to use state, addlistener for
    return <View>
        <Button
          onPress={()=>{props.navigation.navigate("Home")}}
          title="ButtonsScreen"
          color="mediumpurple"
        />
        <TouchableOpacity onPress={()=>{console.log("TouchableOpacity button pressed!")}}>
            <Text style={styles.text}>TouchableOpacity Button</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize : 20,
        color: "red",
        textAlign: 'center',
    }
});

export default ButtonsScreen
// sources:
// https://reactnative.dev/docs/button
// https://reactnative.dev/docs/touchableopacity