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
import { ShoppingCart } from "./ejercicio-12/components/ShoppingCart";
import { ShoppingCartcontents } from "./ejercicio-12/contexts/ShoppingCartcontents";
import Ejercicio13 from "./ejercicio-13/page/Ejercicio13";
import Ejercicio14 from "./ejercicio-14/page/Ejercicio14";
import Ejercicio15 from "./ejercicio-15/page/ejercicio15";
import Ejercicio16 from "./ejercicio-16/page/ejercicio16";
import ApartadoP from "./ejercicio-16/components/ApartadoP";
import Ejercicio17 from "./ejercicio-17/page/ejercicio17";
import Ejercicio18 from "./ejercicio-18/page/ejercicio18";
import Ejercicio19 from "./ejercicio-19/page/ejercicio19";
import Ejercicio20 from "./ejercicio-20/page/ejercicio20";
import Ejercicio21 from "./ejercicio-21/page/ejercicio21";
import Ejercicio22 from "./ejercicio-22/page/ejercicio22";
import Ejercicio23 from "./ejercicio-23/page/ejercicio23";
// Diseño de botones
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
<Route path="/ejercicio11" element={<Ejercicio11 />} />
<Route path="/Carrito"element={<ShoppingCartcontents><ShoppingCart /></ShoppingCartcontents>}/>
<Route path="/ejercicio12" element={ <ShoppingCartcontents><Ejercicio12 /></ShoppingCartcontents>}/>
<Route path="/ejercicio13" element={<Ejercicio13 />} />
<Route path="/ejercicio14" element={<Ejercicio14 />} />
<Route path="/ejercicio15" element={<Ejercicio15 />} />
<Route path="/ApartadoP/:index" element={<ApartadoP />}/>
<Route path="/ejercicio16"element={<Ejercicio16 />}/>
<Route path="/ejercicio17"element={<Ejercicio17 />}/>
<Route path="/ejercicio18"element={<Ejercicio18 />}/>
<Route path="/ejercicio19"element={<Ejercicio19 />}/>
<Route path="/ejercicio20"element={<Ejercicio20 />}/>
<Route path="/ejercicio21"element={<Ejercicio21 />}/>
<Route path="/ejercicio22"element={<Ejercicio22/>}/>
<Route path="/ejercicio23"element={<Ejercicio23/>}/>
</Routes>
</div>
);
};

export default App;
