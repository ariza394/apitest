import React from 'react';
import styled from 'styled-components';

const EventosContainer = styled.div`
    grid-row:6 / span 2;
    grid-column-start:2;
    background-color:violet;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const Eventos = () => {
    return ( 
        <EventosContainer>
            <h1>Eventos</h1>
        </EventosContainer>
     );
}
 
export default Eventos;