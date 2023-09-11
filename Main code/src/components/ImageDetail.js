import React from "react";
import { Text, StyleSheet, Image, SafeAreaView } from "react-native";

//Learning about Interactive Components (Buttons)
const ImageDetail = (props) => {

    //console.log(props);

    return (
        <SafeAreaView>
            <Image style={styles.listing} source={props.imageSource}/>
            <Text style={styles.format}>{props.title}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    listingContainer:{
        backgroundColor:'green',
        //flex: 1
    },
    listing: {
        height: 180,
        width: 180,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    format: {
        textAlign : 'center',
        color : 'red'
    }
});

export default ImageDetail