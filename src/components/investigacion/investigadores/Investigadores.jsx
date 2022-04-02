import React, {useState} from 'react';
import { DataContext } from '../../../context/DataContext';
import styled from 'styled-components'

const Investigadores = () => {

    const [contador, setContador] = useState(0);

    const Btn = styled.button`
        padding:5px 50px;
        margin:5px;
        cursor:pointer;
        color:white;
    `;

    const GreenButton = styled(Btn)`
        background-color:green;
    `;

    const BlueButton = styled(Btn)`
        background-color:blue;
    `;


    return ( 
        <div>
            <h1>contador en: {contador}</h1>
            <GreenButton onClick={()=>setContador(contador+1)}>+</GreenButton>
            <BlueButton onClick={()=>setContador(contador-1)}>-</BlueButton>
        </div>
     );
}
 
export default Investigadores;