

export const Post = ({ post }) => {
    const { userId, id, title, body } = post

    return (
        <div>
            <div>{userId}</div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
}
