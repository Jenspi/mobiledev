import React from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";
import ImageDetail from "../components/ImageDetail"

const navigate = {
    home: {
        icon : <Image style={{ height: 50,
            width: 50,
            alignSelf: 'center',
            resizeMode: 'contain',
            borderRadius: 20}}
    source={require('../../assets/images/cafe/home.png')}/>,
        label : 'Home'
    },
    order: {
        icon : <Image style={{ height: 50,
            width: 50,
            alignSelf: 'center',
            resizeMode: 'contain',
            borderRadius: 20}}
    source={require('../../assets/images/cafe/order.png')}/>,
        label : 'Order'
    },
    rewards: {
        icon : <Image style={{ height: 50,
            width: 50,
            alignSelf: 'center',
            resizeMode: 'contain',
            borderRadius: 20}}
    source={require('../../assets/images/cafe/rewards.png')}/>,
            label : 'Rewards'
    }
}

//Learning about Interactive Components (Buttons)
const ImageScreen = () => {
    return (
        <SafeAreaView style={styles.background}>
            <ImageDetail title="Coffee" imageSource={require('../../assets/images/cafe/coffee.png')}/>
            <ImageDetail title="Sandwich" imageSource={require('../../assets/images/cafe/sandwich.png')}/>
            <ImageDetail title="Donut" imageSource={require('../../assets/images/cafe/donut.png')}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background :{
        backgroundColor : 'mistyrose'
    },
    header:{

    },
    footer: {
        marginBottom: 20,
        backgroundColor : 'blue',
        flex: 1
    }
});

export default ImageScreen