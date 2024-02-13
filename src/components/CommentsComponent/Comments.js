import {useEffect, useState} from "react";
import {commentsService, postsService} from "../../services/axiosService";
import {Comment} from "./Comment";
import {Post} from "../Post/Post";

export const Comments = () => {
    console.log("from CommentsPage")

        const [comments, setComments] = useState([])
        const [post, setPost] = useState(null)


        useEffect(() => {
            console.log('from useeffect')
                commentsService.getAll().then(response => setComments(response.data))
            },
            [])

   const postClick = (postId) => {
        postsService.getById(postId)
            .then(response => {
                console.log(response.data)
                setPost(response.data)
            })
            .catch(error => {
                console.error("error:", error)
            })
    }





    return (
            <div>
                {comments.map(comment => (
                    <Comment key={comment.id} comment={comment} getPost={postClick} />
                ))}
                {post && <Post post={post} />}
            </div>
        )

    }