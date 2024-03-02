import React from 'react';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import UserInfo from "../UserInfoComponent/UsreInfoComponent";
import ThemeSwitcher from "../ThemeSwitcherComponent/ThemeSwitcherComponent";
import GenreSelector from "../GenreSelectorComponent/GenreSelectorComponent";
import SearchBar from "../SearchBarComponent/SearchBarComponent";
import {genresService} from "../../services/axiosService";
import {useTheme} from "../../contetxt/ThemeContext";
import headerStyles from './headerStyles.css'




const Header = ({ onSearch, onGenreSelect }) => {
    const [genres, setGenres] = useState([]);
    const navigate = useNavigate();
    const { theme } = useTheme();

    const headerStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
    };



    useEffect(() => {
        genresService.getAll().then(({ data }) => {
            setGenres(data.genres);
        }).catch(error => {
            console.error('Error loading genres:', error);
        });
    }, []);

    const handleGenreSelect = (genreId) => {
        navigate(`/genres/${genreId}`);
    };

    return (
        <header className="header">
        <h1>MovieDB</h1>
            <SearchBar onSearch={onSearch} />
            <GenreSelector genres={genres} onGenreSelect={onGenreSelect} />
            <div>
                <UserInfo />
                <ThemeSwitcher />
            </div>
        </header>
    );
};


export default Header;

