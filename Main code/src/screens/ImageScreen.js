import React from "react";
import { Text, StyleSheet, TouchableOpacity, Button, View } from "react-native";
import ImageDetail from "../components/ImageDetail"

//Learning about Interactive Components (Buttons)
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Coffee" imageSource={require('../../assets/images/cafe/coffee.png')}/>
            <ImageDetail title="Sandwich" imageSource={require('../../assets/images/cafe/sandwich.png')}/>
            <ImageDetail title="Donut" imageSource={require('../../assets/images/cafe/donut.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default ImageScreen