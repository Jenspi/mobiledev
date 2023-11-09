import React from "react";
import { Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";

const ReusableMove = (props) => {
    var moveImage = <TouchableOpacity onPress={props.onUserPress} disabled={false}><Image style={styles.buttons} source={props.imageSource}/></TouchableOpacity>;
    var moveTitle= <Text>{props.title}</Text>;

    //console.log(props);

    return (
        <SafeAreaView style={{flexDirection:"column"}}>
            {moveImage}{moveTitle}
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightgrey',
        flex: 1
    },
    listing: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    buttons: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        resizeMode: 'contain',
        //paddingHorizontal:65,
        justifyContent: "flex-start",
        alignContent:"stretch",

    },
    format: {
        textAlign : 'center',
        color : 'darkslategrey',
        fontWeight : "bold",
    },
    boxStats: {
        flexDirection:"column",
        alignSelf: 'center',
        margin:10,
        //alignItems: "space-evenly",
        

        borderWidth:5,
        borderRadius: 13,
    },
    boxText: {
        textAlign : 'center',
        color : 'darkslategrey',
        fontWeight : "bold",
        padding: 3,
    },
    danger:{
        backgroundColor:'red',
        fontWeight:'bold',
        color: 'white'
    },
    combatLogBox:{
        //flexDirection:"column",
        //alignSelf: 'center',
        margin:10,
        padding:10,
        //alignItems: "space-evenly",
        

        borderWidth:5,
        borderRadius: 13,
    },
});

export default ReusableMove