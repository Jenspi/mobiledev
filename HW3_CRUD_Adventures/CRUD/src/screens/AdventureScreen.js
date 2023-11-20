import React, {useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import {Context} from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import NavBar from "../components/NavBar";

const AdventureScreen = (props) => {
    const { state } = useContext(Context);

    const blogID = props.navigation.getParam("id");

    const blogPost = state.find((blogPost) => {
        return blogID === blogPost.id;
    })

    return <View>
        <Text style={ {textAlign:"center", fontSize:30} }>Current Adventure: </Text>
        <Text>Challenege level X. Who would you like to send?</Text>
        <FlatList
            data = {state}
            keyExtractor={(blogPost) => {return blogPost.title}}
            renderItem={ ({item}) => {
                return <TouchableOpacity onPress={ () => {props.navigation.navigate("Show", {id: item.id, scrn:"ADVENTURE_SCREEN"})}}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} -- {item.id}</Text>
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