import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = (props) => {
    // exclude categories with no results (array has no length)
    if(!props.results.length){
        return null;
    }

    return <View style={styles.container}>
                <Text style={styles.title}>{props.headerText}</Text>
                <FlatList
                    horizontal = {true}
                    showsHorizontalScrollIndicator={false}
                    data = {props.results}
                    keyExtractor = {(result) => {return result.id}}

                    renderItem={ ({item}) => {
                        return (
                            <TouchableOpacity onPress={()=>{props.navigation.navigate("ResultsShow", { id: item.id})}}>{/*sending id to ResultsShow*/}
                                <ResultsDetail result={item} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom:10,
    },
    title:{
        fontSize:18,
        fontWeight:"bold"
    },
    
});

export default withNavigation(ResultsList);