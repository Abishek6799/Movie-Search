import axios from 'axios';

const API_KEY = '9e0c3988';

export const searchMovies = async (query, type) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?s=${query}&type=${type}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movies");
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movie details");
  }
};

