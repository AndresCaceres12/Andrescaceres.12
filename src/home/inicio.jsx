import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)
`
  margin: 1rem;
  margin-bottom: 1rem; // Añade esto para dar más espacio debajo
  text-decoration: none;
  background-color: #5cb85c;
  border: none;
  font-size: 19px;
  cursor: pointer;
  height: 20px;
  padding: 10px;
  color: white;
  border-radius:13px;
  &:hover {
    color: black;
    border-radius: 5px;
  }
`;

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="inicio2">
      <StyledLink to="/">Inicio</StyledLink>
      <StyledLink to="/ejercicio1">Ejercicio 1</StyledLink>
      <StyledLink to="/ejercicio2">Ejercicio 2</StyledLink>
      <StyledLink to="/ejercicio3">Ejercicio 3</StyledLink>
      <StyledLink to="/ejercicio4">Ejercicio 4</StyledLink>
      <StyledLink to="/ejercicio5">Ejercicio 5</StyledLink>
      <StyledLink to="/ejercicio6">Ejercicio 6</StyledLink>
      <StyledLink to="/ejercicio7">Ejercicio 7</StyledLink>
      <StyledLink to="/ejercicio8">Ejercicio 8</StyledLink>
      <StyledLink to="/ejercicio9">Ejercicio 9</StyledLink>
      </div>
      <div className="inicio2">
      <StyledLink to="/ejercicio10">Ejercicio 10</StyledLink>
      <StyledLink to="/ejercicio11">Ejercicio 11</StyledLink>
      <StyledLink to="/ejercicio12">Ejercicio 12</StyledLink>
      <StyledLink to="/ejercicio13">Ejercicio 13</StyledLink>
      <StyledLink to="/ejercicio14">Ejercicio 14</StyledLink>
      <StyledLink to="/ejercicio15">Ejercicio 15</StyledLink>
      <StyledLink to="/ejercicio16">Ejercicio 16</StyledLink>
      <StyledLink to="/ejercicio17">Ejercicio 17</StyledLink>
      <StyledLink to="/ejercicio18">Ejercicio 18</StyledLink>
      
      </div>
      <StyledLink to="/ejercicio19">Ejercicio 19</StyledLink>
      <StyledLink to="/ejercicio20">Ejercicio 20</StyledLink>
      <StyledLink to="/ejercicio21">Ejercicio 21</StyledLink>
      <StyledLink to="/ejercicio22">Ejercicio 22</StyledLink>

    </div>
  );
};

export default Inicio;
