import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usersService } from "../../services/axiosService";


const UserDetails = () => {
    const { id } = useParams()
    const [userDetails, setUserDetails] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            usersService.getById(id)
                .then(response => {
                    setUserDetails(response.data)
                })
                .catch(error => {
                    console.error("error:", error)
                })
        }
    }, [id])

    if (!userDetails) {
        return null
    }

    return (
        <div>
            <div>ID: {userDetails.id}</div>
            <div>Name: {userDetails.name}</div>
            <div>Email: {userDetails.email}</div>
            <div>Username: {userDetails.username}</div>
            <div>Address:</div>
            <ul>
                <li>Street: {userDetails.address.street}</li>
                <li>Suite: {userDetails.address.suite}</li>
                <li>City: {userDetails.address.city}</li>
                <li>Zipcode: {userDetails.address.zipcode}</li>
                <li>Geo: Lat: {userDetails.address.geo.lat}, Lng: {userDetails.address.geo.lng}</li>
            </ul>

            <button onClick={() => navigate(`/users/${id}/posts`)}>Posts of Current User</button>
        </div>
    )
}

export default UserDetails;
