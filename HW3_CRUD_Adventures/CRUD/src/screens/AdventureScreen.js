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
    return <View>
        <Text style={ {textAlign:"center", fontSize:30} }>Current Adventure: </Text>
        <Text>{gen.name}</Text>
        <Text>{gen.challengeLevel}</Text>
        <Text>Who would you like to send?</Text>
        <FlatList
            data = {state}
            keyExtractor={(blogPost) => {return blogPost.title}}
            renderItem={ ({item}) => {
                return <TouchableOpacity onPress={ () => {
                    {item.power < gen.challengeLevel ? win=0 : win=1};
                    {item.power < gen.challengeLevel ? updateBlogPost(item.id, item.title, item.power, item.currentHP*-1, item.maxHP, item.gold*-1, item.level, {win}) : updateBlogPost(item.id, item.title, item.power, item.currentHP, item.maxHP, item.gold, item.level, {win})};
                    
                    { win ? props.navigation.navigate("Show", {id: item.id, text:text0, scrn: "ADVENTURE_SCREEN"}) : props.navigation.navigate("Show", {id: item.id, text:text1, scrn: "ADVENTURE_SCREEN"}) };
                    }}>
                            <View style={styles.row}>
                                <Text style={styles.title}>Hero: {item.title}-- Level {item.level}</Text>
                            </View>
                        </TouchableOpacity>
            }}/>
            <NavBar />
    </View>
}


const styles = StyleSheet.create({
    row : {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "grey",
    },
    title:{
        fontSize:18,
    },
    icon:{
        fontSize: 24,
    }
});

export default AdventureScreen;