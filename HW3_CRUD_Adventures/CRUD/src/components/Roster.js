import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import {Context} from "../context/HeroContext";

const Roster = (props) => {
    // const [title, setTitle] = useState(props.initialValues.title);
    // const [content, setContent] = useState(props.initialValues.content);
    const { state } = useContext(Context);

    console.log(state);
    const heroID = state.id;
    console.log(heroID);

    const heroInfo = state.find(({hero}) => {
        return heroID === {hero}.id;
    })

    //CODE DOESNT WORK
    
    return <View style={styles.container}>
                <Text style={styles.title}>{state.title}</Text>
                <View style={styles.bodyPink}>
                    <Text>Hero Level: {state.level}</Text>
                    <Text>Health: {state.currentHP}/{state.maxHP}</Text>
                    <Text>Power Level: {state.power}</Text>
                    <Text>Gold: {state.gold}</Text>
                </View>
            </View>
}

const styles = StyleSheet.create({
    /* Color palette:
    *   "Sweetie Magic: Merge Spell - Game Concept" --- https://color.adobe.com/trends/Game-design
    *
    *   #E279A6 --- Pink Carnation (darker pink)
    *   #F279DE --- Lián Hóng Lotus Pink (lighter pink)
    *   #6C30BE --- Purple Spot (darker purple)
    *   #865FD9 --- Gloomy Purple (lighter purple)
    *   #E2E96D --- Vanilla Pudding (yellow)
    */
    container:{
        flex:1,
        backgroundColor:"#6C30BE"
    },
    buttonLevelUp : {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderBottomWidth:3,
        borderEndWidth: 3,
        margin:5,
        borderColor: "#E279A6",
        backgroundColor: "#E279A6",
        height:35, 
        width:200,
        alignSelf:"center",
        //edges of button:
        borderTopWidth:3,
        borderTopColor: "#F279A6",
        
        borderLeftWidth:3,
        borderLeftColor:"F279A6",

        borderBottomWidth:5,
        borderBottomColor:"#E2E96D",

        borderEndWidth: 5,
        borderEndColor:"#E2E96D",
    },
    buttonDescription:{
        fontSize:15,
        fontStyle: "italic",
        //flex:1,
        paddingLeft:5,
        fontWeight:"bold"
    },
    deleteHeroIcon:{
        fontSize: 25,
        backgroundColor:"#E2E96D",
        borderWidth:1,
        flex:1,
    },
    title:{
        textAlign:"center", 
        fontSize:30,
        color:"#E279A6", 
        textShadowColor:"#E2E96D", 
        textShadowOffset: {width:2, height:1}, 
        textShadowRadius:1, 
        marginVertical:3, 
        textDecorationLine:"underline",
    },
    body:{
        // marginHorizontal:100,
        marginVertical:20,
        height:75,
        width: 250,
        backgroundColor:"#E2E96D",
        fontSize:20,
        //alignItems:"center",
        textAlign:"center",
        alignSelf:"center",
        //edges of button:
        borderTopWidth:5,
        borderTopColor: "#E2E96D",
        
        borderLeftWidth:5,
        borderLeftColor:"#E2E96D",

        borderBottomWidth:5,
        borderBottomColor:"#F279A6",

        borderEndWidth: 5,
        borderEndColor:"#F279A6",
    },
    bodyPink:{
        //marginHorizontal:100,
        marginVertical:20,
        height:80,
        width: 250,
        backgroundColor:"#F279A6",
        fontSize:20,
        //aligns box to middle of screen
        alignSelf:"center",
        //align text in box to middle
        alignItems:"center",
        //edges of button:
        borderTopWidth:5,
        borderTopColor: "#F279A6",
        
        borderLeftWidth:5,
        borderLeftColor:"#F279A6",

        borderBottomWidth:5,
        borderBottomColor:"#E2E96D",

        borderEndWidth: 5,
        borderEndColor:"#E2E96D",
    },
    disabledButton:{
        opacity:0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderBottomWidth:3,
        borderEndWidth: 3,
        margin:5,
        borderColor: "#E279A6",
        backgroundColor: "#E279A6",
        height:35, 
        width:200,
        alignSelf:"center",
        //edges of button:
        borderTopWidth:3,
        borderTopColor: "#F279A6",
        
        borderLeftWidth:3,
        borderLeftColor:"F279A6",

        borderBottomWidth:5,
        borderBottomColor:"#E2E96D",

        borderEndWidth: 5,
        borderEndColor:"#E2E96D",
    }
});

export default Roster;