import {useState, useEffect} from "react";
import Post from "../postComponent/postComponent";
import postServices from "../../services/postCervices";
import PostDetails from "../postDetailsComponent/postDetailsComponent";




export function GetPosts() {
    const [posts, setPosts] = useState([])
    const [selectedPost, setSelectedPost] = useState(null)

    useEffect(() => {
        postServices.getPosts().then(value => value.data).then(value => setPosts(value))
    }, [])

    const postInfo = (post) => {
        setSelectedPost(post)
    }

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} postInfo={() => postInfo(post)} />)}
            {selectedPost && <PostDetails post={selectedPost} />}
        </div>
    )
}


export function GetPostById({ id }) {
    const [post, setPost] = useState(null)

    useEffect(() => {
        postServices.getPostById(id).then(response => response.data).then(data => setPost(data))
    }, [])

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    )
}





