import styled from '@emotion/styled';
import React from 'react';
import Formulario from './components/Formulario';

import imagen from './img/cryptomonedas.png';

const Contenedor = styled.div`
  max-width: 90%;
  margin: 0 auto;
  @media (min-width: 992px ) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFFFFF;
  text-align-last: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  //Esta es la linea que sale endebajo del texto
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {
  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="imagen cripto"
        ></Imagen>
      </div>
      <div>
        <Heading>Cotiza Criptonomedas al Instante</Heading>
        <Formulario></Formulario>
      </div>
    </Contenedor>
  );
}

export default App;
