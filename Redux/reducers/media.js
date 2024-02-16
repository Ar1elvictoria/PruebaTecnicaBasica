import { createSlice } from "@reduxjs/toolkit";
import Data from "../../sample.json";

const initialState = {
  movies: [],
  series: []
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    watchSeries(state) {
        const newSeries = Data.entries.filter(media => media.releaseYear >= 2010 && media.programType === 'series').slice(0, 22).sort((a, b) => a.title.localeCompare(b.title));
        state.series = newSeries;
      },
    watchMovies(state) {
        const newMovies = Data.entries.filter(media => media.releaseYear >= 2010 && media.programType === 'movie').slice(0, 22).sort((a, b) => a.title.localeCompare(b.title));
        state.movies = newMovies;
      }
  }
});

export const { watchSeries, watchMovies } = mediaSlice.actions;

export default mediaSlice.reducer;


