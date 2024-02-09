import axiosService from "./axiosService";
import {commentsEndpoint} from "../urls/urls";

export const commentsService = {
    getAllComments: () => axiosService.get(commentsEndpoint),
    createComment: (commentData) => axiosService.post(commentsEndpoint, commentData)}



