import { useNavigate } from 'react-router-dom';

export const SearchHandler = ({ children }) => {
    const navigate = useNavigate();

    const handleSearch = (searchTerm) => {
        navigate(`/search?query=${searchTerm}`);
    };

    return children({ onSearch: handleSearch });
};