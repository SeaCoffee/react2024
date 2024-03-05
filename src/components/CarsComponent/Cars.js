import React, { useEffect, useState } from 'react';
import {carsService} from "../../services/carsService";
import {useDispatch, useSelector} from "react-redux";
import {addCar, deleteCar, updateCar} from "../../store/slices/carSlices";

const CarsComponent = () => {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars.cars);
    const [editableCarId, setEditableCarId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        brand: '',
        price: '',
        year: ''
    });

    const handleEditClick = (car) => {
        setEditableCarId(car.id);
        setEditFormData({
            brand: car.brand,
            price: car.price,
            year: car.year
        });
    };

    const handleEditFormChange = (event) => {
        const { name, value } = event.target;

        setEditFormData({
            ...editFormData,
            [name]: value
        });
    };

    useEffect(() => {
        const fetchCars = async () => {
            const response = await carsService.getAllCars();
            response.data.forEach(car => dispatch(addCar(car)));
        };
        fetchCars();
    }, [dispatch]);

    const handleDelete = async (carId) => {
        await carsService.deleteCar(carId);
        dispatch(deleteCar(carId));
    };

    const handleUpdate = async (carId) => {
        await carsService.updateCar(carId, editFormData);
        dispatch(updateCar({ id: carId, ...editFormData }));
        setEditableCarId(null);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        handleUpdate(editableCarId);
    };

    return (
        <div>
            {cars.map(car => (
                <div key={car.id}>
                    {editableCarId === car.id ? (
                        <form onSubmit={handleEditSubmit}>
                            <input
                                type="text"
                                placeholder="Brand"
                                name="brand"
                                value={editFormData.brand}
                                onChange={handleEditFormChange}
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                name="price"
                                value={editFormData.price}
                                onChange={handleEditFormChange}
                            />
                            <input
                                type="number"
                                placeholder="Year"
                                name="year"
                                value={editFormData.year}
                                onChange={handleEditFormChange}
                            />
                            <button type="submit">Save</button>
                            <button onClick={() => setEditableCarId(null)}>Cancel</button>
                        </form>
                    ) : (
                        <>
                            <span>{car.brand} - {car.price} - {car.year}</span>
                            <button onClick={() => handleEditClick(car)}>Edit</button>
                            <button onClick={() => handleDelete(car.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};



export default CarsComponent;