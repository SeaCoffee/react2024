

function PostDetails ({ post, getPostById }) {
    const { userId, id, title, body } = post

    return (
        <div>
            <button onClick={() => getPostById(id)}>
                <p>{userId}</p>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
            </button>
        </div>
    )
}


export default PostDetails

