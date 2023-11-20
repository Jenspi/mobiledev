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
                    <Text>Hero Details:</Text>
                    {/* <Text>{blogPost.title}</Text>
                    <Text>{blogPost.content}</Text> */}
                    <Text>Name: {blogPost.title}</Text>
                    <Text>Level: {blogPost.level}</Text>
                    <Text>Health: {blogPost.currentHP}/{blogPost.maxHP}</Text>
                    <Text>Power: {blogPost.power}</Text>
                    <Text>Gold: {blogPost.gold}</Text>
                    {/* payload for editBlogPost:   {id:id, title:title, gold:gold, level:level, power:power, currentHP:currentHP, maxHP:maxHP} */}
                    <TouchableOpacity onPress={()=>{
                                        editBlogPost(props.navigation.getParam("id"),blogPost.title,blogPost.gold, blogPost.level, blogPost.power, blogPost.currentHP, blogPost.maxHP);
                                        console.log(blogPost);}}>
                                            <Text>LEVEL UP! ({blogPost.level * 10} GOLD)</Text>
                    </TouchableOpacity>
                    <NavBar />
                </View>
    case "ADVENTURE_SCREEN":
                return <View>
                    <Text>Who would you like to send?</Text>
                    {/* <Text>{blogPost.title}</Text>
                    <Text>{blogPost.content}</Text> */}
                    <Text>Name: {blogPost.title}</Text>
                    <Text>Level: {blogPost.level}</Text>
                    <Text>Health: {blogPost.currentHP}/{blogPost.maxHP}</Text>
                    <Text>Power: {blogPost.power}</Text>
                    <Text>Gold: {blogPost.gold}</Text>
                    {/* payload for editBlogPost:   {id:id, title:title, gold:gold, level:level, power:power, currentHP:currentHP, maxHP:maxHP} */}
                    <TouchableOpacity onPress={()=>{
                                        editBlogPost(props.navigation.getParam("id"),blogPost.title,blogPost.gold, blogPost.level, blogPost.power, blogPost.currentHP, blogPost.maxHP);
                                        console.log(blogPost);}}>
                                            <Text>LEVEL UP! ({blogPost.level * 10} GOLD)</Text>
                    </TouchableOpacity>
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