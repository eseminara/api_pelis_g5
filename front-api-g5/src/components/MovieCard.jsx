import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="p-4 flex flex-col justify-end h-full">
      <div className="flex-grow">
        <div className="h-64 w-full overflow-hidden rounded-lg">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className="text-center text-lg font-bold mt-2 pb-0">{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
