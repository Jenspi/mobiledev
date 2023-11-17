import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import {Context} from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndexScreen = (props) => {

    //useContext gets the data from the passed in context, and stores the data in the repestive variable
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return <View>
        <Button title="Add Post" onPress={() => { addBlogPost() }} />
        <FlatList
            data = {state}
            keyExtractor={(blogPost) => {return blogPost.title}}
            renderItem={ ({item}) => {
                return <TouchableOpacity onPress={ () => {props.navigation.navigate("Show", {id: item.id})}}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} -- {item.id}</Text>
                                <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                                    <Feather style={styles.icon} name="trash"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
            }}
        />
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

export default IndexScreen;