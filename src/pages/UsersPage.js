import {Users} from "../components/UsersComponent/Users";
import React from "react";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Users />
            <Outlet/>
        </div>
    );
};

export default UsersPage;
