import React from 'react'
import UserInfo from '../components/objetoejer1';


const Ejercicio2 = () => {
  const user = {
    name: 'Andres',
    age: 17,
    city: 'Cucuta',
  };

  return (
    <div>
      <h1>La info es</h1>
      <UserInfo user={user} />
    </div>
  );
}

export default Ejercicio2;