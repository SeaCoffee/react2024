import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {episodeService} from "../../services/axiosService";

export const fetchAllEpisodes = createAsyncThunk(
    'episodes/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await episodeService.getAll();
            return response.data.results;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchEpisodeById = createAsyncThunk(
    'episodes/fetchById',
    async (episodeId, thunkAPI) => {
        try {
            const response = await episodeService.getById(episodeId);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    episodes: [],
    status: 'loading',
    error: null
};

const episodeSlice = createSlice({
    name: 'episodes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllEpisodes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllEpisodes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.episodes = action.payload;
            })
            .addCase(fetchAllEpisodes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchEpisodeById.fulfilled, (state, action) => {
                const existingEpisode = state.episodes.find(episode => episode.id === action.payload.id);
                if (!existingEpisode) {
                    state.episodes.push(action.payload);
                }
            });
    }
});

export default episodeSlice.reducer;
