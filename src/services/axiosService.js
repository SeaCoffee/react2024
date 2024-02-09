import axios from "axios";
import {baseURL} from "../urls/urls";
import {commentsEndpoint, usersEndpoint} from "../urls/urls";

const axiosService = axios.create({ baseURL })


export const endpoints = {
    base: baseURL,
    usersEndpoint,
    commentsEndpoint

}


export default axiosService;