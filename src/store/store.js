import { configureStore } from '@reduxjs/toolkit';

import {default as characterReducer} from './slices/characterSlice'
import {default as episodeReducer} from './slices/episodeSlice'


const store = configureStore({
    reducer: {
        characters: characterReducer,
        episodes: episodeReducer,
    }
});

export default store;