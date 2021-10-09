import styled from "@emotion/styled";
import React from "react";
import PropType from "prop-types";

const ResultadoDiv = styled.div`
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  //validar si el resultado esta vacio
  if (Object.keys(resultado).length === 0) return null;

  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        Precio más alto del día: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        Precio más bajo del día: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última Actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};

Cotizacion.prototype = {
    resultado: PropType.object.isRequired
}

export default Cotizacion;
