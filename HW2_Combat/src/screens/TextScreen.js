import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

//Learning state/hooks part IV (with TextInput!)
const TextScreen = () => {
    const [name, setName] = useState("");

    return (
        <View>
            <Text style={styles.all}>Enter Name:</Text>
            <TextInput style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(newText) => { setName(newText); }}
            />
            <Text style={styles.all}>You entered: {name}</Text>
            {name.length < 1 ? <Text>WARNING: Name must be one character or longer!</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin:20,
        borderColor: "black",
        borderWidth:1
    },
    all:{
        fontSize : 20,
    }
});

export default TextScreen