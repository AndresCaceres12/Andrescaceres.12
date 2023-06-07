import React from 'react'
import Filtrar from '../components/filtrar';
const Ejercicio9 = () => {
    const nombres = ['Juan', 'Andres', 'Cristhiam', 'María', 'Pedro',  'Saidy','Luisa', 'Carlos'];
    return (

    <div className='filtros'><Filtrar names = {nombres}/></div>
  )
}
export default Ejercicio9;