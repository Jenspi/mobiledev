import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Context} from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";
import NavBar from "../components/NavBar";

const ShowScreen = (props) => {
    const { state, editBlogPost } = useContext(Context);

    const blogID = props.navigation.getParam("id");
    const scrn = props.navigation.getParam("scrn");
    const message = props.navigation.getParam("text");
    //console.log(props.navigation);

    const blogPost = state.find((blogPost) => {
        return blogID === blogPost.id;
    })

    // console.log(state);
    // console.log(blogPost);

    switch(scrn){
        case "INDEX_SCREEN":
                return <View style={styles.container}>
                    <Text style={{fontSize:30, paddingBottom: 10}}>Hero Details:</Text>
                    <Text>Name: {blogPost.title}</Text>
                    <Text>Gold: {blogPost.gold}</Text>
                    <Text>Level: {blogPost.level}</Text>
                    <Text>Power: {blogPost.power}</Text>
                    <Text>Health: {blogPost.currentHP}/{blogPost.maxHP}</Text>
                    
                    {/* payload for editBlogPost:   {id, title, power, currentHP, maxHP, gold, level} */}
                    <TouchableOpacity onPress={()=>{
                                        editBlogPost(props.navigation.getParam("id"), blogPost.title, blogPost.power, blogPost.currentHP, blogPost.maxHP, blogPost.gold, blogPost.level);
                                        console.log(blogPost);}}>
                                            <Text style={{color:"red", paddingVertical:10}}>LEVEL UP! ({blogPost.level*10} GOLD)</Text>
                    </TouchableOpacity>

                    <NavBar />
                </View>
    case "ADVENTURE_SCREEN":
        return <View style={styles.container}>
                    <Text>{message}</Text>
                    <Text style={{fontSize:30, paddingBottom: 10}}>Hero Details:</Text>
                    <Text>Name: {blogPost.title}</Text>
                    <Text>Gold: {blogPost.gold}</Text>
                    <Text>Level: {blogPost.level}</Text>
                    <Text>Power: {blogPost.power}</Text>
                    <Text>Health: {blogPost.currentHP}/{blogPost.maxHP}</Text>
                    

                    <NavBar />
                </View>
    default:
    }
}

// ShowScreen.navigationOptions = (props) => {
//     return {
//         headerRight: () => (
//             <TouchableOpacity onPress={()=>{ props.navigation.navigate("Edit", {id: props.navigation.getParam("id")}) }}>
//                 <FontAwesome name="pencil" size={30} />
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
    },
    addButton:{
        paddingVertical: 5,
        paddingHorizontal: 5, 
        borderBottomWidth:3, 
        borderEndWidth: 3, 
        borderBottomColor:"#F279A6", 
        borderEndColor:"#F279A6",  
        margin:5, 
        borderColor: "#E2E96D", 
        backgroundColor: "#E2E96D",
        height:30, 
        width:150,
        alignSelf:"center"
    },
    buttonDescription:{
        fontSize:15,
        fontStyle: "italic",
        flex:1
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

export default ShowScreen;