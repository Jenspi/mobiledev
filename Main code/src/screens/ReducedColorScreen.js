import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 13;

//Learning state/hooks part III: Reducers
//Turning our original AdvancedColorScreen into one that uses reducers
//reducers are functions that manage changes to objects; they take in ab object with all state data, and an object stating how to change the data. they return the newly changed data.

const ReducedColorScreen = () => {
    //We do not need AdvancedColorScreen's 3 pieces of state or its helper function setColor; all replaced by the reducer

    //conventional names for parameters!
    const reducer = (state, action) => {
        //state- an object that looks like this: {red:number, green:number, blue:number}
        //action- looks like this: {colorToChange: "red", amount:number}
        switch(action.colorToChange){
            case 'red':
                //creating new object with new data; ...state === copy over all properties of previous state
                return{...state, red: state.red + action.amount};
            case 'green':
                return{...state, green: state.green + action.amount};
            case 'blue':
                return{...state, blue: state.blue + action.amount};
            default:
                return state;
        }
    }

    //useReducer- hook; reducer- reference to our own reducer function; object- initial/default data.
    //creating two variables: state- read only data; dispatch- updates 'state' variable using our reducer.
    const [state, dispatch] = useReducer(reducer, {red:0,green:0,blue:0});

    return (
        <View>
            <ColorCounter color="Red"
                onIncrease={ ()=>{ dispatch( {colorToChange:'red', amount:COLOR_INCREMENT}); } }
                onDecrease={ ()=>{ dispatch( {colorToChange:'red', amount:-1*COLOR_INCREMENT}); } }/>
            <ColorCounter color="Green"
                onIncrease={ ()=>{ dispatch( {colorToChange:'green', amount:COLOR_INCREMENT}); } }
                onDecrease={ ()=>{ dispatch( {colorToChange:'green', amount:-1*COLOR_INCREMENT}); } }/>
            <ColorCounter color="Blue"
                onIncrease={ ()=>{ dispatch( {colorToChange:'blue', amount:COLOR_INCREMENT}); } }
                onDecrease={ ()=>{ dispatch( {colorToChange:'blue', amount:-1*COLOR_INCREMENT}); } }/>
            <View style={ {height:100, width:100, backgroundColor:`rgb(${state.red},${state.green},${state.blue})`} }></View>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ReducedColorScreen