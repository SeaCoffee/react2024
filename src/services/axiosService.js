import {apiRequest} from "./apiRequests";
import {endpoints} from "../urls/urls";



apiRequest.interceptors.response.use(response => {
    if (response.config.url.includes('/episode') && !response.config.url.endsWith('/episode')) {
        if (Array.isArray(response.data.results)) {
            response.data.results = response.data.results.map(episode => ({
                ...episode,
                characters: episode.characters.map(url => url.split('/').pop())
            }))
        } else if (response.data.characters) {
            response.data.characters = response.data.characters.map(url => url.split('/').pop())
        }
    }
    return response
}, error => {
    return Promise.reject(error);
})

export const episodeService = {
    getAll: () => apiRequest.get(endpoints.episode.base),
    getById: (id) => apiRequest.get(endpoints.episode.byId(id))
}

export const characterService = {
    getAll: () => apiRequest.get(endpoints.character.base),
    getById: (id) => apiRequest.get(endpoints.character.byId(id)),
}


