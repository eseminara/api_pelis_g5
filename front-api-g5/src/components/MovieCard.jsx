import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="movie-card p-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg w-full"
      />
      <h3 className="text-center text-lg font-bold mt-2">{movie.title}</h3>
    </div>
  );
}

export default MovieCard;
