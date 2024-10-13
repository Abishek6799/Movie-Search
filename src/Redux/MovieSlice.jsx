import { createSlice } from '@reduxjs/toolkit';
  
const initialState = ({
    searchResults: [],
    favorites: [],
    error: '',
})

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
      state.error = '';
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addToFavorites: (state, action) => {
      const movieExists = state.favorites.find(movie => movie.imdbID === action.payload.imdbID);
      if (!movieExists) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(movie => movie.imdbID !== action.payload);
    },
  },
});

export const { setSearchResults, setError, addToFavorites, removeFromFavorites } = movieSlice.actions;
export default movieSlice.reducer;
