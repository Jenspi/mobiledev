import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

const ResultsDetail = (props) => {
    const window = Dimensions.get('window');
    let image_width = 541;
    let image_height = 362;
    const ratio = window.width/image_width;
    return <View>
                <Image style={styles.image} source={{ uri: props.result.image_url }}/>
                <Text style={styles.name}>{props.result.name}</Text>
                <Text>{props.result.rating} Stars, {props.result.review_count} Reviews</Text>
            </View>
}

const styles = StyleSheet.create({
    image : {
        width: window.width,
//        height: image_height*ratio,
        height: 125,
        borderRadius: 4
    },
    name: {
        fontWeight: "bold",
    }
});

export default ResultsDetail;