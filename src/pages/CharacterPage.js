import React from 'react';
import {Outlet} from "react-router-dom";
import Characters from "../components/RickMorthysComponent/Characters";

const CharacterPage = () => {
    return (
        <div>
            <Characters />
            <Outlet/>
        </div>
    )
}

export default CharacterPage;