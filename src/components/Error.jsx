import styled from '@emotion/styled';
import React from 'react';
import PropType from "prop-types";

const MensajeError = styled.p`
    background-color: #B7322C;
    padding: 1rem;
    color: #FFFFFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue' cursive;
`;

const Error = ({ mensaje }) => {
    return ( 
        <MensajeError>{mensaje}</MensajeError>
     );
}

MensajeError.propTypes = {
    mensaje: PropType.string.isRequired
}
 
export default Error;