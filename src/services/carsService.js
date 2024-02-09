import axiosService from "./axiosService";
import { carsEndpoint } from "../urls/urls";


export const carsService = {
    getAllCars: () => axiosService.get(carsEndpoint),
    createCar: (carData) => axiosService.post(carsEndpoint, carData),
    updateCar: (id, carData) => axiosService.patch(`${carsEndpoint}/${id}`, carData),
    deleteCar: (id) => axiosService.delete(`${carsEndpoint}/${id}`),
}


