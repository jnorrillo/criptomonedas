import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import useCriptomoneda from "../hooks/useCriptomoneda";
import useMoneda from "../hooks/useMoneda";
import Error from "./Error";
import axios from "axios";
import PropType from "prop-types";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #ffffff;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {
  //state del listado de criptomonedas
  const [listadocripto, guardarCriptomonedas] = useState([]);
  const [error, guardarError] = useState(false);

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

  //utilizar useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Elige tu Criptomoneda",
    "",
    listadocripto
  );

  //ejecutar llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await axios.get(url);

      //guardando el resultado
      guardarCriptomonedas(resultado.data.Data);
    };

    consultarAPI();
  }, []);

  //cuando el usuario hace sugmit
  const cotizarMoneda = (e) => {
    e.preventDefault();

    //validar si ambos capos estan llenos
    if (moneda === "" || criptomoneda === "") {
      guardarError(true);
      return;
    }

    //pasar los datos al componente principal
    guardarError(false);
    guardarMoneda(moneda);
    guardarCriptomoneda(criptomoneda);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? (
        <Error mensaje="Todos los campos son obligatorios"></Error>
      ) : null}
      <SelectMoneda></SelectMoneda>
      <SelectCripto></SelectCripto>
      <Button type="submit" value="calcular"></Button>
    </form>
  );
};

Formulario.protoType = {
  guardarMoneda: PropType.string.isRequired,
  guardarCriptomoneda: PropType.string.isRequired,
};

export default Formulario;
