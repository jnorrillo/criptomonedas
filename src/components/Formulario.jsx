import styled from '@emotion/styled';
import React from 'react';
import useMoneda from '../hooks/useMoneda';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFFFFF;

    transition: background-color 0.3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = () => {
  //arreglo de monedas
  const Monedas = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  //utilizar useMoneda
  const [moneda, SelectMoneda, actualizarSate] = useMoneda(
    "Elige tu Moneda",
    "",
    Monedas
  );

  return (
    <form action="">
      <SelectMoneda></SelectMoneda>
      <Button type="submit" value="calcular"></Button>
    </form>
  );
}
 
export default Formulario;