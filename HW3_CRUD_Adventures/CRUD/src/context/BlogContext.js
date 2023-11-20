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

// const [title, setTitle] = useState(props.initialValues.title);
// const [content, setContent] = useState(props.initialValues.content);

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
            // return state.map((blogPost) => {
            //     if(blogPost.id === action.payload.id){
            //         return action.payload;
            //     }
            //     else{
            //         return blogPost;
            //     }
            // });
            return [{
                id: action.payload.id,
                gold: action.payload.gold-(action.payload.level*10),
                title: action.payload.title,
                level: action.payload.level+1,
                power: action.payload.power+Math.floor(Math.random() * 5) + 1,
                maxHP: action.payload.maxHP +Math.floor(Math.random() * 7)+3,
                currentHP: action.payload.currentHP,
                }
            ]
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
    return (id, title, level, power, currentHP, maxHP, gold, callback) => {
        console.log(dispatch);
        dispatch({type: "edit_blogpost", payload: {id:id, title:title, gold:gold, level:level, power:power, currentHP:currentHP, maxHP:maxHP} })
        //callback();
    }
}

//allow other files in our code to access Context and Provider
export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost, editBlogPost:editBlogPost}, [ { id:13, title:"Jenny", level:1, health:100, power:20, gold: 100} ]);