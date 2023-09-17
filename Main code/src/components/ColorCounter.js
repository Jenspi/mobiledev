import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";

//Learning state/hooks part II
//Helper for AdvancedColorCounter
const ColorCounter = (props) => {

    return (
        <View>
            <Text>{props.color}</Text>
            <Button onPress={props.onIncrease} title={`Increase ${props.color}`} />
            <Button onPress={props.onDecrease} title={`Decrease ${props.color}`} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ColorCounter