import { configureStore } from '@reduxjs/toolkit';
import {default as carsReducer} from "./slices/carSlices";




const store = configureStore({
    reducer: {
        cars: carsReducer
    }
});

export default store;

