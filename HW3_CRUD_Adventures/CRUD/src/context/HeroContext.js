import React, { useReducer, useState, useContext } from "react";
import createDataContext from "./createDataContext";

//generator by Dr. Ben Samuel, modified by Jenny Spicer
const generateNewHero = (props) => {
    let hero = {};
    hero.level = 1;

    let firstNameList = ["Silvertoes", "Shadowful", "Shadowreek", "Toadstare", "Dirth", "Goldtouch", "Sheik", "Weirdwolf",
    "Sheeppusher", "Prowl", "Ramhorn", "Skullcast", "Sandstorm", "Wartbug"];
    let lasNameList = ["Huse", "Ice", "Horsebaler", "Hogpusher", "Souldancer", "Fatman", "Cloudtrance", "Ultra-Hit"];

    hero.title = firstNameList[Math.floor(Math.random() * firstNameList.length)] + " " +
                lasNameList[Math.floor(Math.random() * lasNameList.length)];


    //TODO: check if hero name already exists
    // while( typeof hero.title === 'undefined' ){
    //     hero.title = firstNameList[Math.floor(Math.random() * firstNameList.length)] + " " +
    //             lasNameList[Math.floor(Math.random() * lasNameList.length)];
    // }

    hero.gold = 100;
    hero.power = Math.floor(Math.random() * 5) + 1;
    hero.maxHP = Math.floor(Math.random() * 7) + 3;
    hero.currentHP = hero.maxHP;
    return hero;
}

const blogReducer = (state, action) => {
    switch(action.type){
        case "add_heroInfo":
            return [...state, {
                    id: Math.floor(Math.random() * 9999),
                    title: action.payload.title,
                    level: action.payload.level,
                    power: action.payload.power,
                    maxHP: action.payload.maxHP,
                    currentHP: action.payload.currentHP,
                    gold: action.payload.gold,
                }
            ]
        case "delete_heroInfo":
            return state.filter((heroInfo) => {
                //return true if the id is NOT the one we want to delete
                //this will return a new state of all blogs we do not want to delete, effectively "deleting" the payload
                return heroInfo.id !== action.payload
            })
        case "edit_heroInfo":
            return state.map((heroInfo) => {
                if(heroInfo.id === action.payload.id){
                    if(heroInfo.gold >= heroInfo.level*10){
                        var randomUpgradeAddition = Math.floor( (action.payload.maxHP/3) ) ;
                        var randomMaxHealth = Math.floor(Math.random() * 7) + 3;
                        if(action.payload.currentHP + randomUpgradeAddition >= action.payload.maxHP + randomMaxHealth){
                            //if currentHealth is going to be updated to a number greater than maxHP
                            //just return max
                            randomUpgradeAddition = randomMaxHealth;
                        }
                        return{
                            id: action.payload.id,
                            title: action.payload.title,
                            power: action.payload.power + ( Math.floor(Math.random() * 5)+1 ),
                            currentHP: action.payload.currentHP + randomUpgradeAddition,
                            maxHP: action.payload.maxHP + randomMaxHealth,
                            gold: action.payload.gold - ( action.payload.level*10 ),
                            level: action.payload.level + 1,
                        }
                    }
                    else{
                        console.log("Not Enough Gold");
                        return heroInfo;
                    }
                }
                else{
                    return heroInfo;
                }
            });
        case "update_heroInfo":
            return state.map((heroInfo) => {
                if(heroInfo.id === action.payload.id){
                    //console.log(heroInfo);
                    //console.log(heroInfo.win);
                    const small = Math.floor(Math.random() * 5)+1;
                    const large = Math.floor(Math.random() * 8)+1;

                    if(heroInfo.win ===1){
                        // hero wins
                        return{
                            id: action.payload.id,
                            title: action.payload.title,
                            power: action.payload.power,
                            currentHP: action.payload.currentHP,
                            maxHP: action.payload.maxHP,
                            gold: action.payload.gold + large,
                            level: action.payload.level
                        }
                    }
                    else if(heroInfo.win ===0){
                        // hero loses
                        return{
                            id: action.payload.id,
                            title: action.payload.title,
                            power: action.payload.power,
                            currentHP: action.payload.currentHP - large,
                            gold: action.payload.gold - large,
                            maxHP: action.payload.maxHP,
                            level: action.payload.level
                        }
                    }
                }
                else{
                    return heroInfo;
                }
            });
            
        default:
            return state;
    }
}

const addheroInfo = (dispatch) => {
    return async (title, content, callback) => {
            dispatch({type: "add_heroInfo", payload:generateNewHero()});
    }
}

const deleteheroInfo = (dispatch) => {
    return (id) => {
        dispatch({type: "delete_heroInfo", payload: id});
    }
}

const editheroInfo = (dispatch) => {
    return (id, title, power, currentHP, maxHP, gold, level, callback) => {
        console.log(dispatch);
        dispatch({type: "edit_heroInfo", payload: {id:id, title:title, power:power, currentHP:currentHP, maxHP:maxHP, gold:gold, level:level} })
    }
}

const updateheroInfo = (dispatch) => {
    return (id, title, power, currentHP, maxHP, gold, level, win, callback) => {
        console.log(dispatch);
        dispatch({type: "update_heroInfo", payload: {id:id, title:title, power:power, currentHP:currentHP, maxHP:maxHP, gold:gold, level:level, win:win} })
    }
}

//allow other files in our code to access Context and Provider
export const {Context, Provider} = createDataContext(blogReducer, {addheroInfo: addheroInfo, deleteheroInfo: deleteheroInfo, editheroInfo:editheroInfo, updateheroInfo:updateheroInfo}, [ { id:13, title:"Winning Hero", power:3, currentHP:100, maxHP:100, power:20, gold: 100, level:1}, { id:16, title:"Losing Hero", currentHP:20, maxHP:20, power:0, gold: 20, level:0} ]);