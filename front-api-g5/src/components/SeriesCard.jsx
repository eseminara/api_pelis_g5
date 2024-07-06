import React from 'react';
import { Link } from 'react-router-dom';

const SeriesCard = ({ show }) => {
  return (
    <div className="p-4 flex flex-col justify-end h-full">
      <Link to={`/series/${show.id}`} className="block">
        <div className="flex-grow">
          <div className="h-64 w-full overflow-hidden rounded-lg">
            <img
              src={show.image_thumbnail_path}
              alt={show.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h3 className="text-center text-lg font-bold mt-2 pb-0">{show.name}</h3>
      </Link>
    </div>
  );
};

export default SeriesCard;