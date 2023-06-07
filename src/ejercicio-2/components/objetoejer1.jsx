import React from 'react';
import { ReactDOM } from 'react';

const UserInfo = ({ user }) => {
  return (
    <div>

      <p>Nombre: {user.name}</p>
      <p>edad: {user.age}</p>
      <p>Ciudad: {user.city}</p>
    </div>
  );
};

export default UserInfo;
