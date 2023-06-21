import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./peliculas.css";
import { Pelis } from '../infopeli';

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className='contienePelis'>
      <h2>Películas 🎥</h2>
      {Pelis.map((movie, index) => (
        <div
          onClick={() => handleMovieClick(movie)}
          className='CadaPeli'
          key={index}
        >
          <Link to={`/ApartadoP/${index}`}>
            <img src={movie.image} width={"150px"} alt={movie.title} />
          </Link>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

