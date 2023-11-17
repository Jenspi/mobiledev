import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = (props) => {
    const blogID = props.navigation.getParam("id");

    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find( (currentPost) => {
        //search until we find the blog post we want
        return currentPost.id === blogID
    })

    return <BlogPostForm onSubmit={(title, content) => {editBlogPost(blogID, title, content, () => {props.navigation.pop()})} } 
            initialValues={ {title: blogPost.title, content: blogPost.content} }
        />
}

const styles = StyleSheet.create({});

export default EditScreen;