import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import {Context} from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavBar from "../components/NavBar";

const IndexScreen = (props) => {
    //useContext gets the data from the passed in context, and stores the data in the repestive variable
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return <View style={styles.container}>
        <Text style={ {textAlign:"center", fontSize:30} }>Roster</Text>
        <FlatList
            data = {state}
            keyExtractor={(blogPost) => { return blogPost.id }}
            renderItem={ ({item}) => {
                return <TouchableOpacity onPress={ () => {props.navigation.navigate("Show", {id: item.id,scrn:"INDEX_SCREEN"})}}>
                            <View style={styles.row}>
                                <Text style={styles.title}>Name: {item.title} Level: {item.level} Health: {item.health} Power: {item.power} -- Gold: {item.gold}</Text>
                                <TouchableOpacity style={{backgroundColor:"red"}} onPress={() => {deleteBlogPost(item.id)}}>
                                    <AntDesign style={styles.icon} name="deleteuser"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
            }}/>
        <TouchableOpacity style={{}} onPress={ () => {addBlogPost()}} ><Text style={ {textAlign:"center", color:"blue", backgroundColor:"#F279A6", height:30, } }>Hire New Hero</Text></TouchableOpacity>
            <NavBar />
    </View>
}

//Adds a + button from our Blog app; not wanted in homework assignment
// IndexScreen.navigationOptions = (props) => {
//     return {
//         headerRight: () => (
//             <TouchableOpacity onPress={ () => {props.navigation.navigate("Create")}}>
//                 <Feather name="plus" size={30} />
//             </TouchableOpacity>
//         ),
//     };
// }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"mistyrose"
    },
    row : {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderWidth: 3,
        borderBottomColor:"black",
        borderEndColor:"black",
        margin:5,
        borderColor: "grey",
        backgroundColor: "pink",
    },
    title:{
        fontSize:15,
        fontStyle: "italic",

        //testing:
        borderWidth:1,
        borderColor:"red",
        flex:1,
    },
    icon:{
        fontSize: 25,
        
        //testing:
        borderWidth:1,
        borderColor:"red",
        flex:1,
    }
});

export default IndexScreen;