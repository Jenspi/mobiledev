import React from "react";
import { Text, StyleSheet, Image, SafeAreaView } from "react-native";

const ReusableStat = (props) =>{
    var entityTitle = <Text style={styles.boxText}>-=+=- {props.title} -=+=-</Text>
    var entityHealth = <Text style={styles.boxText}>Health: {props.C_health}</Text>;
    var entityStrength = <Text style={styles.boxText}>Strength: {props.C_strength}</Text>;
    var entityMagic;
    //var entityMagic = <Text style={styles.format}>Magic: {props.C_magic}</Text>;
    {props.C_magic < (props.C_magic/2) ? entityMagic=<Text style={styles.danger}>Magic: {props.C_magic}</Text> : entityMagic=<Text style={styles.boxText}>Magic: {props.C_magic}</Text>}
    
    //console.log(props);

    return (
        <SafeAreaView style={styles.boxStats}>
            {entityTitle}{entityHealth}{entityStrength}{entityMagic}
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'wheat',
        flex: 1
    },
    listing: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    format: {
        textAlign : 'center',
        color : 'darkslategrey',
        fontWeight : "bold",
    },
    pythonStyle:{
        height: 100,
        width: 100,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    boxStats: {
        flexDirection:"column",
        alignSelf: 'center',
        margin:10,
        //alignItems: "space-evenly",
        backgroundColor:"tan",

        borderWidth:5,
        borderRadius: 13,
    },
    boxText: {
        
        textAlign : 'center',
        color : 'darkslategrey',
        fontWeight : "bold",
        padding: 3,
    },
    // danger:{
    //     backgroundColor:'red',
    //     fontWeight:'bold',
    //     color: 'white'
    // },
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

export default ReusableStat