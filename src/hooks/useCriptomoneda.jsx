import styled from "@emotion/styled";
import React, { Fragment, useState } from "react";
import PropType from "prop-types";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block; //Para que tome todo el espacio disponible
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 0.8rem;
  -wetkit-appearance: none; //para que funcionen los styles en el select
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {
  //state de nuestro custon hook
  const [state, actualizarState] = useState(stateInicial);

  const SelectCripto = () => (
    <Fragment>
      <Label htmlFor="">{label}</Label>
      <Select
        name=""
        id=""
        onChange={(e) => actualizarState(e.target.value)}
        value={state}
      >
        <option value="">- Seleccione -</option>
        {opciones.map((opcion) => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
            {opcion.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  //Retornar state, interfaz y funcion que modifica el state
  return [state, SelectCripto, actualizarState];
};

useCriptomoneda.protoType = {
    label: PropType.string.isRequired,
    stateInicial: PropType.string.isRequired,
    opciones: PropType.object.isRequired
}

export default useCriptomoneda;
