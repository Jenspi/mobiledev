import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    switch(action.type){
        case "get_blogposts":
            return action.payload;
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

const getBlogPosts = dispatch =>{
    // GET method
    return async () => {
        const response = await jsonServer.get("/blogposts");
        // response.data = [ {}, {}, {}, ... ]
        dispatch({type: "get_blogposts", payload: response.data})
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
//        dispatch({type: "add_blogpost", payload:{title:title, content:content}})

        // POST instead of GET because we will be adding an object to our json file
        await jsonServer.post("/blogposts", {title: title, content: content});
        callback();
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({type: "delete_blogpost", payload: id})
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title: title, content: content})
        dispatch({type: "edit_blogpost", payload: {id:id, title:title, content:content}})
        callback();
    }
}

//allow other files in our code to access Context and Provider
export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost, editBlogPost:editBlogPost, getBlogPosts:getBlogPosts}, [ ]);

//with dummy data for debugging/testing:
//export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost, editBlogPost:editBlogPost, getBlogPosts:getBlogPosts}, [ { title:"My first blog post...💗", content:"Hi there, this is my first blog post. I can edit, save, and/or delete posts!", id:13 } ]);