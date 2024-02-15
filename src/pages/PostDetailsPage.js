import React from 'react';
import Posts from "../components/Post/Posts";
import {Outlet} from "react-router-dom";
import PostDetails from "../components/Post/PostDetails";

const PostDetailsPage = () => {
    return (
        <div>
            < PostDetails/>
        </div>
    )
}

export default PostDetailsPage;