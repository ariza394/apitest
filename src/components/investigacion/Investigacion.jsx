import React from 'react';
import Grupos from './grupos';
import Investigadores from './investigadores';
import styled from 'styled-components';

const InvestigacionContainer = styled.div`
    display:grid;
    gap:30px;
    grid-template-columns:1fr 1fr;
`;

const Investigacion = () => {
    return ( 
        <InvestigacionContainer>
            <Grupos />
            <Investigadores />
        </InvestigacionContainer>
     );
}
 
export default Investigacion;