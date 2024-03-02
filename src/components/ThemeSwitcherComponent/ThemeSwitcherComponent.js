import React from 'react';

import {useTheme} from "../../contetxt/ThemeContext";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    console.log('theme log')

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );
};

export default ThemeSwitcher;
