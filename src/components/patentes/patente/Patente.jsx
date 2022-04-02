import React from 'react';

const Patente = ({abstract_en,claims_en}) => {
    return ( 
        <div>
            <h2>{abstract_en}</h2>
            <ul>
                {claims_en.map(claim => <li>{claim.substring(0,100)}</li>)}
            </ul>
        </div>
     );
}
 
export default Patente;