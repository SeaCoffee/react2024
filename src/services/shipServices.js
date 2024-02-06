import axiosService from "./axiosService";
import urls from "../constants/urls";

const shipServices = {
    getShips: () => axiosService(urls.ships)
}

export default shipServices;