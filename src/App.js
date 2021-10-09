import styled from '@emotion/styled';
import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';

import imagen from './img/cryptomonedas.png';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

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

  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');
  //useState para guardar los datos de resultado
  const [ resultado, guardarResultado ] = useState({});
  //useState para mostrar el spinner
  const [ cargando, guardarCargando ] = useState(false);

  //cuando halla una actualizacion se usa useEffect para escuchar los cambios
  useEffect( () => {
   
    const cotizarCriptomoneda = async () => {
      //Evitando la ejecucion en la primera vez
      if (moneda === '') return;

      //usamos axios para hacer la consulta a la api
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      //mostrar el spinner
      guardarCargando(true);

      //ocultar el spinner y mostrar el resultado
      setTimeout(() => {
        //cambiar el estado de cargando
        guardarCargando(false);

        //guardar cotizacion
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);

      //este codigo se mueve al setTimeOut
      //guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
    }

    cotizarCriptomoneda();

  }, [ moneda, criptomoneda ]);

  //mostrar spinner o resultado (esto despues de agregar el setTimeOut)
  const componente = (cargando) ? <Spinner></Spinner> : <Cotizacion resultado={resultado}></Cotizacion>;

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
        {/**Para guardar la moneda y la criptonomena se pasa al formulario */}
        <Formulario guardarMoneda={guardarMoneda} guardarCriptomoneda={guardarCriptomoneda}></Formulario>
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
