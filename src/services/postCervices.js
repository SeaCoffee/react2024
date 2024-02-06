import axiosService from "./axiosServices";
import urls from "../constants/urls";

const postServices = {
    getPosts: () => axiosService(urls.posts),
    getPostById: (id) => axiosService(urls.byId(id))
}

export default postServices;
