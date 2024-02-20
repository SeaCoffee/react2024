import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import {episodeService} from "../../services/axiosService";
import {characterService} from "../../services/axiosService";

const Characters = () => {
    const { episodeId } = useParams()
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        episodeService.getById(episodeId)
            .then(response => {
                const characterIds = response.data.characters.map(url => url.split('/').pop())
                Promise.all(characterIds.map(id => characterService.getById(id)))
                    .then(responses => {
                        setCharacters(responses.map(res => res.data))
                    })
            })
            .catch(error => {
                console.error("error:", error)
            })
    }, [episodeId])

    return (
        <div>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>{character.name} {character.id}</li>
                ))}
            </ul>
        </div>
    )
}

export default Characters;

