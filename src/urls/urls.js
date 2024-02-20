
export const baseURL = 'https://rickandmortyapi.com/api'

const episode = '/episode'

const character = '/character'


export const endpoints = {
    episode: {
        base: episode,
        byId: (id) => `${episode}/${id}`
    },

    character: {
        base: character,
        byId: (id) => `${character}/${id}`,
    }
}
