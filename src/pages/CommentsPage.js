import React from 'react';
import {Comments} from "../components/CommentsComponent/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <h1>Comments</h1>
            <Comments />
            <Outlet/>
        </div>
    )
}

export default CommentsPage;