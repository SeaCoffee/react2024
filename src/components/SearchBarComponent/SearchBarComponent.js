import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        console.log('Search term:', event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting search:', searchTerm);
        onSearch(searchTerm);
        navigate(`/search?query=${searchTerm}`);
        setSearchTerm('');
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                className="search-input"
                type="text"
                placeholder="Search for movies..."
                value={searchTerm}
                onChange={handleChange}
            />
            <button className="search-button" type="submit">Search</button>
        </form>
    );
};
export default SearchBar;
