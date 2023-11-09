import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

const BoxScreen = () => {
    return (
        <View style = {styles.viewStyle}>
            <Text style= { styles.textStyle}>Box screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth : 3,
        borderColor : 'black'
        //0 margin
        //0 padding
    },
    textStyle:{
        borderWidth : 3,
        borderColor: 'red',
        // marginVertical : 20,
        // marginHorizontal : 20
        // the same as saying margin 20
        margin:20,//makes the red space away from the black
        //0 margin
        //0 padding
        padding: 20//makes the text space away from the red border
    }
});

export default BoxScreen