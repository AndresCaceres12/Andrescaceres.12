import React from 'react';
import { useParams } from 'react-router-dom';
import { Pelis } from '../infopeli';

const ApartadoP = () => {
  const { index } = useParams();
  const movie = Pelis[index];

  if (!movie) {
    return <div></div>;
  }

  return (
    <div className="tutuloo">
        <h2>Mas informacion 🎬 </h2>
    <div className='contieneInfo'>
        
      <div className='ImagenP'>
      <img src={movie.image} width={"350px"} alt={movie.title} />

      </div>
      <div className='DescripcionP'>
      <h2> Titulo : {movie.title}</h2>
      <p>{movie.description}</p>
      <b>Rating: {movie.rating}</b>
      
      </div> 
    </div>
    </div>
  );
};

export default ApartadoP;
