import React, { useState } from "react";
import { StyleSheet, FlatList, Button, View, TouchableOpacity, SafeAreaView, Text } from "react-native";

//Helper function
const randomRgb = () => {
    /* Use Math.random for a number between 0 and 1,
     * multiply that number by 256,
     * and finally, use Math.floor to truncate the decimal.
     * Outputs values between 0 and 255, inclusive */
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    // String templating with backtick character `      enclose variables ${likeThis}
    let colorString = `rgb(${red},${green},${blue})`;
    return colorString;
}



//Learning state/hooks Part I
const ColorScreen = () => {

    const [colors, setColors] = useState([]);
    console.log(colors);

    return (
        <SafeAreaView>
            <Button title="ADD COLOR"
             onPress={()=> {
                setColors([...colors, randomRgb()]);
            }}/>

            <FlatList data={colors} renderItem={({item}) => {
                return <View style={{ width:100, height:100, backgroundColor: item }}></View>;    
            }}
            keyExtractor={(color)=>{return color}}
            horizontal
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    blocks:{
        width:100,
        height:100,
        resizeMode: 'contain',
    }
});

export default ColorScreen