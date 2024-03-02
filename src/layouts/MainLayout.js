import React from 'react';

import Header from "../components/HeaderComponent/HeaderComponent";
import { Outlet } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import {useTheme} from "../contetxt/ThemeContext";



export const MainLayout = ({ onSearch }) => {
    const navigate = useNavigate();
    const { theme } = useTheme();


    const layoutStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
    };

    const onGenreSelect = (genreId) => {
        navigate(`/genres/${genreId}`);
    };

    return (
        <div style={layoutStyle}>
            <Header onSearch={onSearch} onGenreSelect={onGenreSelect} />
            <Outlet />
        </div>
    );
};
