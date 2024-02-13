
export const Todo = ({ todo }) => {
    const { userId, id, title, completed} = todo

    return (
        <div>
            <div>{userId}</div>
            <div>{id}</div>
            <div>{title}</div>
            <div>Completed: {completed ? 'True' : 'False'}</div>
        </div>
    )
}
