import React,{ createContext } from "react";
import { useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) =>{

    const [perfil,setPerfil] = useState({
        name:'carlos',
        edad:33,
        oficio:'desarrollador'
    });
    const [contador, setContador] = useState(0);

    return(
        <DataContext.Provider value={{
            perfil,
            contador,
            setPerfil,
            setContador
        }}>
            {children}
        </DataContext.Provider>

    )
}