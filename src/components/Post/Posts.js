import {useEffect, useState} from "react";
import {postsService} from "../../services/axiosService";
import {useParams, useNavigate} from "react-router-dom";
import {Post} from "./Post";


const Posts = () => {
    const { id } = useParams()
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            postsService.getByUserId(id)
                .then(response => {
                    setPosts(response.data)
                })
                .catch(error => {
                    console.error("error:", error)
                })
        }
    }, [id])

    const goToPostDetails = (postId) => {
        navigate(`/posts/${postId}`)
    }

    return (
        <div>
            <h2>Posts of User {id}</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Post post={post} />
                        <button onClick={() => goToPostDetails(post.id)}>Post Details</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default Posts;