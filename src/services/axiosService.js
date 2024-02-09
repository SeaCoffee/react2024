import axios from "axios";
import {baseURL} from "../urls/urls";
import {carsEndpoint} from "../urls/urls";

const axiosService = axios.create({ baseURL })


export const endpoints = {
    base: baseURL,
    carsEndpoint,


}


export default axiosService;