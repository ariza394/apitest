import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useGetData  from '../../hooks/useGetData';
import Patente from './patente/Patente';

const PatentesContainer = styled.div`
    grid-row: 4 / span 2;
    background-color:yellow;
    overflow:hidden;
`;

const Patentes = () => {

    //const [patentes,setPatentes] = useState([]);

    const patentes = useGetData('patentes');

    return ( 
        <PatentesContainer>
            { patentes.items && patentes?.items.slice(0,1).map(patente => 
                <Patente 
                    abstract_en={patente?.abstract_en[0].substring(0,20) || []} 
                    claims_en={patente?.claims_en || []}
                />)
            }
        </PatentesContainer>
     );
}
 
export default Patentes;