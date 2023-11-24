import React, {useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import {Context} from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import NavBar from "../components/NavBar";

const AdventureScreen = (props) => {
    const { state, updateBlogPost } = useContext(Context);

    const blogID = props.navigation.getParam("id");

    const blogPost = state.find((blogPost) => {
        return blogID === blogPost.id;
    })
    // console.log(props.navigation.params);
    // const challengeName=props.navigation.getParam("name");
    // const challengeLevel = props.navigation.getParam("challengeLevel");
    const generateAdventure = () =>{
        let adventure = {};

        const adjectives = [];
        const locations = [];
        const qualifiers = [];

        adventure.name = (`ADVENTURE NAME`);
        //adventure.challengeLevel = Math.floor( Math.random()*10 )+1;
        adventure.challengeLevel = 1;

        return adventure;
    }

    const gen = generateAdventure();
    var win;
    var text0= "i win!"
    var text1="i lose!"
    return <View style={styles.container}>
        <Text style={ styles.title }>Current Adventure:</Text>
        <View style={styles.body}>
            <Text style={{fontWeight:"bold"}}>{gen.name}</Text>
            <Text>Challenge Level: {gen.challengeLevel}</Text>
        </View>
        <Text style={{fontSize:15, color:"white", paddingLeft:5}}>➻ Who would you like to send?</Text>

        <FlatList
            data = {state}
            keyExtractor={(blogPost) => {return blogPost.title}}
            renderItem={ ({item}) => {
                return <TouchableOpacity onPress={ () => {
                        {item.power < gen.challengeLevel ? win=0 : win=1};
                        {item.power < gen.challengeLevel ? updateBlogPost(item.id, item.title, item.power, item.currentHP*-1, item.maxHP, item.gold*-1, item.level, {win}) : updateBlogPost(item.id, item.title, item.power, item.currentHP, item.maxHP, item.gold, item.level, {win})};
                        
                        { win ? props.navigation.navigate("Show", {id: item.id, text:text0, scrn: "ADVENTURE_SCREEN"}) : props.navigation.navigate("Show", {id: item.id, text:text1, scrn: "ADVENTURE_SCREEN"}) };
                        }}>
                        <View style={styles.buttonHero}>
                        <Text style={styles.buttonDescription}>{item.title} ➻ Hero Level {item.level}{'\n'}{item.currentHP}/{item.maxHP}HP, Power Level {item.power} ➻ {item.gold} Gold</Text>
                        </View>
                    </TouchableOpacity>
                }}/>

        <NavBar />
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
        flex:1,
        paddingLeft:5
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
        marginHorizontal:100,
        marginVertical:20,
        height:75,
        width: 200,
        backgroundColor:"#E2E96D",
        fontSize:20,
        alignItems:"center",
        textAlign:"center",
        //edges of button:
        borderTopWidth:5,
        borderTopColor: "#E2E96D",
        
        borderLeftWidth:5,
        borderLeftColor:"#E2E96D",

        borderBottomWidth:5,
        borderBottomColor:"#F279A6",

        borderEndWidth: 5,
        borderEndColor:"#F279A6",
    }
});

export default AdventureScreen;