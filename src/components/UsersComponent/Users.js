import {useEffect, useState} from "react";
import {usersService, postsService} from "../../services/axiosService";
import {User} from "./User";

export const Users = () => {

        const [users, setUsers] = useState([])
        const [user, setUser] = useState(null)


        useEffect(() => {
                usersService.getAll().then(response => setUsers(response.data))
            }, [])




    return (
            <div>
                {users.map(user => (
                    <User key={user.id} user={user} />
                ))}
                {user && <User user={user} />}
            </div>
        )

    }