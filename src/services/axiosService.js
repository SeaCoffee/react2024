import {apiRequest} from "./apiRequests";
import {endpoints} from "../urls/urls";


export const albumsService = {
    getAll:()=>apiRequest.get(endpoints.albums.base)
}

export const todosService = {
    getAll:()=>apiRequest.get(endpoints.todos.base)
}


export const commentsService = {
    getAll: () => apiRequest.get(endpoints.comments.base),
    getById: (id) => apiRequest.get(endpoints.comments.byId(id)),
}

export const postsService = {
    getById: (postId) => apiRequest.get(endpoints.posts.byId(postId)),
}



