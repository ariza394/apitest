import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../context/DataContext';


const InfoContainer = styled.div`
    grid-column:1 / -1;
    background-color:blue;
`;

const Information = () => {

    const {perfil} = useContext(DataContext);

    return ( 
        <InfoContainer>
            <h1>{perfil.name}</h1>
        </InfoContainer>
     );
}
 
export default Information;