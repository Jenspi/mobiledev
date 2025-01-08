import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = (props) => {
    const [result, setResult] = useState(null);
    const id = props.navigation.getParam('id');

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect( () => {getResult(id)}, []);
    if(!result){
        return null;
    }

    return <View style={{marginHorizontal:15}}>
                <Text style={styles.title}>{result.name}</Text>
                <Text><Text style={{fontWeight:"bold"}}>Address: </Text>{result.location.address1}, {result.location.city}, {result.location.state} {result.location.zip_code}</Text>
                <Text><Text style={{fontWeight:"bold"}}>Phone: </Text>{result.display_phone}</Text>
                { result.transactions[0] ? <Text><Text style={{fontWeight:"bold", textTransform: 'capitalize'}}>✔️ {result.transactions[0]} available!</Text></Text> : null}
                { result.transactions[1] ? <Text><Text style={{fontWeight:"bold", textTransform: 'capitalize'}}>✔️ {result.transactions[1]} available!</Text></Text> : null}
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
        //marginHorizontal : 15,
        width : Dimensions.get('window').width,
//        borderColor:'red',
//        borderWidth:3,
        alignSelf: "center",
        marginVertical:7.5,
        borderRadius: 4,

    },
    title:{
         fontSize:18,
         fontWeight:"bold",
         marginTop : 6,
         marginBottom : 1
    },
});

export default ResultsShowScreen;