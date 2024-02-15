import {useNavigate} from "react-router-dom";

export const Post = ({ post }) => {
    const { userId, id, title, body } = post
    const navigate = useNavigate()

    return (
        <div>
            <div>{userId}</div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
            <button onClick={() => navigate(`/posts/${id}`)}>Post Details</button>
        </div>
    )
}
