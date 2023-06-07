import React, { useState } from "react";

const UserList = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleClick(user)}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div>
          <h2>Información Detallada</h2>
          <p>Nombre: {selectedUser.name}</p>
          <p>Correo Electrónico: {selectedUser.email}</p>
          
        </div>
      )}
    </div>
  );
};

export default UserList;
