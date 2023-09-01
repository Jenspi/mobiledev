import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

//Learning about Interactive Components (Buttons)
const ImageDetail = (props) => {

    console.log(props);

    return (
        <View>
            <Image style={styles.listing} source={props.imageSource}/>
            <Text style={styles.format}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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