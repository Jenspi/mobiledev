import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";

//Learning state/hooks
const CounterScreen = () => {

    //let counter = 0;//declares variable with local scope
    const [counter, setCounter] = useState(0);//[variable, setterFunc]; can be named anything you want because they're just new variables
    //0 is default value of our data; will be different if we were using an array or something
    //function returns array with two values: current value and function to change the value
    //array destructuring
    console.log(counter);

    return (
        <View>
            <Button title="Increase" onPress={()=>{setCounter(counter+1);
                                                    console.log(counter);}}/>
            <Button title="Decrease"onPress={()=>{setCounter(counter-1);
                                                    console.log(counter);}}/>
            <Text>Current Count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
});

export default CounterScreen