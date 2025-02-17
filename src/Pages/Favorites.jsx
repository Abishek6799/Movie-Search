import React from 'react';
import {useSelector } from 'react-redux';
import MovieCard from '../Components/MovieCard';

const Favorites = () => {
  const favorites = useSelector(state => state.movies.favorites);

  return (
    <div className="bg-black min-h-screen pt-16">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-white font-bold mb-4">Favorite Movies</h1>
        {favorites.length === 0 ? (
          <p className='text-blue-500 text-center text-2xl '>No Favorites</p>
        ) : (
          <div className=" grid justify-center items-center sm:grid-cols-2 mb-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {favorites.map(movie => (
              <div key={movie.imdbID} className="relative">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
