import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../contexts/ShoppingCartcontents';

export const Navbar = () => {
  const style = {
    color: '#fff',
    listStyle: 'none',
    textDecoration: 'none',
  };

  const { cartCount } = useContext(CarritoContext);

  return (
    <nav>
      <Link to={"/ejercicio11"} style={style}>
        <h2 className='botonli'>tienda</h2>
      </Link>
      <ul className='nav-list'>
        <Link to={"/carrito"} style={style}>
          <li className='botonli'>
          Carrito 
          </li>
        </Link>
      </ul>
    </nav>
  );
};

