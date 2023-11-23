import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const NavBar = (props) => {
    return <View style={{flexDirection:"row", fonstSize:20, justifyContent:"space-evenly", height:50}}>
        <TouchableOpacity onPress={ () => {props.navigation.navigate("Index")}}><Text>Roster</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => {props.navigation.navigate("Adventure")}}><Text>Adventures</Text></TouchableOpacity>
        
    </View>
}

const styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize:20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default withNavigation(NavBar);