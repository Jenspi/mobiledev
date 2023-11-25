import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Context } from "../context/HeroContext";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavBar from "../components/NavBar";

const RosterScreen = (props) => {
    //useContext gets the data from the passed in context, and stores the data in the repestive variable
    const {state, addheroInfo, deleteheroInfo} = useContext(Context);

    return <View style={styles.container}>
        <Text style={styles.title}>Hero Roster</Text>
        <FlatList
            data = {state}
            keyExtractor={(heroInfo) => { return heroInfo.id }}
            renderItem={ ({item}) => {
                return <TouchableOpacity onPress={ () => {props.navigation.navigate("Show", {id: item.id,scrn:"INDEX_SCREEN"})}}>
                            <View style={styles.buttonHero}>
                                <Text style={styles.buttonDescription}>{item.title} ➻ Hero Level {item.level}{'\n'}{item.currentHP}/{item.maxHP}HP, Power Level {item.power} ➻ {item.gold} Gold</Text>
                                <TouchableOpacity onPress={() => {deleteheroInfo(item.id)}}>
                                    <AntDesign style={styles.deleteHeroIcon} name="deleteuser"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
        }}/>
            {/* Would like to figure out how to make the line transparent and button pressable just on the button, not the entire line */}
            <TouchableOpacity style={styles.addButton} onPress={ () => {addheroInfo()}} ><Text style={ {fontWeight:500,textAlign:"center", fontSize:15, fontStyle: "italic" } }>Hire New Hero</Text></TouchableOpacity>
            <NavBar />
    </View>
}

//Adds a + button from our Blog app; not wanted in homework assignment
// RosterScreen.navigationOptions = (props) => {
//     return {
//         headerRight: () => (
//             <TouchableOpacity onPress={ () => {props.navigation.navigate("Create")}}>
//                 <Feather name="plus" size={30} />
//             </TouchableOpacity>
//         ),
//     };
// }

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
    buttonHero : {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderBottomWidth:3,
        borderEndWidth: 3,
        borderBottomColor:"#E2E96D",
        borderEndColor:"#E2E96D",
        margin:5,
        borderColor: "#E279A6",
        backgroundColor: "#E279A6",
        //edges of button:
        borderTopWidth:5,
        borderTopColor: "#F279A6",
        
        borderLeftWidth:5,
        borderLeftColor:"F279A6",

        borderBottomWidth:5,
        borderBottomColor:"#E2E96D",

        borderEndWidth: 5,
        borderEndColor:"#E2E96D",
    },
    addButton:{
        paddingVertical: 5,
        paddingHorizontal: 5, 
        margin:5, 
        backgroundColor: "#E2E96D",
        height:35, 
        width:150,
        alignSelf:"center",
        //edges of button:
        borderTopWidth:3,
        borderTopColor: "#E2E96D",
        
        borderLeftWidth:3,
        borderLeftColor:"#E2E96D",

        borderBottomWidth:5,
        borderBottomColor:"#F279A6",

        borderEndWidth: 5,
        borderEndColor:"#F279A6",
    },
    buttonDescription:{
        fontSize:15,
        fontStyle: "italic",
        flex:1,
        padding:5
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
    }
});

export default RosterScreen;