import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";

import {fetchAllEpisodes} from "../../store/slices/episodeSlice";



const Episodes = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const episodes = useSelector(state => state.episodes.episodes);
    const [currentPage, setCurrentPage] = useState(1);
    const episodesPage = 4;

    const totalPages = Math.ceil(episodes.length / episodesPage);
    const startIndex = (currentPage - 1) * episodesPage;
    const currentEpisodes = episodes.slice(startIndex, startIndex + episodesPage);

    useEffect(() => {
        dispatch(fetchAllEpisodes());
    }, [dispatch]);

    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            navigate(`/episode?page=${page}`);
        }
    };

    return (
        <div>
            <ul>
                {currentEpisodes.map(episode => (
                    <li key={episode.id}>
                        <Link to={`/episode/${episode.id}/characters`}>{episode.name} {episode.id} {episode.chapter}</Link>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>Назад</button>
                <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>Вперед</button>
            </div>
        </div>
    );
};

export default Episodes;


