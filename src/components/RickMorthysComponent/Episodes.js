import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {episodeService} from "../../services/axiosService";


const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [episodesPage, setEpisodesPage] = useState(4)
    const navigate = useNavigate()

    const totalPages = (episodes.length / episodesPage) + (episodes.length % episodesPage > 0 ? 1 : 0)
    const startIndex = (currentPage - 1) * episodesPage
    const currentEpisodes = episodes.slice(startIndex, startIndex + episodesPage)


    useEffect(() => {
        episodeService.getAll()
            .then(response => {
                if (response.data && response.data.results) {
                    setEpisodes(response.data.results)
                } else {
                    console.error("error")
                }
            })
            .catch(error => {
                console.error("error:", error)
            })
    }, [])





    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
            navigate(`/episode?page=${page}`)
        }
    }

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
    )
}

export default Episodes;

