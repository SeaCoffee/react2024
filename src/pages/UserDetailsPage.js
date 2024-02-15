import React from 'react';
import UserDetails from "../components/UsersComponent/UserDetails";
import {Outlet} from "react-router-dom";

const UserDetailsPage = () => {
    return (
        <div>
            <UserDetails />
            <Outlet/>
        </div>
    );
}

export default UserDetailsPage;
