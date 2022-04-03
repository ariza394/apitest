import React from 'react';

const Patente = ({abstract_en,claims_en}) => {
    return ( 
        <div>
            <h2>{abstract_en}</h2>
            <ul>
                {claims_en}
            </ul>
        </div>
     );
}
 
export default Patente;