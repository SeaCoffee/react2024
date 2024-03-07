import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../services/axiosService";


export const fetchAllCharacters = createAsyncThunk(
    'characters/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await characterService.getAll();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchCharacterById = createAsyncThunk(
    'characters/fetchById',
    async (characterId, thunkAPI) => {
        try {
            const response = await characterService.getById(characterId);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Initial state
const initialState = {
    characters: [],
    status: 'loading',
    error: null
};


const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCharacters.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllCharacters.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.characters = action.payload;
            })
            .addCase(fetchAllCharacters.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchCharacterById.fulfilled, (state, action) => {
                const existingCharacter = state.characters.find(character => character.id === action.payload.id);
                if (!existingCharacter) {
                    state.characters.push(action.payload);
                }
            });
    }
});

export default characterSlice.reducer;
