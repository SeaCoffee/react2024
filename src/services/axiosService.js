import axios from "axios";
import urls from "../constants/urls";

let axiosService = axios.create({ baseURL: urls.base })

export default axiosService;