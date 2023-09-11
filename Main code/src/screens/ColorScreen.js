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



//Learning state/hooks
const ColorScreen = () => {

    const [colors, setColors] = useState([]);
    console.log(colors);
    console.log({colors});

    return (
        // <View>
        //     <Button title="Add color"
        //     onPress={()=>{
        //         setColors([...colors, randomRgb()]);
        //     }}/>
        //     <View style={{ width:100, height:100, backgroundColor: randomRgb()}}></View>
        // </View>
        <SafeAreaView>
            {/* <TouchableOpacity onPress={()=>{setColors([...colors, randomRgb()]);}}>
                <Text style={styles.text}>ADD COLOR</Text>
            </TouchableOpacity> */}

            {/* <Button style={{ textAlign : "center" }} title="Add color"
                onPress={()=>{
                    setColors([...colors, randomRgb()]);
            }}/> */}
  
                <TouchableOpacity onPress={()=>{ setColors([...colors, randomRgb()]);
                <FlatList data={colors} vertical={true} renderItem={element => {
                    console.log(element);
                    <View style={{ width:100, height:100, backgroundColor: {element}, resizeMode: 'contain', }}>
                        <Text> Test</Text>
                    </View>
                }}/>}}>
                    <Text style={ {textAlign : "center", fontSize:40} }>ADD COLOR {colors}</Text>
                </TouchableOpacity>
           
                {/* <FlatList data={colors} vertical={true} renderItem={element => {
                    console.log(element);
                    <View style={{ width:100, height:100, backgroundColor: {element}, resizeMode: 'contain', }}>
                        <Text> Test</Text>
                    </View>
                }}/> */}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    blocks:{
        width:100,
        height:100, 
        // backgroundColor: randomRgb(),
        resizeMode: 'contain',
    },
    // text:{
    //     textAlign : "center",
    // }
});

export default ColorScreen