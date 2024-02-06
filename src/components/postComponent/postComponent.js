


function Post({ post, postInfo}) {
    const { id, title } = post

    return (
        <div>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <button onClick={postInfo}>Post Info</button>
        </div>
    )
}

export default Post;


