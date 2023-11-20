import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const Roster = (props) => {
    return <View>
            <FlatList
                data = {state}
                keyExtractor={(blogPost) => { return blogPost.id }}
                renderItem={ ({item}) => {
                    return <TouchableOpacity onPress={ () => {props.navigation.navigate("Show", {id: item.id})}}>
                                <View style={styles.row}>
                                    <Text style={styles.title}>Name: {item.title} Level: {item.level} Health: {item.health} Power: {item.power} -- Gold: {item.gold}</Text>
                                    <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                                        <AntDesign style={styles.icon} name="deleteuser"/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                }}/>
            </View>
}

const styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize:20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default withNavigation(NavBar);