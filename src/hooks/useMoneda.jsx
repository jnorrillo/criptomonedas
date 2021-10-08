import styled from "@emotion/styled";
import React, { Fragment, useState } from "react";

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: .8rem;
    -wetkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useMoneda = (label, stateInicial, opciones) => {

    //state de nuestro custon hook
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <Label htmlFor="">{label}</Label>
      <Select name="" id="" onChange={ e => actualizarState(e.target.value)} value={state}>
        <option value="">- Seleccione -</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  //Retornar state, interfaz y funcion que modifica el state
  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
