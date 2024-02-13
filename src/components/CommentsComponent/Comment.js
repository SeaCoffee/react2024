

export const Comment = ({ comment, getPost }) => {
    const { postId, id, name, email, body } = comment

    return (
        <div>
            <div>{postId}</div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
            <button onClick={() => getPost(comment.postId)}>post</button>

        </div>
    )
}
