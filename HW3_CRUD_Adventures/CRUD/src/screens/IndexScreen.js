import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import {Context} from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavBar from "../components/NavBar";

const IndexScreen = (props) => {
    //useContext gets the data from the passed in context, and stores the data in the repestive variable
    const {state, addBlogPost, deleteBlogPost, editBlogPost} = useContext(Context);

    return <View style={styles.container}>
        <Text style={ {textAlign:"center", fontSize:30} }>Roster</Text>
        <FlatList
            data = {state}
            keyExtractor={(blogPost) => { return blogPost.id }}
            renderItem={ ({item}) => {
                return <TouchableOpacity onPress={ () => {props.navigation.navigate("Show", {id: item.id,scrn:"INDEX_SCREEN"})}}>
                            <View style={styles.button}>
                                <Text style={styles.title}>{item.title} ➻ Hero Level {item.level}, {item.currentHP}/{item.maxHP}HP, Power Level {item.power} ➻ {item.gold} Gold</Text>
                                <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                                    <AntDesign style={styles.icon} name="deleteuser"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
            }}/>
        <TouchableOpacity style={{paddingVertical: 5, paddingHorizontal: 5, borderBottomWidth:3, borderEndWidth: 3, borderBottomColor:"#F279A6", borderEndColor:"#F279A6",  margin:5, borderColor: "#E2E96D", backgroundColor: "#E2E96D",height:30, width:150,alignSelf:"center",}} onPress={ () => {addBlogPost()}} ><Text style={ {textAlign:"center" } }>Hire New Hero</Text></TouchableOpacity>
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
    assassinsCreedContainer:{
        //https://color.adobe.com/trends/Game-design
        flex:1,
        
    },
    container:{
        flex:1,
        //backgroundColor:"#865FD9"
        //backgroundColor:"white"

        backgroundColor:"#6C30BE"
        //backgroundColor:"#865FD9"
    },
    button : {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderBottomWidth:3,
        borderEndWidth: 3,
        //borderWidth: 3,
        borderBottomColor:"#E2E96D",
        borderEndColor:"#E2E96D",
        margin:5,
        //borderColor: "#F279DE",
        borderColor: "#E279A6",
        backgroundColor: "#E279A6",
        //alignItems:"center"
    },
    title:{
        fontSize:15,
        fontStyle: "italic",

        //testing:
        //borderWidth:1,
        //borderColor:"red",
        flex:1,
        //alignItems:"center"
    },
    icon:{
        fontSize: 25,
        //testing:
        backgroundColor:"#E2E96D",
        borderWidth:1,
        //borderColor:"red",
        flex:1,
    }
});

export default IndexScreen;