import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults(); // extracting hook logic

    const filterResultByPrice = (price) => {
        //calling the filter function on results (filter function requires a function as input as well)
        //this function returns a boolean value
        //we are checking to which result is $, $$, or $$$ (these are passed into filterResultByPrice).
        let myFilteredArray = results.filter( (result) => {
            return result.price === price;
        })

        return myFilteredArray;
    }

    return <View style={styles.container}>
                <SearchBar searchTerm={searchTerm} onTermChange={ (newTerm) => setSearchTerm(newTerm)}
                            onSearchTermSubmit = {() => {searchApi(searchTerm)}}/>
                {/* <Text>Am I working? {searchTerm}</Text> */}
                {errorMessage ? <Text>{errorMessage}</Text> : null}

                <Text style={styles.resultText}> {results.length} results found:</Text>

                <ScrollView>
                    <ResultsList headerText="$ Options" results={filterResultByPrice("$")}/>
                    <ResultsList headerText="$$ Options" results={filterResultByPrice("$$")}/>
                    <ResultsList headerText="$$$ Options" results={filterResultByPrice("$$$")}/>
                </ScrollView>
            </View>
}

const styles = StyleSheet.create({
    container : {
//        borderColor:'red',
//        borderWidth:3,
        flex:1
    },
    resultText : {
        marginLeft:10,
        color:"grey"
    },
});

export default SearchScreen;