import React, { useState, useEffect } from "react";

const Contador = (prom) => {
  prom = 10;

  const [count, setCount] = useState(prom);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>contador :{count}</div>;
};

export default Contador;
