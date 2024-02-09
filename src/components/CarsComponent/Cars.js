import React, { useEffect, useState } from 'react';
import {carsService} from "../../services/carsService";

const CarsApi = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        const getAllCars = async () => {
            try {
                const response = await carsService.getAllCars()
                setCars(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        getAllCars()
    }, [])

    const updateCar = async (carId) => {
        try {
            await carsService.updateCar(carId);
            setCars(cars.filter((car) => car.id !== carId))
        } catch (error) {
            console.error(error)
        }

    }

    const deleteCar = async (carId) => {
            try {
                await carsService.deleteCar(carId);
                setCars(cars.filter((car) => car.id !== carId))
            } catch (error) {
                console.error(error)
            }
    }

    return (
        <div>
            {cars.map((car) => (
                <div key={car.id}>
                    <span>{car.brand} - {car.year} - ${car.price}</span>
                    <button onClick={() => updateCar(car.id)}>Update</button>
                    <button onClick={() => deleteCar(car.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default CarsApi;
