import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Context} from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";
import NavBar from "../components/NavBar";

const ShowScreen = (props) => {
    const { state, editBlogPost } = useContext(Context);

    const blogID = props.navigation.getParam("id");
    const scrn = props.navigation.getParam("scrn");
    console.log(props.navigation);

    const blogPost = state.find((blogPost) => {
        return blogID === blogPost.id;
    })

    console.log(state);
    console.log(blogPost);

    switch(scrn){
        case "INDEX_SCREEN":
                return <View>
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
        return <View>
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

const styles = StyleSheet.create({});

export default ShowScreen;