
import React from "react";
import {Outlet} from "react-router-dom";
import Episodes from "../components/RickMorthysComponent/Episodes";

const EpisodePage = () => {
    return (
        <div>
            <Episodes />
            <Outlet/>
        </div>
    )
}

export default EpisodePage;
