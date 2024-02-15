import {apiRequest} from "./apiRequests";
import {endpoints} from "../urls/urls";



export const usersService = {
    getAll: () => apiRequest.get(endpoints.users.base),
    getById: (id) => apiRequest.get(endpoints.users.byId(id))
}

export const postsService = {
    getAll: () => apiRequest.get(endpoints.posts.base),
    getById: (postId) => apiRequest.get(endpoints.posts.byId(postId)),
    getByUserId: (userId) => apiRequest.get(endpoints.posts.byUserId(userId))
}



