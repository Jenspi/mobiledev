import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

const HW2WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>PYTHON SLAYER</Text>
            <Image style={{ height: 300,
                            width: 300,
                            resizeMode: 'contain',
                            flexDirection: 'row',
                            alignSelf: "center",
                            }}
                  source={require('../../assets/images/game/pythonshield.png')}/>
            <Button
                onPress={()=>{navigation.navigate("Game")}}
                title="BEGIN ADVENTURE"
              />
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "wheat",
        padding:45,
        flex:1
    },
    titleText:{
        textAlign : 'center',
        color : 'limegreen',
        fontWeight : "bold",
        fontSize: 70,
        //fontStyle:"italic"
    }
});

export default HW2WelcomeScreen