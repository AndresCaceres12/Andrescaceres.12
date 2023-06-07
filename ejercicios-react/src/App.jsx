import React from "react";
import { Routes, Route } from "react-router-dom";
import Ejercicio1 from "./ejercicio-1/pages/ejercicio1";
import Ejercicio2 from "./ejercicio-2/pages/ejercicio2";
import Ejercicio3 from "./ejercicio-3/pages/ejercicio3";
import Ejercicio4 from "./ejercicio-4/pages/ejercicio4";
import Ejercicio5 from "./ejercicio-5/pages/ejercicio5";
import Ejercicio6 from "./ejercicio-6/page/ejercicio6";
import Ejercicio7 from "./ejercicio-7/page/ejercicio7";
import Ejercicio8 from "./ejercicio-8/page/ejercicio8";
import Ejercicio9 from "./ejercicio-9/page/ejercicio9";
import Ejercicio10 from "./ejercicio-10/page/ejercicio10";
import Ejercicio11 from "./ejercicio-11/page/ejercicio11";
import Ejercicio12 from "./ejercicio-12/page/ejercicio12";
import { ShoppingCart } from "./ejercicio-11/components/ShoppingCart";
import { ShoppingCartcontents } from "./ejercicio-11/contexts/ShoppingCartcontents";

// Importa el componente Inicio aquí
import Inicio from "./home/inicio";

const App = () => {
return (
<div className="todosEjercicios">
<Routes>
<Route path="/" element={<Inicio />} />
<Route path="/ejercicio1" element={<Ejercicio1 />} />
<Route path="/ejercicio2" element={<Ejercicio2 />} />
<Route path="/ejercicio3" element={<Ejercicio3 />} />
<Route path="/ejercicio4" element={<Ejercicio4 />} />
<Route path="/ejercicio5" element={<Ejercicio5 />} />
<Route path="/ejercicio6" element={<Ejercicio6 />} />
<Route path="/ejercicio7" element={<Ejercicio7 />} />
<Route path="/ejercicio8" element={<Ejercicio8 />} />
<Route path="/ejercicio9" element={<Ejercicio9 />} />
<Route path="/ejercicio10" element={<Ejercicio10 />} />
<Route
path="/carrito"
element={
<ShoppingCartcontents>
<ShoppingCart />
</ShoppingCartcontents>
}
/>
<Route
path="/ejercicio11"
element={
<ShoppingCartcontents>
<Ejercicio11 />
</ShoppingCartcontents>
}
/>
<Route path="/ejercicio12" element={<Ejercicio12 />} />
</Routes>
</div>
);
};

export default App;
