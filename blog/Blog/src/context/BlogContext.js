import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch(action.type){
        case "add_blogpost":
            return [...state, {id: Math.floor(Math.random() * 9999), title: `Blog Post #${state.length + 1}`}]
        case "delete_blogpost":
            return state.filter((blogPost) => {
                //return true if the id is NOT the one we want to delete
                //this will return a new state of all blogs we do not want to delete, effectively "deleting" the payload
                return blogPost.id !== action.payload
            });
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: "add_blogpost"})
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: "delete_blogpost", payload: id})
    }
}

//allow other files in our code to access Context and Provider
export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost}, []);