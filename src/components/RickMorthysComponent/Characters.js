import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {fetchCharacterById} from "../../store/slices/characterSlice";

const Characters = () => {
    const { episodeId } = useParams();
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters.characters);

    useEffect(() => {
        dispatch(fetchCharacterById(episodeId));
    }, [dispatch, episodeId]);

    return (
        <div>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>{character.name} {character.id}</li>
                ))}
            </ul>
        </div>
    );
};

export default Characters;

