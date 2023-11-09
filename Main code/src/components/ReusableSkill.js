import React, {useState} from "react";
import { Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReusableSkill = (props) =>{
    //       dispatch( {statToChange: props.title, amount:-1*STATS_INCREMENT});  console.log({props}); pointsRemaining++;
    var minus = <TouchableOpacity onPress={props.onDecrease} ><Image style={styles.listing} source={require('../../assets/images/game/minus.png')}/></TouchableOpacity>;
    var textView = <Text style={styles.format}>Current {props.title}: {props.point}</Text>;
    var plus = <TouchableOpacity  onPress={props.onIncrease}><Image style={styles.listing} source={require('../../assets/images/game/plus.png')}/></TouchableOpacity>;
     
    return (
        <SafeAreaView style={{flexDirection:"row", alignSelf: 'center'}}>
            {minus}{textView}{plus}
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
        paddingHorizontal:60,
    },
    format: {
        textAlign : 'center',
        color : 'darkslategrey',
        fontWeight : "bold",
        alignSelf: "center"
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

export default ReusableSkill