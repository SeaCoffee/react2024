import {useEffect, useState} from "react";
import {albumsService} from "../../services/axiosService";
import {Album} from "./Album";

export const Albums = () => {

    const [albums, setAlbums] = useState([])


    useEffect(() => {
            albumsService.getAll().then(response => setAlbums(response.data))
        },
        [])

    return (
        <div>
            {albums.map(album =><Album key={album.id} album ={album}/>)}
        </div>
    )

}