import React, { useReducer, useState } from "react";
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
    // while( props.map((hero.title)) ){
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
        case "add_blogpost":
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
        case "delete_blogpost":
            return state.filter((blogPost) => {
                //return true if the id is NOT the one we want to delete
                //this will return a new state of all blogs we do not want to delete, effectively "deleting" the payload
                return blogPost.id !== action.payload
            })
        case "edit_blogpost":
            return state.map((blogPost) => {
                if(blogPost.id === action.payload.id){
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
                    return blogPost;
                }
            });
        case "update_blogpost":
            return state.map((blogPost) => {
                if(blogPost.id === action.payload.id){
                    
                    console.log(blogPost);
                    
                    if(action.payload.win ===1){
                        //win
                        return{
                            id: action.payload.id,
                            title: action.payload.title,
                            power: action.payload.power,
                            // currentHP: action.payload.currentHP - Math.floor(Math.random() * 5)+1,
                            currentHP:99999999,
                            maxHP: action.payload.maxHP,
                            gold: action.payload.gold + (Math.floor(Math.random() * 5)+1),//- for lose
                            // gold: 2222222,
                            level: action.payload.level
                        }
                    }
                    //if(action.payload.currentHP <=0 || action.payload.gold <=0){
                    //else if(!action.payload.win){
                    else{
                        //lose
                        //losing is determined by negative currentHP & gold (as sent in through updateBlogPost)
                        //so we need to make those positive again
                        return{
                            id: action.payload.id,
                            title: action.payload.title,
                            power: action.payload.power,
                            // currentHP: (action.payload.currentHP*-1) - Math.floor(Math.random() * 5)+2,
                            // maxHP: action.payload.maxHP,
                            gold: (action.payload.gold*-1) - (Math.floor(Math.random() * 5)+3),
                            currentHP:666666,
                            maxHP: action.payload.maxHP,
                            // gold: action.payload.gold-Math.floor(Math.random() * 5)+1,//- for lose
                            // gold: 11111,
                            level: action.payload.level
                        }
                    }
                }
                else{
                    return blogPost;
                }
            });
            
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
    //return (title, content) => {
        // try{
        //     await axios.post("whatever endpoint", title, content)
            dispatch({type: "add_blogpost", payload:generateNewHero()});
            //callback();
        //} catch(e){

        //}
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: "delete_blogpost", payload: id});
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, power, currentHP, maxHP, gold, level, callback) => {
        console.log(dispatch);
        dispatch({type: "edit_blogpost", payload: {id:id, title:title, power:power, currentHP:currentHP, maxHP:maxHP, gold:gold, level:level, win:win} })
        //callback();
    }
}

const updateBlogPost = (dispatch) => {
    return (id, title, power, currentHP, maxHP, gold, level, win, callback) => {
        console.log(dispatch);
        dispatch({type: "update_blogpost", payload: {id:id, title:title, power:power, currentHP:currentHP, maxHP:maxHP, gold:gold, level:level, win:win} })
        //callback();
    }
}

//allow other files in our code to access Context and Provider
export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost, editBlogPost:editBlogPost, updateBlogPost:updateBlogPost}, [ { id:13, title:"WINNING HERO", level:1, health:100, power:20, gold: 100}, { id:16, title:"LOSING HERO", level:1, health:100, power:0, gold: 100} ]);