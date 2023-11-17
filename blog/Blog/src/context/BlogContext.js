import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch(action.type){
        case "add_blogpost":
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: action.payload.title,
                content: action.payload.content
            }]
        case "delete_blogpost":
            return state.filter((blogPost) => {
                //return true if the id is NOT the one we want to delete
                //this will return a new state of all blogs we do not want to delete, effectively "deleting" the payload
                return blogPost.id !== action.payload
            });
        case "edit_blogpost":
            return state.map((blogPost) => {
                if(blogPost.id === action.payload.id){
                    return action.payload;
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
        // try{
        //     await axios.post("whatever endpoint", title, content)
            dispatch({type: "add_blogpost", payload:{title:title, content:content}})
            callback();
        //} catch(e){

        //}
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: "delete_blogpost", payload: id})
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: "edit_blogpost", payload: {id:id, title:title, content:content} })
        callback();
    }
}

//allow other files in our code to access Context and Provider
export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost, editBlogPost:editBlogPost}, [ { title:"TESTING TITLE", content:"TEST CONTENT", id:13 } ]);