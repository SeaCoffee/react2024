import axiosService from "./axiosService";
import { usersEndpoint, commentsEndpoint } from "../urls/urls";


export const userService = {
    getAllUsers: () => axiosService.get(usersEndpoint),
    createUser: (userData) => axiosService.post(usersEndpoint, userData),
}

export const commentsService = {
    getAllComments: () => axiosService.get(commentsEndpoint),
    createComment: (commentData) => axiosService.post(commentsEndpoint, commentData)}


