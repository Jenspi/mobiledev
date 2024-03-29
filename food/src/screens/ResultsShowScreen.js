import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = (props) => {
    const [result, setResult] = useState(null);
    const id = props.navigation.getParam('id');
    
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect( () => {getResult(id)}, []);
    if(!result){
        return null;
    }

    return <View>
                <Text>{result.name}!</Text>
                <FlatList 
                    data={result.photos}
                    keyExtractor={(photo) => {return photo}}
                    renderItem={ ({item}) => {
                        return <Image style={styles.image} source={{ uri: item}} />
                    }}
                />
            </View>
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300
    }
});

export default ResultsShowScreen;