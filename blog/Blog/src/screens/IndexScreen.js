import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import {Context} from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndexScreen = (props) => {
    //useContext gets the data from the passed in context, and stores the data in the repestive variable
    const {state, deleteBlogPost, getBlogPosts} = useContext(Context);

    // make code only run once with useEffect hook
    useEffect( () => {
        getBlogPosts()

        //listen for new updates
        const listener = props.navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        //avoid memory leaks
        return() =>{
            listener.remove();
        }
    }, [])

    return <View style={styles.container}>
        <FlatList
            data = {state}
            keyExtractor={(blogPost, index) => {return blogPost.title + index}}
            renderItem={ ({item}) => {
                return <TouchableOpacity onPress={ () => {props.navigation.navigate("Show", {id: item.id})}}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} -- {item.id}</Text>
                                <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                                    <Feather style={styles.icon} name="trash"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
            }}/>
    </View>
}

IndexScreen.navigationOptions = (props) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={ () => {props.navigation.navigate("Create")}}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    row : {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderWidth: 3,
        borderColor: 'slategray',
        borderRadius: 14,
        backgroundColor: 'steelblue',
        marginVertical: 1,
    },
    title:{
        fontSize:18,
    },
    icon:{
        fontSize: 24,
    },
    container:{
        backgroundColor: '#80A2A6',
        flex:1,
    },
});

export default IndexScreen;