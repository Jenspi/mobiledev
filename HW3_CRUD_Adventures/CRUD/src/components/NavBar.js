import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const NavBar = (props) => {
    return <View style={styles.navbar}>
        <TouchableOpacity style={styles.button} onPress={ () => {props.navigation.navigate("Index")}}><Text style={styles.label}>Roster</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ () => {props.navigation.navigate("Adventure")}}><Text style={styles.label}>Adventures</Text></TouchableOpacity>
        
    </View>
}

const styles = StyleSheet.create({
    navbar:{
        flexDirection:"row",
        fontSize:20,
        
        //height:60,
        //backgroundColor:"#6023B3",
        backgroundColor:"#5116A1",
        alignItems:"center",
        //justifyContent:"space-evenly",
        justifyContent:"space-between"
        //alignContent:"stretch"
    },
    label: {
        fontSize:18,
        // marginBottom: 5,
        // marginLeft: 5,
        //margin:20,
        marginVertical:5,
        marginHorizontal:59
    },
    button: {
        borderWidth: 3,
        borderColor: "black",
        
    }
});

export default withNavigation(NavBar);