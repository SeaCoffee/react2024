import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: []
};

export const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload);
        },
        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            if (index !== -1) {
                state.cars[index] = {...state.cars[index], ...action.payload};
            }
    }
    }
});

export const { addCar, deleteCar, updateCar } = carsSlice.actions;
export default carsSlice.reducer;
