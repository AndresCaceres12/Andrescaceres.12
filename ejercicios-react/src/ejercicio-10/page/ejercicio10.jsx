import React from "react";
import UserList from "../components/usuarioss";

const Ejercicio10 = () => {
  const users = [
    { id: 1, name: "Juan", email: "juan@gmail.com" },
    { id: 2, name: "María", email: "maria@gmail.com" },
    { id: 3, name: "Pedro", email: "pedro@gmail.com" },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default Ejercicio10;
