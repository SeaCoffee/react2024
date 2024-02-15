import { useNavigate, useParams } from 'react-router-dom';

export const User = ({ user }) => {
    const navigate = useNavigate()
    const { id, name } = user

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <button onClick={() => navigate(`/users/${id}`)}>User Details</button>
        </div>
    )
}