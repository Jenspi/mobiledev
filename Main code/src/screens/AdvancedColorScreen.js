import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 13;

//Learning state/hooks part II
const AdvancedColorScreen = () => {

    //Helper function
    const setColor = (color, change) => {
        //color = a string 'red', 'green', or 'blue'.
        //change = value to change by

        if(color === 'red'){
            if(red + change < 0 || red + change > 255){ return; }
            else{ setRed(red + change); }
        }

        if(color === 'green'){
            if(green + change < 0 || green + change > 255){ return; }
            else{ setGreen(green + change); }
        }

        if(color === 'blue'){
            if(blue + change < 0 || blue + change > 255){ return; }
            else{ setBlue(blue + change); }
        }
    }
    //instantiate three pieces of state
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
            <ColorCounter color="Red"
                onIncrease={ ()=>{setColor('red',COLOR_INCREMENT)} }
                onDecrease={ ()=>{setColor('red', -1 * COLOR_INCREMENT)} }/>
            <ColorCounter color="Green"
                onIncrease={ ()=>{setColor('green',COLOR_INCREMENT)} }
                onDecrease={ ()=>{setColor('green', -1 * COLOR_INCREMENT)} }/>
            <ColorCounter color="Blue"
                onIncrease={ ()=>{setColor('blue',COLOR_INCREMENT)} }
                onDecrease={ ()=>{setColor('blue', -1 * COLOR_INCREMENT)} }/>
            <View style={ {height:100, width:100, backgroundColor:`rgb(${red},${green},${blue})`} }></View>
        </View>
    );
}

const styles = StyleSheet.create({});

export default AdvancedColorScreen