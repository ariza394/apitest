import React, { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

const Grupos = () => {

    const {perfil, setPerfil} = useContext(DataContext);

    return ( 
        <div>
            <h2>Name</h2>
            <input name='name' onChange={(e) => setPerfil({...perfil, [e.target.name] : e.target.value})} type="text" />
        </div>
     );
}
 
export default Grupos;