import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {postsService} from "../../services/axiosService";


const PostDetails = () => {
    const { postId } = useParams()
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        if (postId) {
            postsService.getById(postId)
                .then(response => {
                    setPostDetails(response.data)
                })
                .catch(error => {
                    console.error("error:", error)
                });
        }
    }, [postId])

    if (!postDetails) {
        return null
    }

    return (
        <div>
            <div>ID: {postDetails.id}</div>
            <div>Title: {postDetails.title}</div>
            <div>Body: {postDetails.body}</div>
            <div>User ID: {postDetails.userId}</div>
        </div>
    )
}

export default PostDetails;
