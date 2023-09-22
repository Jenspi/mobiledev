import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

const FlexBox = () => {
    return (
        <View style = {styles.viewStyle}>
            <Text style= { styles.textOneStyle}>Child 1</Text>
            <Text style= { styles.textTwoStyle}>Child 2</Text>
            <Text style= { styles.textThreeStyle}>Child 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth : 3,
        borderColor : 'black',
        //alignItems : "flex-start"
        //alignItems : "center",
        //flexDirection : "column",
        //flexDirection : "row",
        //padding: 20
        //0 margin
        //0 padding
        height : 200,
        //justifyContent: "space-between",
        //justifyContent: "space-around",
        //justifyContent: "center",//on primary axis
        //alignItems: "center",//on secondary
        flexDirection : "column"
    },
    textOneStyle:{
        borderWidth : 3,
        borderColor: 'red',
        //flex:1
        // marginVertical : 20,
        // marginHorizontal : 20
        // the same as saying margin 20
        //margin:20,//makes the red space away from the black
        //0 margin
        //0 padding
        //padding: 20//makes the text space away from the red border
    },
    textTwoStyle:{
        borderWidth : 3,
        borderColor: 'red',
        flex: 1
        // marginVertical : 20,
        // marginHorizontal : 20
        // the same as saying margin 20
        //margin:20,//makes the red space away from the black
        //0 margin
        //0 padding
        //padding: 20//makes the text space away from the red border
    },
    textThreeStyle:{
        borderWidth : 3,
        borderColor: 'red',
        //flex: 1
        // marginVertical : 20,
        // marginHorizontal : 20
        // the same as saying margin 20
        //margin:20,//makes the red space away from the black
        //0 margin
        //0 padding
        //padding: 20//makes the text space away from the red border
    }
});

export default FlexBox