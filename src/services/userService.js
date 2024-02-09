import axiosService from "./axiosService";
import { usersEndpoint } from "../urls/urls";


export const userService = {
    getAllUsers: () => axiosService.get(usersEndpoint),
    createUser: (userData) => axiosService.post(usersEndpoint, userData),
}


