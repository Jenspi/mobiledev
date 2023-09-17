import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

//Learning state/hooks part II
const AdvancedColorScreen = () => {

    //instantiate three pieces of state
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
            <ColorCounter color="Red"
                onIncrease={ ()=>{setRed(red+1)} }
                onDecrease={ ()=>{setRed(red-1)} }/>
            <ColorCounter color="Green"
                onIncrease={ ()=>{setGreen(green+1)} }
                onDecrease={ ()=>{setGreen(green-1)} }/>
            <ColorCounter color="Blue"
                onIncrease={ ()=>{setBlue(blue+1)} }
                onDecrease={ ()=>{setBlue(blue-1)} }/>
            <View style={ {height:100, width:100, backgroundColor:`rgb(${red},${green},${blue})`} }></View>
        </View>
    );
}

const styles = StyleSheet.create({});

export default AdvancedColorScreen